import express from "express";
let router = express.Router();
router.get("/", (req, res, next) => {
    res.send("API is working properly!");
});
module.exports = router;
//# sourceMappingURL=testAPI.js.map