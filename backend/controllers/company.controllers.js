import { Company } from "../models/company.model.js";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/dataUri.js";

export const registerCompany = async(req,res)=>{
try {
    const {companyName} = req.body;
    if(!companyName){
        return res.status(400).json({
            message:'Company name is required',
            success: false
        })
    }
    let company = await Company.findOne({name:companyName})
    if(company){
        return res.status(400).json({
            message:'You can not register same company',
            success: false
        })
    }
    company= await Company.create({
        name:companyName,
        userId: req.id
    })

    return res.status(201).json({
        message: 'Company registered successfully',
        company,
        success:true
    })
} catch (error) {
    console.log(error)
}
}

//recruiter jo ki logged  in user h usne  jonsi company create kri h 
export const getCompany =async(req, res)=>{
    try {
         const userId=req.id  //logged in user ki id 
         const companies= await Company.find({userId})
         if(!companies){
            return res.status(404).json({
                message:'companies not found',
                success: false
            })
         }
         return res.status(200).json({
             companies,
             success:true
         })

    } catch (error) {
        console.log(error)
    }
}

//get comapny by id 

export const getCompanyById= async(req,res)=>{
 try {
      const companyId=req.params.id;
      const company=  await Company.findById(companyId)
      if(!company){
        return res.status(404).json({
            message:'company not found',
            success: false
        })
      }
      return res.status(200).json({
       company,
       success:true
      })
 } catch (error) {
    console.log(error)
 }
}

export const updateCompany= async(req, res)=>{
    try {
         const { name, description , website, location}= req.body;
         const file= req.file;
         console.log(name, description , website, location)
         //cloudinary
         const fileUri= getDataUri(file)
         const cloudResponse= await cloudinary.uploader.upload(fileUri.content)
         const logo=cloudResponse.secure_url


         const updateData={name, description , website, location,logo}

         const company= await Company.findByIdAndUpdate(req.params.id ,updateData, {new:true})

         if(!company){
            return res.status(404).json({
                message:'Company not found',
                success: false
            })
         }

         return res.status(200).json({
            message:"Company information updated",
            // company, //you can uncomment this to check changes while doing postman request 
            success: true
         })

    } catch (error) {
        console.log(error)
    }
}