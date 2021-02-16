const { isMongoId } = require('validator');

const { benenficiaryNotFoundError } = require('../errors');
const { BeneficiariesModel } = require('../model');
const { sharedUnexpectedError } = require('../../../shared');

exports.findBeneficiaryByIdResolver = async (request, response) => {
	try {
		const userId = request.params.id;
		if (!isMongoId(userId)) return benenficiaryNotFoundError(request, response);

		const dbBeneficiary = await BeneficiariesModel.findById(userId);
		if (!dbBeneficiary) return benenficiaryNotFoundError(request, response);

		const transformedBeneficiary = dbBeneficiary.toObject();
		return response.status(200).json(transformedBeneficiary);
	} catch (error) {
		return sharedUnexpectedError(request, response, { err: error });
	}
};
