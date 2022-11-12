const mongoose = require('mongoose');

const companySchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        // required:true,
        text:true,
    },
    url:{
        type:String,
        trim:true,
    }
})

const Company=mongoose.model('Company',companySchema);
module.exports=Company