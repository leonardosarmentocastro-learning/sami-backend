const got = require('got');
const test = require('ava');
const theOwl = require('the-owl');
const dayjs = require('dayjs');

const { validBeneficiaryFixture } = require('../__fixtures__');
const {
	closeApiOpenedOnRandomPort,
	getRequestOptions,
	startApiOnRandomPort,
	LOCALE,
} = require('../../../../__helpers__');
const { BeneficiariesModel } = require('../../model');
const { isRequiredValidator } = require('../../../../shared/validators');
const { translate } = require('../../../../i18n');
const database = require('../../../../database');

// Setup
test.before('prepare: start api / connect to database', async (t) => {
	t.context.endpointMethod = 'post';
	t.context.endpointOriginalPath = '/beneficiaries';

	await startApiOnRandomPort(t);
	await database.connect();
});
test.after('create api docs (if enabled)', (t) => {
	return theOwl.createDocs();
});
test.after.always('teardown', (t) => {
	return closeApiOpenedOnRandomPort(t);
});
test.beforeEach('cleanup database', (t) => {
	return BeneficiariesModel.deleteMany();
});

// Happy path tests
test('(200) must succeed on creating beneficiaries and return the newly created doc', async (t) => {
	const beneficiaryPayload = validBeneficiaryFixture();

	const response = await got.post(t.context.endpointBaseUrl, {
		...getRequestOptions(t),
		body: beneficiaryPayload,
	});

	const createdBeneficiary = response.body;
	t.assert(response.statusCode === 200);
	['__v', '_id'].forEach((field) => t.falsy(createdBeneficiary[field]));
	['id', 'createdAt', 'updatedAt'].forEach((field) =>
		t.truthy(createdBeneficiary[field])
	);
	['createdAt', 'updatedAt'].forEach((field) =>
		t.truthy(dayjs(createdBeneficiary[field]).isValid())
	);
	t.deepEqual(createdBeneficiary.dependents, []);
	t.assert(createdBeneficiary.dependentsCount === 0);
	Object.keys(beneficiaryPayload).forEach((key) =>
		t.assert(createdBeneficiary[key] === beneficiaryPayload[key])
	);
});

// Unhappy path tests
['birthDate', 'name', 'cpf', 'rg'].forEach((field) => {
	test(`(500) must fail on creating an beneficiary as field "${field}" is empty`, (t) => {
		const beneficiaryPayload = {
			...validBeneficiaryFixture(),
			[field]: '',
		};

		return got
			.post(t.context.endpointBaseUrl, {
				...getRequestOptions(t),
				body: beneficiaryPayload,
			})
			.catch((error) => {
				const { validator, ...error_ } = isRequiredValidator(field)(
					beneficiaryPayload
				);
				t.assert(error.response.statusCode === 500);
				t.deepEqual(
					error.response.body,
					translate.error(error_, LOCALE, beneficiaryPayload)
				);
			});
	});
});
