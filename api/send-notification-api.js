const { QueueEvents } = require('bullmq');
const { taskQueue } = require('../bull/task-queue.js');
const { redisOptions } = require('../bull/redis-option.js');


const queueEvents = new QueueEvents('task-queue', redisOptions);

queueEvents.on('completed', (job) => {
  const requiredKeys = ['tokens', 'title', 'body'];
  if (requiredKeys.every(key => Object.keys(job.returnvalue).includes(key))) {
    for (const token of job.returnvalue.tokens) {
      taskQueue.add('send-notification', { token: token, title: job.returnvalue.title, body: job.returnvalue.body })
    }
  }
    
})

async function sendNotificationAPI(req, res) {
    const { userId, title = '무제', body = 'blank' } = req.body;
    try {
      await taskQueue.add('resolve-token', { userId, title, body });
      res.status(200).send('accept');
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
}

  module.exports = {
    sendNotificationAPI
  }