const got = require('got');
const test = require('ava');
const theOwl = require('the-owl');

const {
	closeApiOpenedOnRandomPort,
	getRequestOptions,
	startApiOnRandomPort,
} = require('../../../../__helpers__');
const { validBeneficiaryFixture } = require('../__fixtures__');
const { BeneficiariesModel } = require('../../model');
const database = require('../../../../database');

// Setup
test.before('prepare: start api / connect to database', async (t) => {
	t.context.endpointMethod = 'get';
	t.context.endpointOriginalPath = '/beneficiaries';

	await startApiOnRandomPort(t);
	await database.connect();
});
test.after('create api docs (if enabled)', (t) => {
	theOwl.createDocs();
});
test.after.always('teardown', (t) => {
	return closeApiOpenedOnRandomPort(t);
});
test.beforeEach('cleanup database', (t) => {
	return BeneficiariesModel.deleteMany();
});

// Happy path tests
test('(200) must return an array of beneficiaries if there is content saved on database', async (t) => {
	const beneficiary1 = (
		await new BeneficiariesModel(validBeneficiaryFixture()).save()
	).toObject();
	const beneficiary2 = (
		await new BeneficiariesModel({
			...validBeneficiaryFixture(),
			rg: '99.888.777-6',
		}).save()
	).toObject();

	const response = await got.get(
		t.context.endpointBaseUrl,
		getRequestOptions(t)
	);
	const beneficiaries = response.body;
	t.deepEqual(beneficiaries, [beneficiary1, beneficiary2]);
});

test("(200) must return an empty array if there isn't content saved on database", async (t) => {
	const response = await got.get(
		t.context.endpointBaseUrl,
		getRequestOptions(t)
	);
	const beneficiaries = response.body;
	t.deepEqual(beneficiaries, []);
});
