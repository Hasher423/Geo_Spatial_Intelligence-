import { Router } from "express";
import { registerController } from "../Controllers/auth.controller.ts";

const router = Router();


router.post("/register", registerController);



export default router;