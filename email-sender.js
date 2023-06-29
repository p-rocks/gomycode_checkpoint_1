var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'peterdafe@gmail.com',
    pass: 'xxxxxx'
  }
});

var mailOptions = {
  from: 'peterdafe@gmail.com',
  to: 'procksalot@yahoo.com',
  subject: 'Email With Node.js',
  text: 'This lesson is with Gomycode'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});