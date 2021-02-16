const { BeneficiariesModel } = require('../model');
const { sharedSanitizer } = require('../../../shared');
const { beneficiaryTranslatedValidationError } = require('../errors');

exports.createBeneficiaryResolver = async (req, res) => {
  const beneficiaryPayload = sharedSanitizer(req.body);
  const beneficiaryDoc = new BeneficiariesModel(beneficiaryPayload);

  try {
    const savedBeneficiary = await beneficiaryDoc.save();
    const transformedBeneficiary = savedBeneficiary.toObject();

    return res.status(200).json(transformedBeneficiary);
  } catch(err) {
    return beneficiaryTranslatedValidationError(req, res, { err, beneficiaryDoc });
  }
};
