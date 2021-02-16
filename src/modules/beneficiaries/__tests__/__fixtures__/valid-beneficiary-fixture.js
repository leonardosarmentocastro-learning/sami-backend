const { cpf } = require('cpf-cnpj-validator');
const dayjs = require('dayjs');

const { BENEFICIARIES_PLAN_TYPES } = require('../../model');

exports.validBeneficiaryFixture = () => ({
	birthDate: dayjs().toISOString(),
	name: 'Ronaldo',
	cpf: cpf.generate(),
	rg: '00.111.222-3',
	plan: BENEFICIARIES_PLAN_TYPES.STANDARD,
});
