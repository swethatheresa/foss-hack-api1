const mongoose = require("mongoose");
Schema=mongoose.Schema;

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

const TaskSchema = new mongoose.Schema({
    jobid: 
    {   type: Schema.Types.ObjectId,
        ref: "JobApplication"
    },
    taskdesc: String,
} 
);

module.exports = mongoose.model('JobApplication', JobApplicationSchema);
module.exports = mongoose.model('Task', TaskSchema);

