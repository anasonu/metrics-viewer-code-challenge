const router = require("express").Router();

const authRoutes = require("./averageTime.routes.js");
router.use("/average", authRoutes);

module.exports = router;
