const {
	bgPurple,
	errorBg,
	infoBg,
	successBg,
	textPrimary,
	textSecondary,
} = require('../misc/terminal');

exports.getErrorMessageForServerStartup = (error, options) => {
	const { port, environment } = options;
	const message = [
		[
			// Line 1
			errorBg.white('  ERROR  '),
			`${textPrimary('Failed to start server on port')} ${textSecondary(port)}`,
			`${textPrimary('in')} ${textSecondary(environment)} ${textPrimary(
				'mode.'
			)}`,
		].join(' '),
		[
			// Line 2
			`${infoBg.black('  STACKTRACE  ')}`,
			`${textPrimary(error)}`,
		].join(' '),
	].join('\r\n');

	return message;
};

exports.getSuccessMessageForServerClose = () => {
	const message = [
		`\r\n${bgPurple.white('  CLOSED  ')}`,
		`${textSecondary('Server closed successfully!')}`,
	].join(' ');

	return message;
};

exports.getSuccessMessageForServerStartup = (options) => {
	const { port, environment } = options;
	const message = [
		`${successBg.white('  STARTED  ')}`,
		`${textPrimary('Server listening on port')} ${textSecondary(port)}`,
		`${textPrimary('in')} ${textSecondary(environment)} ${textPrimary(
			'mode.'
		)}`,
	].join(' ');

	return message;
};
