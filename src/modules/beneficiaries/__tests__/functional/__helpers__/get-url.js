// Replaces the path variable ":id" with an actual beneficiary id.
exports.getUrl = (t, beneficiaryId = t.context.beneficiary.id) =>
	t.context.endpointBaseUrl.replace(':id', beneficiaryId);
