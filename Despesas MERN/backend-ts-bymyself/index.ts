import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT ?? "9000";

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
