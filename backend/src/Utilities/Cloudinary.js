import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
import dotenv from "dotenv"
dotenv.config();


cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.API_KEY,
  api_secret : process.env.API_SECRATE
});

 // uploading file from local file path to cloudinary
const uploadFile = async (localFilePath) =>{
try {
  if(!localFilePath) return null
  // upload on cloudinary
 const response= await cloudinary.uploader.upload(localFilePath,{
    resource_type:"auto"
  })
  //file upload done.
  console.log("File uploaded successfully:- ",response);

} catch (error) {

  fs.unlinkSync(localFilePath)
  return null
  console.log(error);

}
}

export default uploadFile