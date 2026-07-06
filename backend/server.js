import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Connect_DB from "./src/db/db.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT;


Connect_DB()
.then(()=>{
  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
})
.catch((e)=>{
    console.log("DB-Connection error!!",e);

})


