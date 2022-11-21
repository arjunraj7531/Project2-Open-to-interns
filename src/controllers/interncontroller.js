const internModel= require("../Models/internModel")

const createintern= async (req,res)=>{
    try{
    let body=req.body
    let data= await internModel.create(body);
    return res.status(201).send({status:true,data:data});
    }
    catch(err){
        return res.status(500).send({status:false, message:err.message})
    }
}

module.exports.createintern=createintern;

