const test = require('ava');
const mongoose = require('mongoose');
const { cpf } = require('cpf-cnpj-validator');

const database = require('../../../../database');
const { physicalPersonSchema } = require('../../physical-person-schema');
const { validPhysicalPersonFixture, VALID_PHYSICAL_PERSON_FIXTURE } = require('../__fixtures__');

// Setup
const schema = new mongoose.Schema();
schema.add(physicalPersonSchema);
const PhysicalPerson = mongoose.model('PhysicalPerson', schema);
const getPhysicalPersonsSavedOnDatabase = () => PhysicalPerson.find({});

test.before('prepare: connect to database', async t => database.connect());
test.beforeEach('cleanup database', t => PhysicalPerson.deleteMany());

// Unhappy path tests
['birthDate', 'cpf', 'name', 'rg'].forEach(field => {
  test(`must fail on creating a "physical person" as the field "${field}" is empty`, async t => {
    try {
      await new PhysicalPerson({
        ...validPhysicalPersonFixture(),
        [field]: null,
      }).save();
    } catch(err) {
      t.deepEqual({
        code: 'SHARED_ERROR_FIELD_IS_REQUIRED',
        field,
      }, err);
    }
  });
});

[
  [ 'cpf', cpf.generate() ],
  [ 'rg', '998887776' ]
].forEach(([field, value]) => {
  test(`must fail on creating a "physical person" as the field "${field}" is already in use`, async t => {
    t.assert((await getPhysicalPersonsSavedOnDatabase()).length === 0);

    await new PhysicalPerson({
      ...validPhysicalPersonFixture(),
      [field]: value,
    }).save();

    t.assert((await getPhysicalPersonsSavedOnDatabase()).length === 1);

    try {
      await new PhysicalPerson({
        ...validPhysicalPersonFixture(),
        [field]: value,
      }).save();
    } catch(err) {
      t.deepEqual({
        code: 'SHARED_ERROR_FIELD_ALREADY_IN_USE',
        field,
      }, err);
    }
  });
});

[
  [ 'cpf', `invalid-${cpf.generate()}`, 'SHARED_ERROR_CPF_IS_INVALID' ],
  [ 'rg', 'invalid-rg', 'SHARED_ERROR_RG_IS_INVALID' ],
  [ 'birthDate', 'invalid-date', 'SHARED_ERROR_DATE_IS_INVALID' ]
].forEach(([ field, value, code ]) => {
  test(`must fail on creating a "physical person" as the field "${field}" is invalid`, async t => {
    try {
      await new PhysicalPerson({
        ...validPhysicalPersonFixture(),
        [field]: value,
      }).save();
    } catch(err) {
      t.deepEqual({ code, field }, err);
    }
  });
});
