import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port: number | string = normalizePort(process.env.port || "9000");

function normalizePort(val: string | undefined): number | string {
  let port: number = parseInt(val ?? "-1", 10);

  return port;
}

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript is running");
});

app.listen(port, () => {
  console.log(
    `[server]: Server should be running at https://localhost:${port}`
  );
});
