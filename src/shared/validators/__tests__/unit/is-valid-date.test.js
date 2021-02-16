const test = require('ava');
const dayjs = require('dayjs');

const { isValidDate } = require('../../is-valid-date');

test('validator must return "false" if given date field is invalid', t => {
  const field = 'birthDate';
  const doc = { birthDate: 'invalid-date' };

  t.false(
    isValidDate(field)(doc).validator()
  );
});

test('validator must return "true" if given date field is valid', t => {
  const field = 'birthDate';
  const doc = { birthDate: dayjs().toISOString() };

  t.true(
    isValidDate(field)(doc).validator()
  );
});
