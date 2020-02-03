const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mail = require('./mailgun');
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const poll = process.env.POLL_BACKEND_URL;
const options = process.env.OPTION_BACKEND_URL;

const app = express();

app.use(express.static(__dirname + '/dist/poll-ui'));

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/poll-ui/index.html'));
});

app.get('/options', (req, res) => {
	res.json({poll_url: options})
  });

app.post('/sendmail', function(req, res) {
	const user = req.body;
	mail(user);
});

app.listen(process.env.PORT || 8080, () => {
	console.log('Server started...');
});

