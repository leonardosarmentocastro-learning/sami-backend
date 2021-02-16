exports.sharedUtils = {
	// Pick object's nested fields.
	// Reference: https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_get
	get: (object, path, defaultValue) => {
		const result = String.prototype.split
			.call(path, /[,[\].]+?/)
			.filter(Boolean)
			.reduce(
				(response, key) =>
					response !== null && response !== undefined
						? response[key]
						: response,
				object
			);
		return result === undefined || result === object ? defaultValue : result;
	},
};
