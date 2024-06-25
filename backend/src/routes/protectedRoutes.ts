import { Router } from "express";
import  authenticateToken  from "../middleware/authenticateToken"
import { getProtectedData } from "../controllers/authController";


 const router = Router();

 router.get('/', authenticateToken, getProtectedData);

 export default router;