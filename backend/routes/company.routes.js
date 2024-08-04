import express from 'express';
import isAuthenticated from '../middlewares/isauthenticated.js';
import { getCompany, getCompanyById, registerCompany, updateCompany } from '../controllers/company.controllers.js';

const router= express.Router()

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.route("/update/:id").put(isAuthenticated,updateCompany);


export default router;




