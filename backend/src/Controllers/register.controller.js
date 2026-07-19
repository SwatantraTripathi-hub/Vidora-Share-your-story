import asyncHandeler from "../Utilities/asyncHandler.js"
import ApiError from "../Utilities/ApiError.js"
import {User} from "../Models/User.models.js"
import uploadFile from "../Utilities/Cloudinary.js";

import ApiResponse from "../Utilities/ApiResponse.js"
const user_register = asyncHandeler(async (req,res) => {
  // Get user details from Frontend.
  // Vailidate -- not empty
  // check if user already exists (username and email)
  // check if images , check for avtar
  // if available then upload on cloudinary
  // create user in db
  // remove password and refresh token from response
  // check for user creation
  // return import { StyleSheet, Text, View } from 'react-native'

const {email,password,fullName,username} = req.body;
console.log(`
  user details:- ${email}
   `);

if([email,password,fullName,username].some((field)=>{
  field?.trim() === ""
})){
throw new ApiError(400,"Some Data id Empty. Please Provide all Details!!");

}

const user_existed = User.findOne({
  $or: [{username},{email}]
})

if(user_existed){
  throw new ApiError(409,"User already existed");

}
const localavtarpath = req.files.avtar[0]?.path;
const localcoverimgpath = req.files.coverImage[0];

if(!localavtarpath){
  throw new ApiError(400,"File required");

}

const avtar = await uploadFile(localavtarpath)
const coverImg = await uploadFile(localcoverimgpath);

if(!avtar){
   throw new ApiError(400, "File required");
}

User.create({
  fullName,
  avtar : avtar.url,
  coverImg : coverImg?.url || "",
  email,
  password,
  username:username.toLowerCase()
})
const createdUser = await User.findById(user._id).select(
  "-password -refreshToken"
)
if (!createdUser) {
  throw new ApiError(500,"Internal issue from database");

}
return res.status(201).json(
  new ApiResponse(200,createdUser,"User registerd successfully")
)
})
export default user_register;