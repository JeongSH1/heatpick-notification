const { Queue: QueueMQ } = require('bullmq');
const { setupWorker } = require('../worker/worker.js');
const { redisOptions } = require('./redis-option.js');


const taskQueue = new QueueMQ('task-queue', { connection: redisOptions });
setupWorker();

module.exports = {
  taskQueue,
}