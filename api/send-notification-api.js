const { taskQueue } = require('../bull/task-queue.js');


async function sendNotificationAPI(req, res) {
    const { userId, title = '무제', body = 'blank' } = req.body;
    try {
      await taskQueue.add('resolve-token', { userId, title, body });
      res.status(200).send('Notification sent successfully');
    } catch (error) {
      res.status(500).send('Error sending notification');
    }
}

  module.exports = {
    sendNotificationAPI
  }