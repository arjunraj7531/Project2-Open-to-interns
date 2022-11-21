const collegeModel = require('../Models/collegeModel')

const createCollege=async function(req,res){
    try {
        const data=req.body
        if(Object.keys(data)==0){
            res.status(403).send({status:false,msg:"Body is missing"})
        }
        if(data.name==undefined){
            res.status(403).send({status:false,msg:"name is compulsory"})
        }
        if (!(/^[A-Za-z]+$/).test(data.name)) {
            return res.status(400).send({ status: false, message: `name should be a valid` });
          }
        if(data.fullName==undefined){
            res.status(403).send({status:false,msg:"full name is compulsory"})
        }
        if (!(/^[a-zA-Z0-9!@#$&()`.:?=_;~(){}%^*+,/"-]*$/).test(data.logolink)) {
            return res.status(400).send({ status: false, message: `Url should be a valid ` });
          }
          
        const result=await collegeModel.create(data)
        return res.status(201).send({status:true,msg:result})
    } catch (error) {
    
       return res.status(500).send({status:false,message:error.message});
    }
}

module.exports.createCollege=createCollege;