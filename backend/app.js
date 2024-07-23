const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const propertyRoutes = require('./routes/propertyRoutes');
const apartmentRoutes = require('./routes/apartmentRoutes');
const maintenanceTaskRoutes = require('./routes/maintenanceTaskRoute');
const tennentRoutes = require('./routes/tennentRoute');


app.use(propertyRoutes);
app.use(apartmentRoutes)
app.use(maintenanceTaskRoutes)
app.use(tennentRoutes)

const PORT = process.env.PORT || 5000;

// Connect to MongoDB using Mongoose
async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  }
}

// Start the Express.js server
async function startServer() {
  await connectToMongoDB(); // Connect to MongoDB before starting the server

  // Start Express.js server
  const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  // Handle server errors
  server.on('error', (err) => {
    console.error('Server error:', err);
  });
}

startServer(); // Start the server
