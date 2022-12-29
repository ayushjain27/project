const mongoose = require('mongoose');
const { Schema } = mongoose;

const NgoSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    registration:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const Ngo = mongoose.model('ngo', NgoSchema);
module.exports = Ngo;