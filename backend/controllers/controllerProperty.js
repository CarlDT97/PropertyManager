const express = require('express');
const router = express.Router();

const Property = require('../models/property');
// Controller function for creating a new property
exports.createProperty = async (req, res) => {
    try {
      const newProperty = new Property(req.body);
      await newProperty.save();
      res.status(201).json({ message: 'Property created successfully', property: newProperty });
    } catch (error) {
      console.error('Error creating property:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  // Controller function for fetching all properties
exports.getAllProperties = async (req, res) => {
    try {
      const properties = await Property.find();
      res.json(properties);
    } catch (error) {
      console.error('Error fetching properties:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Controller function for getting a property by ID
exports.getProperty = async (req, res) => {
  try {
    const propertyId = req.params.id;
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    console.error('Error getting property:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

  
  
  // Controller function for updating a property by ID
  exports.updateProperty = async (req, res) => {
    try {
      const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!property) {
        return res.status(404).json({ message: 'Property not found' });
      }
      res.json({ message: 'Property updated successfully', property });
    } catch (error) {
      console.error('Error updating property:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Controller function for deleting a property by ID
  exports.deleteProperty = async (req, res) => {
    try {
      const property = await Property.findByIdAndDelete(req.params.id);
      if (!property) {
        return res.status(404).json({ message: 'Property not found' });
      }
      res.json({ message: 'Property deleted successfully' });
    } catch (error) {
      console.error('Error deleting property:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };