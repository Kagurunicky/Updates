// set up enviriment
const express = require('express')
require('dotenv').config();
const app =express()
app.use(express.json()) 


//set up patients routes

const patientRoutes = require('./routes/patientsroutes');

//if one visits here patients we should use the patients routes to handle them
app.use('/patients', patientRoutes);



//set up doctors routes

const doctorRoutes = require('./routes/doctorroutes');

//if one visits here doctorss we should use the doctors routes to handle them
app.use('/doctors', doctorRoutes);


// if our server 3300 is busy or does not connect use 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`);
});




