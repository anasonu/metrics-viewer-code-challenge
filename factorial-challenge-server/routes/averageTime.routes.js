const router = require("express").Router();
const AverageTimeModel = require("../models/AverageTime.model");

router.post("/create-many", async (req, res, next) => {
    const { name, value } = req.body;

    for (let i = 1; i <= 100; i++) {
        const random = (Math.random() * 50).toFixed(2);
        try {
            const newTime = await AverageTimeModel.create({
                name: "Average Time on Page",
                value: random,
            })
            res.json(newTime);
            
        } catch (error) {
            next(error);
        }
    }
})

router.get("/", async (_, res, next) => {
    try {
        const response = await AverageTimeModel.find();
        res.json(response);
    } catch (error) {
        next(error);
    }
})

module.exports = router;