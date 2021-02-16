const { translate } = require('../../i18n');

const beneficiaryTranslatedValidationError = (
	request,
	response,
	{ err, beneficiaryDoc }
) => {
	const transformedBeneficiary = beneficiaryDoc.toObject();
	const error = translate.error(err, request.locale, transformedBeneficiary);

	return response.status(500).json(error);
};

module.exports = {
	beneficiaryTranslatedValidationError,
};
