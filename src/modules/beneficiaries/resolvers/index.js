module.exports = {
	...require('./create-beneficiary-resolver'),
	...require('./delete-beneficiary-resolver'),
	...require('./find-beneficiaries-by-id-resolver'),
	...require('./find-beneficiaries-resolver'),
	...require('./update-beneficiary-resolver'),
};
