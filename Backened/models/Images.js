const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImagesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    uploadFile:{
        type: Object,
        required : true 
    }
})

module.exports = mongoose.model('image', ImagesSchema);