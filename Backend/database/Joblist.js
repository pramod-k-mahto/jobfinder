
const mongoose=require('mongoose')

mongoose.createConnection("mongodb://localhost:27017/joblist",{

useNewUrlParser:true,
useUnifiedTopology:true
})

const jobSchema=new mongoose.Schema({
    jobCategory:{
        type:String
    },
    
    joblevel:{
        type:String
    },
    
    numberOfVacancys:{
        type:Number
    },
    
    employmentType:{
        type:String
    },
    
    joblocation:{
        type:String
    },
    
    OfferedSalary:{
        type:Number
    },
    
    eductionLevel:{
        type:String
    },
    
    experience:{
        type:String
    }




})

const jobModel=mongoose.model('joblist',jobSchema)
module.exports=jobModel;