const test = require('ava');
const got = require('got');
const mongoose = require('mongoose');
const theOwl = require('the-owl');
const { cpf } = require('cpf-cnpj-validator');

const database = require('../../../../database');
const { beneficiaryNotFoundTestcase } = require('./testcases');
const { BeneficiariesModel, BENEFICIARIES_PLAN_TYPES } = require('../../model');
const { getUrl } = require('./__helpers__');
const {
	closeApiOpenedOnRandomPort,
	getRequestOptions,
	startApiOnRandomPort,
} = require('../../../../__helpers__');
const { validBeneficiaryFixture } = require('../__fixtures__');
const dayjs = require('dayjs');

// Setup
test.before('start api / connect to database', async (t) => {
	t.context.endpointMethod = 'put';
	t.context.endpointOriginalPath = '/beneficiaries/:id';

	await startApiOnRandomPort(t);
	await database.connect();
});
test.after('create api docs (if enabled)', (t) => {
	return theOwl.createDocs();
});
test.after.always('tear down', (t) => {
	return closeApiOpenedOnRandomPort(t);
});
test.beforeEach('cleanup / prepopulate the database', async (t) => {
	await BeneficiariesModel.deleteMany();

	const createdBeneficiary = await BeneficiariesModel.create(
		validBeneficiaryFixture()
	);
	const transformedBeneficiary = createdBeneficiary.toObject();
	t.context.beneficiary = transformedBeneficiary;
});

// Happy path tests
[
	{ field: 'plan', value: BENEFICIARIES_PLAN_TYPES.BASIC },
	{ field: 'plan', value: BENEFICIARIES_PLAN_TYPES.PREMIUM },
	{ field: 'plan', value: BENEFICIARIES_PLAN_TYPES.STANDARD },
	{ field: 'dependents', value: [mongoose.Types.ObjectId().toString()] }, // eslint-disable-line new-cap
	// Physical-person-schema
	{ field: 'birthDate', value: dayjs().toISOString() },
	{ field: 'cpf', value: cpf.generate() },
	{ field: 'name', value: 'João da Silva' },
	{ field: 'rg', value: '01-123-321-0' },
].forEach(({ field, value }, i) => {
	test(`(200) ${i}. must succeed on updating the field "${field}" and always return the full updated document`, async (t) => {
		const beneficiariesPayload = { [field]: value };

		const response = await got.put(getUrl(t), {
			...getRequestOptions(t),
			body: beneficiariesPayload,
		});

		//  Assertions
		const updatedBeneficiary = response.body;
		t.assert(response.statusCode === 200);
		t.not(updatedBeneficiary.updatedAt, t.context.beneficiary.updatedAt); // "updatedAt" must have a new value

		// Updated field
		const isObject = (fieldName) =>
			typeof updatedBeneficiary[fieldName] === 'object'; // E.g. "dependents" (comparing arrays)
		if (isObject(field))
			t.deepEqual(updatedBeneficiary[field], beneficiariesPayload[field]);
		else t.assert(updatedBeneficiary[field] === beneficiariesPayload[field]);

		// Not updated fields
		Object.keys(updatedBeneficiary)
			.filter((key) => ![field, 'updatedAt', 'dependentsCount'].includes(key))
			.forEach((key) => {
				if (isObject(key))
					t.deepEqual(updatedBeneficiary[key], t.context.beneficiary[key]);
				else t.assert(updatedBeneficiary[key] === t.context.beneficiary[key]);
			});
	});
});

// Unhappy path tests
test(beneficiaryNotFoundTestcase.title1, (t) => {
	const userId = mongoose.Types.ObjectId(); // eslint-disable-line new-cap
	t.context.testcaseUrl = getUrl(t, userId);

	return beneficiaryNotFoundTestcase.test(t, userId);
});
