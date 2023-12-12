const { taskQueue } = require("../bull/task-queue.js");


async function saveTokenAPI(req, res) {
  const { token, userId } = req.body;
  try {
    await taskQueue.add('save-token', { token, userId });
    res.status(200).send('Token saved successfully');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { saveTokenAPI };