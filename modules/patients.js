const pool = require('../config/db')
const bcrypt = require('bcrypt');


// add new patients and call function
const newPatients = async (patientData) => {
    
    const {first_name, last_name, email, password_hash, phone, date_of_birth, gender, address} = patientData;
    // hash our pasword
    const hashedPassword = await bcrypt.hash(password_hash,10);

    //inserting to our table
    const query = `INSERT INTO patients (first_name, last_name, email, password_hash, phone, date_of_birth, gender, address) VALUES(?,?,?,?,?,?,?,?) `
    const values = [first_name, last_name, email, password_hash, phone, date_of_birth, gender, address]
    const result = await pool.query(query, values);

    return result.rows[0];

    }  

    //getting the inserted details
    const getPatients = async () => {
        const result = await pool.query('SELECT * FROM patients');
        return result.rows;
    }

    //filter so as to use email to find if patient already exist
    const findPatient = async () => {
        const query = 'SELECT * FROM patients WHERE email = ?';
        const result = await pool.query(query, [email]);
        return result.rows[0];
    }
    
    module.export = {newPatients, getPatients, findPatient}