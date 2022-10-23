const mongoose = require('mongoose');
const { Schema } = mongoose;

const DetailsSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    units:{
        type: String,
        enum: ['KG', 'liters', 'meters', 'cm'],
        required : true 
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('details', DatailsSchema);