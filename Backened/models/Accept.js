const mongoose = require('mongoose');
const { Schema } = mongoose;

const AcceptSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    ngo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ngo'
    },
    status:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('accept', AcceptSchema);