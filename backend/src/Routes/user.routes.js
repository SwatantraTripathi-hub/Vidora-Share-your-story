import {Router} from "express"
import user_register from "../Controllers/register.controller.js"
import upload from "../Middleware/File.middleware.js"
const router = Router();

router.route("/register").post(upload.fields([
  {
    name:"avatar",
    maxCount: 1
  },
  {
    name :"coverImage",
    maxCount: 1
  }
]),user_register)

export default router;