import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = normalizePort(process.env.port || "9000");
function normalizePort(val) {
    let port = parseInt(val !== null && val !== void 0 ? val : "-1", 10);
    return port;
}
app.get("/", (req, res) => {
    res.send("Express + Typescript is running");
});
app.listen(port, () => {
    console.log(`[server]: Server should be running at https://localhost:${port}`);
});
//# sourceMappingURL=index.js.map