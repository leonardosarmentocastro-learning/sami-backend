const { sharedUtils } = require('../utils');

exports.isRequiredValidator = (field) => (doc) => ({
	code: 'SHARED_ERROR_FIELD_IS_REQUIRED',
	field,
	validator: () => {
		const isValid = Boolean(sharedUtils.get(doc, field)); // Able to pick nested object fields
		return isValid;
	},
});
