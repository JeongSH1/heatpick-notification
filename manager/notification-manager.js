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
        console.log('Successfully sent message:', response);
        res.status(200).send('Notification sent successfully');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        res.status(500).send('Error sending notification');
      });
    }
}

module.exports = { NotificationManager }