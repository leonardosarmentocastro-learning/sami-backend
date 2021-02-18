const {
	createBeneficiaryResolver,
	deleteBeneficiaryResolver,
	findBeneficiaryByIdResolver,
	findBeneficiariesResolver,
	updateBeneficiaryResolver,
} = require('./resolvers');

exports.connect = (app) => {
	app
		.route('/beneficiaries')
		.get(findBeneficiariesResolver)
		.post(createBeneficiaryResolver);

	app
		.route('/beneficiaries/:id')
		.delete(deleteBeneficiaryResolver)
		.get(findBeneficiaryByIdResolver)
		.put(updateBeneficiaryResolver);
};
