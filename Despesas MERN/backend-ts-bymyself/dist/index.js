var _a;
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : "9000";
app.get("/", (req, res) => {
    res.send("Express + Typescript server");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
