const dayjs = require('dayjs');

exports.isValidDate = (field) => (doc) => ({
  code: 'SHARED_ERROR_DATE_IS_INVALID',
  field,
  validator: () => dayjs(doc[field]).isValid()
});
