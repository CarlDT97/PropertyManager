const { Schema, model, Types } = require('mongoose');

const propertySchema = new Schema({
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
  apartments: [{ type: Schema.Types.ObjectId, ref: 'Apartment' }] // Array of apartment references
});

const Property = model('property', propertySchema);

module.exports = Property;
