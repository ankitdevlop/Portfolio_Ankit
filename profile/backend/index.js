const express = require('express')
const app = express()
const port = 5000
const nodemailer=require('nodemailer')
const bodyParser=require('body-parser')
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/send-email', (req, res) => {
    // Assuming the email address is sent in the request body
    const { email ,name} = req.body;
  
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure your email provider here
      service: 'gmail',
      auth: {
        user: 'ankitdubey58825@gmail.com', // Your email address
        pass: 'hlnf pcoa rdnd agsw' // Your email password or app password if using Gmail
      }
    });
  
    // Email content
    const mailOptions = {
      from: 'ankitdubey58825@gmail.com', 
      to: email,
      subject: 'no replay ', 
      text: `Thank you ${name} for showing interest. I will contact you shortly.` 
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error occurred:', error.message);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent:', info.response);
        res.send('Email sent successfully');
      }
    });
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})