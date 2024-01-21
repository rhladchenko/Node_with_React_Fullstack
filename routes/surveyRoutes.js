const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCreditst = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
	app.post('./api/surveys', requireLogin, requireCreditst, (req, res) => {
		const { title, body, subject, recipients } = req.body;

		const survey = new Survey({
			title,
			body,
			subject,
			recipients: recipients
				.split(',')
				.map((email) => ({ email: email.trim() })),
			_user: req.user.id,
			dateSent: Date.now(),
		});
	});
};
