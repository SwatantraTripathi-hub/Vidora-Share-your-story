import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Connect_DB from "./src/db/db.js"
import app from "./src/app.js"
dotenv.config();

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


