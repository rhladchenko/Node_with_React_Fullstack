const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
	constructor({ subject, recipients }, content) {
		super();
		this.from_email = new helper.Email('gladchenkoruslan@gmail.com');
		this.subject = subject;
		this.body = new helper.Content('text/html', content);
		this.recipients = formatAddresses(recipients);
	}
}

module.exports = Mailer;
