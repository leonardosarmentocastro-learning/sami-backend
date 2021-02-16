const got = require('got');

const { getRequestOptions, LOCALE } = require('../../../../../__helpers__');
const { BENEFICIARIES_ERROR_USER_NOT_FOUND } = require('../../../errors');
const { translate } = require('../../../../../i18n');

exports.beneficiaryNotFoundTestcase = {
	title1:
		'(500) must return a translated error if the beneficiary was not found',
	title2:
		'(500) must return a translated error when deleting an beneficiary with an invalid mongo "id"',
	test: (t, beneficiaryId) =>
		got(t.context.testcaseUrl, getRequestOptions(t)).catch((error) => {
			const error_ = BENEFICIARIES_ERROR_USER_NOT_FOUND;
			const args = { beneficiaryId };

			t.assert(error.response.statusCode === 500);
			t.deepEqual(error.response.body, translate.error(error_, LOCALE, args));
		}),
};
