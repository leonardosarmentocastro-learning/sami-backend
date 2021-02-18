const test = require('ava');
const got = require('got');
const theOwl = require('the-owl');

const database = require('../../../../database');
const { BeneficiariesModel } = require('../../model');
const { beneficiaryNotFoundTestcase } = require('./testcases');
const { validBeneficiaryFixture } = require('../__fixtures__');
const { getUrl } = require('./__helpers__');
const {
	getRequestOptions,
	startApiOnRandomPort,
	closeApiOpenedOnRandomPort,
} = require('../../../../__helpers__');

// Setup
test.before('prepare: start api / connect to database', async (t) => {
	t.context.endpointMethod = 'delete';
	t.context.endpointOriginalPath = '/beneficiaries/:id';

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

// Tests
test('(200) must succeed on deleting the beneficiary, returning an empty body', async (t) => {
	const createdBeneficiary = await BeneficiariesModel.create(
		validBeneficiaryFixture()
	);
	const transformedBeneficiary = createdBeneficiary.toObject();
	const beneficiaryId = transformedBeneficiary.id;

	const response = await got(getUrl(t, beneficiaryId), getRequestOptions(t));
	t.assert(response.statusCode === 200);
	t.falsy(response.body);
	t.assert((await BeneficiariesModel.findById(beneficiaryId)) === null);
});

// Unhappy path tests
test(beneficiaryNotFoundTestcase.title2, (t) => {
	const beneficiaryId = '123';
	t.context.testcaseUrl = getUrl(t, beneficiaryId);

	return beneficiaryNotFoundTestcase.test(t, beneficiaryId);
});
