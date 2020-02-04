const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mail = require('./mailgun');
const poll = process.env.POLL_BACKEND_URL;
const options = process.env.OPTION_BACKEND_URL;
const sendmail_url = process.env.SENDMAIL_URL

const app = express();

app.use(express.static(__dirname + '/dist/poll-ui'));

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

app.get('/options_url', (req, res) => {
	res.json({options_url: options, polls_url: poll, mail_url: sendmail_url})
  });

app.post('/sendmail', function(req, res) {
	const user = req.body;
	mail(user);
});

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/poll-ui/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
	console.log('Server started...');
});

