const admin = require('firebase-admin');
const { serviceAccount } = require('../key/service-account.js');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

class NotificationManager {

    createMessage(token, title, body) {
        return {
            notification: {
              title,
              body,
            },
            token,
        };
    }

    async pushOne(message) {
      admin.messaging().send(message)
      .then((response) => {
        console.log(`[${new Date().toUTCString()}] [SUCCEED] Successfully sent message:`, response);
      })
      .catch((error) => {
        console.error(`[${new Date().toUTCString()}] [FAILED] Error sending message:`, error);
      });
    }
}

module.exports = { NotificationManager }