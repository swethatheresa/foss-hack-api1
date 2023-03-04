const mongoose = require("mongoose");
const JobApplicationSchema = new mongoose.Schema({
    company: String,
    jobtitle: String,
    joblocation: String,
    status: 
    {
        type: String,
        default: "Applied"
    }
} 
);

module.exports = mongoose.model('jobapplication', JobApplicationSchema);