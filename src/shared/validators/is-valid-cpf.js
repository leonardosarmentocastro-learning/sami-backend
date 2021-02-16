const { cpf } = require('cpf-cnpj-validator');

exports.isValidCPF = (doc) => ({
	code: 'SHARED_ERROR_CPF_IS_INVALID',
	field: 'cpf',
	validator: () => cpf.isValid(doc.cpf, true),
});
