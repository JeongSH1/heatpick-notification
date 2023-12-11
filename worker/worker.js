const { Worker } = require('bullmq');
const { resolveTokenProcess } = require('./process/resolve-token.js');
const { sendNotificationProcess } = require('./process/send-notification.js');
const { redisOptions } = require('../bull/redis-option.js');

function setupWorker() {
    const worker = new Worker(
        'task-queue',
        async (job) => {
    
            if (job.name === 'resolve-token') {
                return await resolveTokenProcess(job);
            }
    
            if (job.name == 'send-notification') {
                return await sendNotificationProcess(job);
            }
        }, 
        {
            connection: redisOptions,
            autorun: true,
        }
    );
    
    worker.on(`completed`, (job, result) => {
        console.log(`[${new Date().toUTCString()}] [COMPLETED] ${job.id}. ${job.name} has completed!`);
    })
    
    worker.on('failed', (job, error) => {
        console.log(`[${new Date().toUTCString()}] [FAILED] ${job.id}. ${job.name} has failed with ${error.message}`);
    })
}

module.exports = {
    setupWorker,
}