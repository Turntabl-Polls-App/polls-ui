//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
//const mail = require('./src/app/matpollform/mail');
const mail = require('./mailgun')

const app = express();


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/poll-ui'));

app.use(bodyParser.json());
// app.use(express.json());
app.use(cors());
app.options('*', cors());

// app.post('/sendmail', function(req, res) {
// 	console.log('sending mail...');
// 	const user = req.body;
// 	mail(user);
// });

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/poll-ui/index.html'));
});

app.post('/sendmail', function(req, res) {
	console.log('sending mail...');
	const user = req.body;
	mail(user);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
	console.log('Server started...');
});

