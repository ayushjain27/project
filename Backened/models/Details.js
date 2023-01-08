const mongoose = require('mongoose');
const { Schema } = mongoose;

const DetailsSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
        // unique: true
    },
    image:{
        type: String,
        required: true
    },
    category:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const Detail = mongoose.model('detail', DetailsSchema);
module.exports = Detail;