const mongoose = require('mongoose');

const {
  isAlreadyInUseValidator,
  isRequiredValidator,
  isValidCPF,
  isValidDate,
  isValidRG,
} = require('../validators');
const { sharedValidate } = require('../validate');

// Schema definitions
const physicalPersonSchema = new mongoose.Schema({
  _id: false,
  birthDate: String,
  cpf: String,
  name: String,
  rg: String,
});

const validationsMiddleware = async (physicalPersonDoc, next) => {
  const constraints = [
    ...['birthDate', 'cpf', 'name', 'rg'].map(field => isRequiredValidator(field)),
    ...['cpf', 'rg'].map(field => isAlreadyInUseValidator(field)),
    isValidCPF,
    isValidRG,
    isValidDate('birthDate'),
  ];
  const error = await sharedValidate(constraints, physicalPersonDoc);

  return next(error);
};

// Setup
physicalPersonSchema.post('validate', validationsMiddleware);

module.exports = {
  physicalPersonSchema,
};
