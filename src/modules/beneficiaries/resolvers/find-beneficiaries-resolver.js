const { BeneficiariesModel } = require('../model');
const { sharedUnexpectedError } = require('../../../shared');

exports.findBeneficiariesResolver = async (request, response) => {
	try {
		const beneficiaries = await BeneficiariesModel.find();
		const transformedBeneficiaries = beneficiaries.map((b) => b.toObject());

		return response.status(200).json(transformedBeneficiaries);
	} catch (error) {
		return sharedUnexpectedError(request, response, { err: error });
	}
};
