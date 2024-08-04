import express from 'express';
import { login, logout, register, updateprofile } from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isauthenticated.js';

const router= express.Router()

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated,updateprofile);
router.route("/logout").get(logout);


export default router;




