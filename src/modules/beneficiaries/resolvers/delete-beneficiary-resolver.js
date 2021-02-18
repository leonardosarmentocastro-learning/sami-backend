const { isMongoId } = require('validator');

const { sharedUnexpectedError } = require('../../../shared');
const { beneficiaryNotFoundError } = require('../errors');
const { BeneficiariesModel } = require('../model');

exports.deleteBeneficiaryResolver = async (request, response) => {
	try {
		const beneficiaryId = request.params.id;
		if (!isMongoId(beneficiaryId))
			return beneficiaryNotFoundError(request, response);

		await BeneficiariesModel.deleteOne({ _id: beneficiaryId });

		return response.status(200).end();
	} catch (error) {
		return sharedUnexpectedError(request, response, { err: error });
	}
};
