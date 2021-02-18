const test = require('ava');
const got = require('got');
const theOwl = require('the-owl');
const mongoose = require('mongoose');

const database = require('../../../../database');
const { beneficiaryNotFoundTestcase } = require('./testcases');
const {
	closeApiOpenedOnRandomPort,
	getRequestOptions,
	startApiOnRandomPort,
} = require('../../../../__helpers__');
const { BeneficiariesModel } = require('../../model');
const { getUrl } = require('./__helpers__');
const { validBeneficiaryFixture } = require('../__fixtures__');

// Setup
test.before('prepare: start api / connect to database', async (t) => {
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
test('(200) must return the beneficiary saved on database if it exists', async (t) => {
	const beneficiary = { ...validBeneficiaryFixture() };
	const savedBeneficiary = (
		await new BeneficiariesModel(beneficiary).save()
	).toObject();

	const response = await got(
		getUrl(t, savedBeneficiary.id),
		getRequestOptions(t)
	);

	t.assert(response.statusCode === 200);
	t.assert(response.body.id === savedBeneficiary.id);
	Object.keys(beneficiary).forEach((key) =>
		t.assert(response.body[key] === beneficiary[key])
	);
});

// Unhappy path tests
test(beneficiaryNotFoundTestcase.title1, (t) => {
	const beneficiaryId = mongoose.Types.ObjectId(); // eslint-disable-line new-cap
	t.context.testcaseUrl = getUrl(t, beneficiaryId);

	return beneficiaryNotFoundTestcase.test(t, beneficiaryId);
});
