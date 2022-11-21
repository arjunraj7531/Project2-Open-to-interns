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



// Create a document for an intern. 
// - Also save the collegeId along with the document. Your request body contains the following fields - { name, mobile, email, collegeName}
// - Return HTTP status 201 on a succesful document creation. Also return the document. The response should be a JSON object like [this](#successful-response-structure) 