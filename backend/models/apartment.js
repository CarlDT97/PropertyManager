const { Schema, model } = require('mongoose')
const { type } = require('os')

// Define the Apartment schema
const apartmentSchema = new Schema({
  property: { type: Schema.Types.ObjectId, ref: 'Property', required: true }, // Reference to the Property model
  apartmentNumber: { type: String, required: true },
  floor: { type: Number, required: true },
  numberOfRooms: { type: Number, required: true },
  area: { type: Number, required: true },
  rentPrice: { type: Number, required: true },
  hasFridge: { type: Boolean, default: false },
  fridgeType: { type: String },
  hasFreezer: { type: Boolean, default: false },
  freezerType: { type: String },
  hasStove: { type: Boolean, default: false },
  stoveType: { type: String },
  hasBathtub: { type: Boolean, default: false },
  nrOfKeys: { type: Number },
  hasSafetyDoor: { type: Boolean, default: false },
  description: { type: String },
  isOccupied: { type: Boolean, required: true },
})

// Create the Apartment model
const Apartment = model('Apartment', apartmentSchema)

module.exports = Apartment
