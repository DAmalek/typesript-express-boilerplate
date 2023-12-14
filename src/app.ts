import express, { Request, Response, json } from "express";
import "express-async-errors";
import cors from "cors";
import httpStatus from "http-status";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app
  .use(json())
  .use(cors())
  .get("/health", (req: Request, res: Response) => {
    return res.status(httpStatus.OK).send("requests running");
  });

export default app;
