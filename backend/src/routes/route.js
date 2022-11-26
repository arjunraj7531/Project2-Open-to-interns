const express=require('express')
const router=express.Router();
//college create
const college=require("../Controllers/collegeController");
//intern requirement
const intern=require('../Controllers/internController')
const internvalid=require("../Middleware/internvalidation")

router.post("/functionup/interns",internvalid.internValidator,intern.createintern);
router.post("/functionup/colleges",college.createCollege);
router.get("/functionup/collegeDetails",college.getCollegeData);

// router.all("/*",function (req,res){
//     return res.status(400).send({status:false,message:"Page Not Found"})
// })
  
module.exports=router