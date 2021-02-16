const { BeneficiariesModel } = require('../model');
const { sharedSanitizer } = require('../../../shared');
const { beneficiaryTranslatedValidationError } = require('../errors');

exports.createBeneficiaryResolver = async (request, response) => {
	const beneficiaryPayload = sharedSanitizer(request.body);
	const beneficiaryDoc = new BeneficiariesModel(beneficiaryPayload);

	try {
		const savedBeneficiary = await beneficiaryDoc.save();
		const transformedBeneficiary = savedBeneficiary.toObject();

		return response.status(200).json(transformedBeneficiary);
	} catch (error) {
		return beneficiaryTranslatedValidationError(request, response, {
			err: error,
			beneficiaryDoc,
		});
	}
};
