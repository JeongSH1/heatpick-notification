const express = require('express');
const { createBullBoard } = require('@bull-board/api');
const { ExpressAdapter } = require('@bull-board/express');
const { BullMQAdapter } = require('@bull-board/api/bullMQAdapter');
const { taskQueue } = require ('./bull/task-queue.js');
const { saveTokenAPI } = require('./api/save-token-api.js');
const { sendNotificationAPI } = require('./api/send-notification-api.js');

const app = express();
const port = process.env.PORT || 3000;

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/ui');
createBullBoard({
  queues: [new BullMQAdapter(taskQueue)],
  serverAdapter,
});



app.use(express.json());
app.use('/ui', serverAdapter.getRouter());


app.post('/save-token', saveTokenAPI);
app.post('/send-notification', sendNotificationAPI);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
