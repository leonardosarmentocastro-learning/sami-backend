const { isMongoId } = require('validator');

const {
	beneficiaryNotFoundError,
	beneficiaryTranslatedValidationError,
} = require('../errors');
const { BeneficiariesModel } = require('../model');
const { sharedSanitizer } = require('../../../shared');

exports.updateBeneficiaryResolver = async (request, response) => {
	const beneficiaryId = request.params.id;
	if (!isMongoId(beneficiaryId))
		return beneficiaryNotFoundError(request, response);

	const beneficiaryDoc = await BeneficiariesModel.findById(beneficiaryId);
	if (!beneficiaryDoc) return beneficiaryNotFoundError(request, response);

	const beneficiaryPayload = sharedSanitizer(request.body);
	const beneficiaryToUpdate = Object.assign(beneficiaryDoc, beneficiaryPayload);

	try {
		const updatedBeneficiary = await beneficiaryToUpdate.save();
		const transformedBeneficiary = updatedBeneficiary.toObject();

		return response.status(200).json(transformedBeneficiary);
	} catch (error) {
		return beneficiaryTranslatedValidationError(request, response, {
			err: error,
			beneficiaryDoc,
		});
	}
};
