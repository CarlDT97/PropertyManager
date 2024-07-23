const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/controllerProperty');

// Route for creating a new property
router.post('/properties', propertyController.createProperty);

// Route for getting all property
router.get('/properties', propertyController.getAllProperties);

// Route for getting a property by ID
router.get('/properties/:id', propertyController.getProperty);

// Route for updating a property by ID
router.put('/properties/:id', propertyController.updateProperty);

// Route for deleting a property by ID
router.delete('/properties/:id', propertyController.deleteProperty);

module.exports = router;
