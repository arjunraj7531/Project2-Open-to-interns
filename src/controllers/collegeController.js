const collegeModel = require('../Models/collegeModel')
const internModel=require("../Models/internModel")

const createCollege=async function(req,res){
    try {
        const data=req.body
        if(Object.keys(data)==0){
           return res.status(400).send({status:false,message:"Body is missing"})
        }
        if(data.name==undefined){
           return res.status(400).send({status:false,message:"name is compulsory"})
        }
        if (!(/^[a-z\.]+$/).test(data.name)) {
            return res.status(400).send({ status: false, message: `name should be in lower case` });
          }
        if(data.fullName==undefined){
           return res.status(400).send({status:false,message:"full name is compulsory"})
        }
        if(!data.logoLink){
            return res.status(400).send({status:false,message:"Please enter logoLink"})
        }
        if (!(/^[a-zA-Z0-9!@#$&()`.:?=_;~(){}%^*+,/"-]*$/).test(data.logolink)) {
            return res.status(400).send({ status: false, message: "Url should be a valid " });
          }
          let valid= await collegeModel.findOne({name:data.name})
          if(valid){
            return res.status(400).send({status:false,message:"college allready register"})
          }
        const result=await collegeModel.create(data)
        return res.status(201).send({status:true,data:result})
    } catch (error) {
    
       return res.status(500).send({status:false,message:error.message});
    }
}

const getCollegeData =async function (req,res){

    try{

        let colName = req.query
        let {collegeName} =colName
        if(Object.keys(colName).length==0) return res.status(400).send({status:false,message:"Please provide query param of collegeName"})
         if(!collegeName){
            return res.status(400).send({status:false,message:"Please enter college name"}) 
         }
        const data1= await collegeModel.findOne({name:collegeName,isDeleted:false})
        if(!data1)  return res.status(404).send({status:false,message:"collegeName doesn't exist in DB"})
        let collegeId=data1._id

        const data = await internModel.find({collegeId:collegeId,isDeleted:false}).select({name:1,email:1,mobile:1})
        if(data.length==0)  return res.status(404).send({status:false,message:"No interns found for this College"})
          
        let obj={}
        const data2= await collegeModel.findOne({name:collegeName,isDeleted:false})
        obj.name=data2.name  
        obj.fullName=data2.fullName
        obj.logoLink=data2.logoLink
        obj.interns=data

        return res.status(200).send({status:true,data:obj})

    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}
module.exports.getCollegeData=getCollegeData;
module.exports.createCollege=createCollege;