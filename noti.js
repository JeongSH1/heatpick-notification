import express from "express";
import admin from "firebase-admin";
import { getTokenByUserId } from "./db/get-token.js";
import { serviceAccount } from "./key/service-account.js";

// Firebase Admin SDK 초기화

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());



// FCM 메시지 전송 엔드포인트
app.post('/send-notification', async (req, res) => {
  const { userId, title, body } = req.body;
  
  const token = await getTokenByUserId(userId);

  const message = {
    notification: {
      title,
      body,
    },
    token,
  };

  admin.messaging().send(message)
    .then((response) => {
      console.log('Successfully sent message:', response);
      res.status(200).send('Notification sent successfully');
    })
    .catch((error) => {
      console.error('Error sending message:', error);
      res.status(500).send('Error sending notification');
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
