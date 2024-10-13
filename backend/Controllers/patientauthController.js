const { newPatients, getPatients, findPatient } = require('../modules/patients');
const bcrypt = require('bcrypt');

const registerPatient = async (req, res) => {
    try {
        const patient = await newPatients(req.body);
        res.status(201).json({ msg: 'Patient is registered on the system', patient });
    } catch (err) {
        res.status(500).json({ msg: 'Patient not registered', error: err.msg });
    }
};

// Tries to get all registered patients
const getAllPatients = async (req, res) => {
    try {
        const patients = await getPatients();  // Corrected this line
        res.status(200).json(patients);
    } catch (err) {
        res.status(500).json({ msg: 'Error trying to find the patients' });
    }
};

// Checking if patient exists using email
const loginPatient = async (req, res) => {
    const { email, password } = req.body;

    try {
        const patient = await findPatient(email);

        if (!patient) {
            return res.status(401).json({ msg: 'Email or Password is incorrect' });
        }

        // Compare the provided password
        const match = await bcrypt.compare(password, patient.password_hash);  // Fixed 'bcrypt' typo
        if (!match) {
            return res.status(401).json({ msg: 'Email or Password is incorrect' });
        }

        res.status(200).json({ msg: 'Login Successful', patient });
    } catch (err) {
        res.status(500).json({ msg: 'Error logging in', error: err.msg });
    }
};

module.exports = { registerPatient, getAllPatients, loginPatient };
