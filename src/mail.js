const express = require('express');
const nodemailer = require('nodemailer');

// Change this to one of your email addresses in the organisation
// const YOUR_EMAIL_ADDRESS = process.env.USER_EMAIL;
const YOUR_EMAIL_ADDRESS = 'shadrack.ankomahene@turntabl.io';

async function start(toEmail) {
	// Change this to the receiver to the mail
	const SEND_TO = toEmail;

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			type: 'OAuth2',
			user: YOUR_EMAIL_ADDRESS,
			// serviceClient: process.env.CLIENT_ID,
			// privateKey: process.env.PRIVATE_KEY
			serviceClient: '108261171308772876398',
			privateKey: `-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCO3eiPhqN0zYy\n7QxHAakNcpBG6LQq+V37hQlHXWQxgpz8TETvj1qfQBB/Fyu7A6RQmKUOc3+f4waX\nudNp+joO5Q9gNUlMkFQGk9ebUke+bG/AknCLIweXQL/4h0IpixJfvICtI6I7kio8\nlQhQX3FMz29HGQwR9qUx+IRW78JLT0jRAQbxJIkYX+BhKNtrVCTeTXe8Y7S+qTgG\ndr/K/PW36TqubJ5BUJDC3D2K+5ncbQAC54xYxUhpYR62tOuZikbzLdU3dObIzkcM\nml5foy3ubcm3QMJUmpVZYytQ+XPuLZbfdhfR2svp11IFUalrQf5kmwUoAvtAHspn\nk/+iei53AgMBAAECggEAHKr8UGUMNEytXjzgqAZVtldndh/Yn9MojPwoz3C4Xhpi\nI1b6gcVN4d1p0ehQmwzBjufIzOY9OxMeIPzbeHPnZ9VlPJUA2Z0f2cyucQ1m63ND\n10+F7vNfpnJ3Iy6LlGgjcR/4ehWdV1+Oflyc2ogLyAOB8COBRZF69nIwzkgbDFRI\ngGrgHosZLhLU9f0AbAZa09GtMoiFeGkg+GOgo6N0i21pX6DaVFtz1e63F9cK36Qj\ncKoiobqATDW3C2AIVrGpRdW3g0oljF98hefLhiFroC7L45lCUqNBE0XIxssWkwOM\n5ookZu6ka4IrMmT5jKTSt/UNPSxFs6VyndiojkdG+QKBgQDszHqmeKzjHJYW4Z5R\nrkti8Egh59wnmH65YIibCkLxud4DEPGcgDnWp2v2DQkfP8UZIeLIKfxRRhqRlxsT\nGS8MNagrM52v3P0dAoXUp3HssHFLSz4O9Bt3oNis0fsToA0hzc5PMybI54Jmqbch\n1lXZG6FaovmnbePTOZa6MoFH4wKBgQDR+2JlaJUV0mVgWxlp+q2WjGBnAC2suWCU\nd+rjN6jjOzThC7P2KCagqenwq7PKOnE/pjJ9oSpAZtdqjqXXlRQrseCrZBq7a3V2\n262MtknSOu594dSnJxPpiygRY+xRKg0WPbFW19dBHpTJyOa5nIjdQIMs2x1rAc+q\n85Koa3N7XQKBgDAmS/I5q33qvCIe8mBNfoq5rREn4j4y5eGv3VcZOQ+J6bjZ4ycd\nc6VQGcXIVMiD4QIBP+nPj7y+8nwUK68web6T0oQmVLQDzXvunWPmQGYOYpsay52i\nyUsD68sIT3NoIgNzo7W7AvHrETrq25AH0yD4W1Dgvr7qu16h4SIvTtZdAoGAJbR2\nHq+A1cJJ4dt53MXelcHvLY+io/lFlmNSEirUcLkY7bAkSHc9OGxKTaUHS7Di1QMK\n3fQqmhXdaIzkyqlCTfZK2XvIMQ9CsG0R5Mp2xwE+AeyjOsCRmsYaE8VVkd1zLCM3\nzNhFFrRfEzy38WxiRxhmdY+C4Mwadh/2nbdtrSECgYEAjy3wtghUWDkEuZ/C8DbG\nq+MS+xkVnpQFvZyKyYWJZ6y9dbUwaJ/c+oEwHP31D40rkoAG1gQVUu/2vUn3l/uz\nkqAwL+6kLvanan165sqTHqVveuVFTfEyYVTgGKylvA0hFQSuCYeDUIgQ1ZucZWHL\nU74T5kUh+VzKzks67NUR6hY=\n-----END PRIVATE KEY-----\n`
		}
	});
	try {
		await transporter.verify();
		await transporter.sendMail({
			from: YOUR_EMAIL_ADDRESS,
			to: SEND_TO,
			subject: 'Turntabl Poll',
			html: `<div class="my-5">
		<div class="card mx-auto" style="width: 30rem;">
			<div class="card-body">
			  <h5 class="card-title"><p class="display-3 text-center text-muted border-bottom py-3">Poll survey</p></h5>
			  <p class="card-text h5">Do you prefer to rest during the weekends?</p>
			</div>

			<div class="container py-3 px-5">

				<div class="my-2 form-check">
					<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
					<label class="form-check-label" for="exampleRadios1">
						<button class="btn">Yes</button>
					</label>
				  </div>

				  <div class="my-2 form-check">
					<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
					<label class="form-check-label" for="exampleRadios1">
						<button class="btn">No</button>
					</label>
				  </div>

				  <div class="my-2 form-check">
					<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
					<label class="form-check-label" for="exampleRadios1">
					  <button class="btn">Sometimes</button>
					</label>
				  </div>

				  <div class=" my-2 form-check">
					<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
					<label class="form-check-label" for="exampleRadios1">
						<button class="btn">Rarely</button>
					</label>
				  </div>
			</div>
			<div class="card-body">
			  <a href="#" class="btn btn-raised btn-success btn-block">Submit</a>
			</div>
		  </div>
	</div>`
		});
	} catch (err) {
		console.error(err);
	}
}

module.exports = start;
