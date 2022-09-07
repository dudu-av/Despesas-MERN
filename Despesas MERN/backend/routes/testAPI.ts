import express, { Router, Request, Response } from "express";

let router: Router = express.Router();

router.get("/", (req: Request, res: Response, next) => {
  res.send("API is working properly!");
});

module.exports = router;
