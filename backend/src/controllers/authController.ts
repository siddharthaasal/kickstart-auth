import { Request, Response } from "express";
import { registerService, loginService } from "../services/authService";
import jwt from "jsonwebtoken";

// interaction between frontend and backend
export async function register(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await registerService(email, password);
    res.json({ user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const token = await loginService(email, password);
    // res.json({token});
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // Set to true in production for HTTPS
      sameSite: "strict",
    });
    res.json({ message: "login successful" });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
}

export function getProtectedData(req: any, res: Response) {
  // assuming req is already populated by the midlleware
  console.log("inside gtProtectedData fn");
  res.json({ data: "this is protected data", user: req.user });
}
