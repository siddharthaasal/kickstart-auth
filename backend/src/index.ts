import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import protectedRoutes from "./routes/protectedRoutes";
import prisma from './prisma';
import cookieParser from "cookie-parser";
import cors from "cors";


dotenv.config();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use('/auth', authRoutes);
app.use("/validate-token", protectedRoutes);

app.listen(port, ()=>{
    console.log(`server spinning on http://localhost:${port}`)
})