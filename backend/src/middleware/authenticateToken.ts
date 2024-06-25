
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  user?: any;
}


export default async function validateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  console.log("inside validate token fn");
  const token = req.cookies.token;
  console.log("token received on backend", token);
  if (!token) {
    console.log("no token persists");
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.JWT_SECRET!, (err:any, user:any) => {
    if (err) {
      console.log("invalid token");
      return res.sendStatus(403); 
    }
    req.user = user; 
    next();
  });
};