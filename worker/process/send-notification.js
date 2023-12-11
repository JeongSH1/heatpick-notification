const { NotificationManager } = require("../../manager/notification-manager.js");

const sendNotificationProcess = async (job) => {
    const notificationManager = new NotificationManager();
    const { token, title, body } = job.data;
    const message = notificationManager.createMessage(token, title, body);
    await notificationManager.pushOne(message);

}

module.exports = {
    sendNotificationProcess,
}