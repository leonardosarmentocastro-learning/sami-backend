const test = require('ava');

const {
	SHARED_ERROR_UNEXPECTED,
	sharedUnexpectedError,
} = require('../../errors');
const { translate } = require('../../../i18n');

test('[sharedUnexpectedError] must return a translated error message including stacktrace', (t) => {
	const request = { locale: 'en-us' }; // Simulates the "locale" middleware.
	const response = {
		// Simulates express response object.
		status() {
			return this;
		},
		json: (payload) => payload,
	};

	try {
		throw new Error('simulating unexpected error thrown');
	} catch (error) {
		t.deepEqual(sharedUnexpectedError(request, response, { err: error }), {
			...translate.error(SHARED_ERROR_UNEXPECTED, request.locale, {}),
			stacktrace: error.stack,
		});
	}
});
