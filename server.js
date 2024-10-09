import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const port = 5000; // Port numarası

// CORS ve body-parser middleware'leri
app.use(cors());
app.use(bodyParser.json());

// E-posta gönderme route'u
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'basak.karadeniz0@gmail.com',  // Gmail adresinizi buraya yazın
      pass: 'mxxq useo kjqa cldb',  // Uygulama şifresini buraya yazın
    },
  });
  
  const mailOptions = {
    from: `${email}`, // Gönderenin e-posta adresi (formdan gelen e-posta)
    to: 'basak.karadeniz0@gmail.com',  // E-postanın ulaşacağı adres (kendi e-posta adresiniz)
    subject: `New message from ${name}`,  // Konu: formdan gelen kişinin adıyla dinamik başlık
    text: `
      You have received a new message from your contact form.
  
      Sender Name: ${name}
      Sender Email: ${email}
  
      Message: 
      ${message}
  
      `,  // Mesaj içeriği, gönderen bilgileri ve formdan gelen mesaj
  };
  

  // E-posta gönderimi
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('E-posta gönderimi sırasında hata oluştu');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('E-posta başarıyla gönderildi');
    }
  });
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu port ${port} üzerinde çalışıyor`);
});
