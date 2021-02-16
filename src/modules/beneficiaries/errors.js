const { translate } = require('../../i18n');

const beneficiaryTranslatedValidationError = (req, res, { err, beneficiaryDoc }) => {
  const transformedBeneficiary = beneficiaryDoc.toObject();
  const error = translate.error(err, req.locale, transformedBeneficiary);

  return res.status(500).json(error);
};

module.exports = {
  beneficiaryTranslatedValidationError
};
