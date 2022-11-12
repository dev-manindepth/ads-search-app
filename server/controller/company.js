const Company = require("../models/Company")

exports.createCompany=async(req,res)=>{
    try{
        console.log(req.body)
        const newCompany=await Company.create(req.body)
        res.status(201).json({
          status: "success",
          data: newCompany,
        });
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:err.message
        })
    }
}
exports.getAllCompany=async(rer,res)=>{
    try{
        const allCompany=await Company.find();
        res.status(200).json({
            status:'success',
            results:allCompany.length,
            data:allCompany
        })
    }catch(err){
        res.status(400).json({
            status:fail,
            message:err.message
        })
    }
}