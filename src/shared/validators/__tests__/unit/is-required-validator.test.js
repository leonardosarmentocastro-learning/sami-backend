const test = require('ava');

const { isRequiredValidator } = require('../../is-required-validator');

test('validator must return "false" if specified field is empty', (t) => {
	const doc = { email: '', username: 'not empty' };

	t.false(isRequiredValidator('email')(doc).validator());
	t.true(isRequiredValidator('username')(doc).validator());
});
