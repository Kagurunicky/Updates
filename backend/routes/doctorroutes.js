// Declare variables
const express = require('express');
const router = express.Router();  // Correct invocation of Router()

// Use our functions from doctorsauthController
const { registerDoctor, getAllDoctors, loginDoctor } = require('../Controllers/doctorauthController');

// Add our routes

// Adds details to our database on signup
router.post('/register', registerDoctor);  

// Gets all patients details
router.get('/', getAllDoctors);  

// Logs in a patient
router.post('/login', loginDoctor);  

// Export the router
module.exports = router;
