const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCreditst = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

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

		const mailer = new Mailer(survey, surveyTemplate(survey));
	});
};
