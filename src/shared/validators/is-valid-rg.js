const regex = /(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d|X|x$)/;

exports.isValidRG = (doc) => ({
	code: 'SHARED_ERROR_RG_IS_INVALID',
	field: 'rg',
	validator: () => regex.test(doc.rg),
});
