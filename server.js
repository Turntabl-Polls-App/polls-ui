//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mail = require('./src/mail');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/poll-ui'));

app.use(bodyParser.json());

app.use(cors());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', 'https://poll-ui.herokuapp.com'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/poll-ui/index.html'));
});
/*
app.post('/sendmail', cors(corsOptions), function(req, res, next) {
	const user = req.body;
	mail(user.email);

	next();
});
*/

app.get('/sendmail', function(req, res) {
	console.log('sending mail...');
	mail(req.query.email);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
	console.log('Server started...');
});
