const mongoose = require('mongoose');
const dayjs = require('dayjs');

const { physicalPersonSchema } = require('../../shared/schemas');

const BENEFICIARIES_PLAN_TYPES = {
	BASIC: 'BASIC',
	STANDARD: 'STANDARD',
	PREMIUM: 'PREMIUM',
};

// Schema definitions
const beneficiariesSchema = new mongoose.Schema(
	{
		dependents: [mongoose.Types.ObjectId],
		plan: {
			type: String,
			enum: Object.values(BENEFICIARIES_PLAN_TYPES),
			default: BENEFICIARIES_PLAN_TYPES.BASIC,
		},
		createdAt: String,
		updatedAt: String,
	},
	{
		timestamps: { currentTime: () => dayjs().toISOString() },
	}
);

// Virtuals - https://mongoosejs.com/docs/api.html#document_Document-toObject
const transform = (_doc, returnValue) => {
	const {
		__v,
		_id, // MongoDB default
		...fields
	} = returnValue;

	return fields;
};

// Setup
beneficiariesSchema.add(physicalPersonSchema);
beneficiariesSchema.set('toObject', {
	transform,
	virtuals: true, // Expose "id" instead of "_id".
});
beneficiariesSchema.virtual('dependentsCount').get(function () {
	const schema = this;
	return schema.dependents.length;
});

const BeneficiariesModel = mongoose.model(
	'BeneficiariesModel',
	beneficiariesSchema
);

module.exports = {
	beneficiariesSchema,
	BeneficiariesModel,
	BENEFICIARIES_PLAN_TYPES,
};
