const nodemailer = require('nodemailer');

const secrets = require('./credentials.json');

// Change this to one of your email addresses in the organisation
const YOUR_EMAIL_ADDRESS = 'turntabl mail';
// Change this to the receiver to the mail
const SEND_TO = 'turntabl mail'

async function start() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: YOUR_EMAIL_ADDRESS,
      serviceClient: secrets.client_id,
      privateKey: secrets.private_key,
    },
  });
  try {
    await transporter.verify();
    await transporter.sendMail({
      from: YOUR_EMAIL_ADDRESS,
      to: SEND_TO,
      subject: 'poll',
      html: `<head>
      <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">
      </head>
      <div class="my-5">
          <div class="card mx-auto" style="width: 30rem;">
                <div class="card-body">
                <h5 class="card-title"><p class="display-3 text-center text-muted border-bottom py-3">Poll survey</p></h5>
                <p class="card-text h5">Do you prefer to rest during the weekends?</p>
                </div>

                <div class="container py-3 px-5" style="border-radius: 50x;">

                   <div class="card-body" style="border-radius: 50x;">
                     <a href="david.html" class="btn btn-raised btn-success btn-block" >Yes</a>
                    </div>

                    <div class="card-body">
                      <a href="david.html" class="btn btn-raised btn-success btn-block">No</a>
                    </div>

                    <div class="card-body">
                        <a href="david.html" class="btn btn-raised btn-success btn-block">Maybe</a>
                    </div>
                </div>
          </div>
      </div>
      `,
    });
  } catch (err) {
    console.error(err);
  }
}

start();
