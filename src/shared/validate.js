exports.sharedValidate = (constraints, doc) =>
	constraints.reduce(async (error_, constraint) => {
		if (await error_) return error_;

		const { validator, ...error } = constraint(doc);
		const isValid = await validator();
		return isValid ? null : error;
	}, null);
