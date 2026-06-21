import type { Request, Response } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../Services/auth.service.ts";

export const registerController = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    return res.status(201).json(user);
  } catch {
    return res.status(500).json({ message: "User creation failed" });
  }
};

export const getUsersController = async (_: Request, res: Response) => {
  const users = await getUsers();
  return res.json(users);
};

export const getUserController = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const user = await getUserById(id);
  return res.json(user);
};

export const updateUserController = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const updated = await updateUser(id, req.body);
  return res.json(updated);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  await deleteUser(id);
  return res.json({ message: "User deleted" });
};