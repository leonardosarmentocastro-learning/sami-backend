const test = require('ava');

const { isValidRG } = require('../../is-valid-rg');

test('validator must return "false" if given RG is invalid', (t) => {
	t.false(isValidRG({ rg: '123invalidRG321' }).validator());
});

test('validator must return "true" if given RG is valid', (t) => {
	['001112223', '00-111-222-3', '00.111.222-3'].forEach((rg) =>
		t.true(isValidRG({ rg }).validator())
	);
});
