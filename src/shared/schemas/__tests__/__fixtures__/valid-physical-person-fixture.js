const dayjs = require('dayjs');
const { cpf } = require('cpf-cnpj-validator');

exports.validPhysicalPersonFixture = () => ({
	birthDate: dayjs().toISOString(),
	cpf: cpf.generate(),
	name: 'Neymar',
	rg: '001112223',
});
