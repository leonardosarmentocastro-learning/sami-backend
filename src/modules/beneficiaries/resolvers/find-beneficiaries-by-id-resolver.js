const { isMongoId } = require('validator');

const { beneficiaryNotFoundError } = require('../errors');
const { BeneficiariesModel } = require('../model');
const { sharedUnexpectedError } = require('../../../shared');

exports.findBeneficiaryByIdResolver = async (request, response) => {
	try {
		const userId = request.params.id;
		if (!isMongoId(userId)) return beneficiaryNotFoundError(request, response);

		const dbBeneficiary = await BeneficiariesModel.findById(userId);
		if (!dbBeneficiary) return beneficiaryNotFoundError(request, response);

		const transformedBeneficiary = dbBeneficiary.toObject();
		return response.status(200).json(transformedBeneficiary);
	} catch (error) {
		return sharedUnexpectedError(request, response, { err: error });
	}
};
