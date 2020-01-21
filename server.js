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

// app.use(cors());

const corsOptions = {
	credentials: true,
	origin: true,
	origin: 'https://poll-ui.herokuapp.com/',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/poll-ui/index.html'));
});

app.post('/sendmail', cors(corsOptions), function(req, res, next) {
	console.log('sending mail...');
	const user = req.body;
	mail(user.email);

	next();
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
	console.log('Server started...');
});
