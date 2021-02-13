exports.getHealthResolver = (request, response) =>
	response.status(200).json({
		application: 'up',
	});
