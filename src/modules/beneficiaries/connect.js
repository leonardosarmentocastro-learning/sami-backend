const {
	createBeneficiaryResolver,
	deleteBeneficiaryResolver,
	findBeneficiariesResolver,
} = require('./resolvers');

exports.connect = (app) => {
	app
		.route('/beneficiaries')
		.get(findBeneficiariesResolver)
		.post(createBeneficiaryResolver);

	app.route('/beneficiaries/:id').delete(deleteBeneficiaryResolver);
};
