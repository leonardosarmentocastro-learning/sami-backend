// CONVENTION: Re-export each module.
module.exports = {
	beneficiaries: { ...require('./beneficiaries') },
	health: { ...require('./health') },
};
