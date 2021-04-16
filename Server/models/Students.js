const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    place: {
        type:String,
        required:true
    },
    room: {
        type:String,
        required:true
    }
});

module.exports = new mongoose.model('Students', studentSchema);