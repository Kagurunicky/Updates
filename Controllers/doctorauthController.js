const { newPatients, getPatients, findPatient } = require('../modules/doctor');
const bcrypt = require('bcrypt');
// Tries to get all registered Doctors
const registerDoctor = async (req, res) => {
    try {
        const patient = await newDoctors(req.body);
        res.status(201).json({ msg: 'Doctor is registered on the system', patient });
    } catch (err) {
        res.status(500).json({ msg: 'Doctor not registered', error: err.msg });
    }
};

//read Doctors in the sysytem
const getAllDoctors = async (req, res) => {
    try {
        const patients = await getDoctors();  // Corrected this line
        res.status(200).json(patients);
    } catch (err) {
        res.status(500).json({ msg: 'Error trying to find the Doctors' });
    }
};

// Checking if patient exists using email
const loginDoctor = async (req, res) => {
    const { email, password } = req.body;

    try {
        const doctor = await findDoctor(email);

        if (!doctor) {
            return res.status(401).json({ msg: 'Email or Password is incorrect' });
        }

        // Compare the provided password
        const match = await bcrypt.compare(password, patient.password_hash);  // Fixed 'bcrypt' typo
        if (!match) {
            return res.status(401).json({ msg: 'Email or Password is incorrect' });
        }

        res.status(200).json({ msg: 'Login Successful', doctor });
    } catch (err) {
        res.status(500).json({ msg: 'Error logging in', error: err.msg });
    }
};

module.exports = { registerDoctor, getAllDoctors, loginDoctor };
