import validator from "validator";
import bycrypt from "bcryptjs";
import { v2 } from "cloudinary";
import doctorModel from "../models/doctorModel.js";



//API for adding doctor

const addDoctor =async (req,res) => {
    try{
        const {name, email, password, speciality,degree, experience, about,fees, adress } = req.body;
        const image = req.file
        //check for all data to add doctor
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !adress || !image){
            return res.status(400).json({message: "MISSING DETAILS"});

        }
        //Validating email format 
        if(validator.isEmail(email)===false){
            return res.status(400).json({message: "PLS ENTER THE VALID EMAIL"});
        }   
        //VALIDATING  STRONG PASSWORD

        if(password.length<8) {
            return res.status(400).json({message: "PLS ENTER THE STRONG PASSWORD"});
        }
        //hashing doctor password
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password,salt);

        //upload image to coloudinary 
        const imageupload = await v2.uploader.upload(image.path,{resource_type:"image"
        });
        const imageUrl = imageupload.secure_url;

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            adress: JSON.parse(adress),
            date:Date.now()
        };
        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();
        res.status(201).json({message: "DOCTOR ADDED SUCCESSFULLY"});

    }catch (error) {
       console.log(error);
         res.status(500).json({message: "INTERNAL SERVER ERROR"});
    }
}

export {addDoctor};