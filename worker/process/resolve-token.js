const { TokenManager } = require("../../manager/token-manager.js");

const resolveTokenProcess = async (job) => {
    const tokenManager = new TokenManager();
    const { userId, title, body } = job.data;
    const tokens = await tokenManager.getTokens(userId);
    return { jobName: job.name, tokens, title, body };
}

module.exports = {
    resolveTokenProcess,
}
