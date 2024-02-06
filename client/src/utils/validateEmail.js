const re =
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
	const invalidEmails = emails
		.split(',')
		.map((email) => email.trim())
		.filter((email) => re.test(email) === false);

	if (invalidEmails.length) {
		return `These emaшls are invalid: ${invalidEmails}`;
	}

	return;
};
