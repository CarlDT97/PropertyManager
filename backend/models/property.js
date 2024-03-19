const { Schema, model } = require('mongoose')

const propertySchema = new Schema({
  propertyID: { type: String, required: true }, // Property ID
  propertyName: { type: String, required: true },
  address: { type: String, required: true },
  floors: { type: Number, required: true },
  kvm: { type: Number, required: true },
  amountApartments: { type: Number, required: true },
  hasParking: { type: Boolean, default: false, required: true },
  parkingSpaces: { type: Number, default: 0, required: true },
  elevator: { type: Boolean, default: false, required: true },
  storage: { type: Boolean, default: false, required: true },
  storageFloor: { type: Number, required: true },
  hasBasement: { type: Boolean, default: false, required: true },
  hasLoft: { type: Boolean, default: false, required: true },
  yearOfConstruction: { type: Number, required: true },
})

const Property = model('Property', propertySchema)

module.exports = Property
