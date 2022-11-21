const  mongoose = require("mongoose");
const ObjectId=mongoose.Schema.Types.ObjectId;


const internschema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    mobile:{
        type:Number,
        unique:true,
        require:true
    },
    collegeId:{
        type:ObjectId,
        ref:college
    },
    isDeleted: {boolean, default: false}
},
{ timestamps: true });

module.exports = mongoose.model('intern', internschema);


// { name: {mandatory}, email: {mandatory, valid email, unique}, mobile: {mandatory, valid mobile number, unique}, collegeId: {ObjectId, ref to college model, isDeleted: {boolean, default: false}}