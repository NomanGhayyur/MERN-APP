const mongoose = require('mongoose');

//create Schema
const userScheema = new mongoose.Schema({
    name: {
        type: 'string',
        uniqure: true,
        required: true,
    },
    email: {
        type: 'string',
        required: true,
    },
    age: {
        type: 'number',
    },
}, { timestamps: true });

//create Model
const User = mongoose.model('User', userScheema)

module.exports = User