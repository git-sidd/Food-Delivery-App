import { Router } from "express";
import { loginUser, registerUser,logoutUser } from "../Controllers/user.controllers.js";
import { verifyjwt } from "../Middlewares/auth.middleware.js";

const router=Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyjwt,logoutUser)

export default router