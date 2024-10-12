// Declare variables
const express = require('express');
const router = express.Router();  // Correct invocation of Router()

// Use our functions from patientsauthController
const { registerPatient, getAllPatients, loginPatient } = require('../Controllers/patientauthController');

// Add our routes

// Adds details to our database on signup
router.post('/register', registerPatient);  

// Gets all patients details
router.get('/', getAllPatients);  

// Logs in a patient
router.post('/login', loginPatient);  

// Export the router
module.exports = router;
