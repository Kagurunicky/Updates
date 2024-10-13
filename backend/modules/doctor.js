const pool = require('../config/db')
const bcrypt = require('bcrypt');


// add new patients and call function
const newDoctor = async (doctortData) => {
    
    const {first_name, last_name, specialization, email, phone,password_hash, schedule} = doctortData;
    // hash our pasword
    const hashedPassword = await bcrypt.hash(password_hash,10);

    //inserting to our table
    const query = `INSERT INTO doctors (firstName, lastName, specialization, email, phone, and schedule,password_hash) VALUES(?,?,?,?,?,?,?) `
    const values = [first_name, last_name, email, password_hash, phone,, specialization, schedule]
    const result = await pool.query(query, values);

    return result.rows[0];

    }

    //getting the inserted details
    const getDoctors = async () => {
        const result = await pool.query('SELECT * FROM doctors');
        return result.rows;
    }

    //filter so as to use email to find if patient already exist
    const findDoctor = async () => {
        const query = 'SELECT * FROM doctors WHERE email = ?';
        const result = await pool.query(query, [email]);
        return result.rows[0];
    }
    
    module.export = {newDoctor, getDoctors, findDoctor}