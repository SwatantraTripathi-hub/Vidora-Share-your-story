import mongoose from "mongoose"
import dotenv from "dotenv"
import DB_NAME from "../constant.js"
dotenv.config()
const Connect_DB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`);
    console.log(`DB Connected! Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Connection error:- ", error);
    process.exit(1);
  }
};
export default Connect_DB;