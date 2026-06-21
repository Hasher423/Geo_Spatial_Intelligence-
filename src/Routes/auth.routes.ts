import { Router } from "express";
import {
  registerController,
  getUsersController,
  getUserController,
  updateUserController,
  deleteUserController,
} from "../Controllers/auth.controller.ts";

const router = Router();

router.post("/register", registerController);
router.get("/", getUsersController);
router.get("/:id", getUserController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);



export default router;