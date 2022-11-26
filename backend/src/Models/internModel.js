const  mongoose = require("mongoose");
const ObjectId=mongoose.Schema.Types.ObjectId;


const internschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    mobile:{
        type:Number,
        unique:true,
        required:true
    },
    collegeId:{
        type:ObjectId,
        ref:"college"
    },
    isDeleted: {type:Boolean, default: false}
},
{ timestamps: true });

module.exports = mongoose.model('intern', internschema);


