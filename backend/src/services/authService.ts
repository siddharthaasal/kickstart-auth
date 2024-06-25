import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../prisma";

// server and db interaction
export async function registerService(email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
  return user;
}

export async function loginService(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
    algorithm: "HS256", 
  });
  return token;
}


