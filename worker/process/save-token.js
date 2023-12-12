const { TokenManager } = require("../../manager/token-manager.js");

const saveTokenProcess = async (job) => {
    const tokenManager = new TokenManager();
    const { token, userId } = job.data;
    await tokenManager.saveToken(token, userId);
    return { jobName: job.name };
}

module.exports = {
    saveTokenProcess,
}
