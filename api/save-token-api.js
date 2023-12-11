const { TokenManager } = require("../manager/token-manager.js");

async function saveTokenAPI(req, res) {
  const { userId, token } = req.body;
  const tokenManager = new TokenManager()
  try {
    await tokenManager.saveToken(token, userId);
    console.log(`[${new Date().toUTCString()}] [COMPLETED] ${userId} saved token`);
    res.status(200).send('Token saved successfully');
  } catch (error) {
    console.log(`[${new Date().toUTCString()}] [FAILED] ${userId} saved token`)
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { saveTokenAPI };