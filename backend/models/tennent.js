const { Schema, model } = require('mongoose')

const tenantContractSchema = new Schema({
  contractID: { type: String, required: true },
  name: { type: String, required: true },
  socialSecurityNumber: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  contractStart: { type: Date, required: true },
  contractEnd: { type: Date, required: true },
  description: { type: String },
  hasParking: { type: Boolean, default: false },
  parkingNumber: { type: String },
  numberOfPeopleLiving: { type: Number, required: true },
})

const TenantContract = model('TenantContract', tenantContractSchema)

module.exports = TenantContract
