const test = require('ava');
const { cpf } = require('cpf-cnpj-validator');

const { isValidCPF } = require('../../is-valid-cpf');

test('validator must return "false" if given CPF is invalid', t => {
  t.false(
    isValidCPF({ cpf: '123invalidCPF321' }).validator()
  );
});

test('validator must return "true" if given CPF is valid', t => {
  t.true(
    isValidCPF({ cpf: cpf.generate() }).validator()
  );
});
