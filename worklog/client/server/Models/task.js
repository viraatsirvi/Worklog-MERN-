var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let task = new Schema({
    taskName: {
        type: String,
        trim: true,
        required: true
    },
    taskType: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    Date: {
        type: String,
        trim: true,
        required: true
    },
    startTime: {
        type: String,
        trim: true,
        required: true
    },
    endTime: {
        type: String,
        trim: true,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
    
});


module.exports = mongoose.model('task', task);
