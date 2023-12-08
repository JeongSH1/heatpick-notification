import express from "express";
import admin from "firebase-admin";
import { getTokenByUserId } from "./db/get-token.js";
import { serviceAccount } from "./key/service-account.js";
import { saveToken } from "./db/save-token.js";

// Firebase Admin SDK 초기화

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.post('/save-token', async (req, res) => {
  const { userId, token } = req.body;
  
  try {
    const result = await saveToken(userId, token);

    if (result) {
      res.status(200).send('token saved successfully');
    } else {
      // saveToken 함수가 false를 반환하는 경우에 대한 처리
      res.status(404).send('token saved failed');
    }
  } catch (error) {
    // saveToken 함수에서 에러가 발생한 경우에 대한 처리

    if (error.code === 'ER_DUP_ENTRY') {
      res.status(409).send('Token already exists for this user');
    } else {
      res.status(500).send('Internal Server Error');
    }
  }
})


// FCM 메시지 전송 엔드포인트
app.post('/send-notification', async (req, res) => {
  const { userId, title = '무제', body = 'blank' } = req.body;
  
  try {
    const token = await getTokenByUserId(userId);
    console.log(`${new Date}: send title: ${title} send body: ${body}`);
    

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
  } catch(err) {
    console.log(err);
  }


    
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
