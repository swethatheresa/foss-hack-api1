const mongoose = require("mongoose");
const JobApplicationSchema = new mongoose.Schema({
    company: String,
    jobtitle: String,
    joblocation: String,
    domain : String,
    month: 
    {   type: Number,
        enum: [1,2,3,4,5,6,7,8,9,10,11,12]
    },
    status: 
    {
        type: String,
        default: "Wishlist",
    }
} 
);

module.exports = mongoose.model('jobapplication', JobApplicationSchema);