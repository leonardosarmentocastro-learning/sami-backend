const {
	createBeneficiaryResolver,
	findBeneficiariesResolver,
} = require('./resolvers');

exports.connect = (app) => {
	app.get('/beneficiaries', findBeneficiariesResolver);
	app.post('/beneficiaries', createBeneficiaryResolver);
};
