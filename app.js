const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const app = express();
const port = 3000;

//Middleware Setup
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static('./public'));
app.use(cors());


//1. Middleware Connection - mongoose
const mongodbURL = 'mongodb://127.0.0.1:27017';

mongoose.connect(mongodbURL, {'dbName' : 'TestDB'})
    .then( result => console.log('***** Connected *****'))
    .catch( error => handleError(error.message));

function handleError(error){
    console.log(error);
}

app.use('/auth', authRoute);
app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`Mongo DB | listen at http://localhost:${port}`);
});