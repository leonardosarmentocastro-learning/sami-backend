const { translate } = require('../../i18n');

const BENEFICIARIES_ERROR_USER_NOT_FOUND = {
	code: 'BENEFICIARIES_ERROR_USER_NOT_FOUND',
	field: 'id',
};

const beneficiaryNotFoundError = (request, response) =>
	response.status(500).json(
		translate.error(BENEFICIARIES_ERROR_USER_NOT_FOUND, request.locale, {
			beneficiaryId: request.params.id,
		})
	);

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
	beneficiaryNotFoundError,
	beneficiaryTranslatedValidationError,
	BENEFICIARIES_ERROR_USER_NOT_FOUND,
};
