const { createBeneficiaryResolver } = require('./resolvers');

exports.connect = (app) => {
	app.post('/beneficiaries', createBeneficiaryResolver);
};
