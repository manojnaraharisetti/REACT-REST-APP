const { response } = require("express");
const express = require("express");
const router = express.Router();
const studentmodel = require("../models/student");

router.post("/", async (req, res) => {
    const name = req.body.name;
    const course = req.body.course;
    let studpost = new studentmodel({
        name: name,
        course: course,
    });
    try {
        await studpost.save();
        res.send("success");
    } catch (err) {
        console.log(err);
        res.send("fail");
    }
});

router.get("/", async (req, res) => {
    try {
        const items = await studentmodel.find();
        res.json(items);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});
router.patch("/:id", async (req, res) => {
    try {
        const item = await studentmodel.find(req.params.id);
        item.course = req.body.course;
        const st4  = await item.save();
        res.json(st4);

    } catch (err) {
        res.send("ERROR", +err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const item1 = await studentmodel.findById(req.params.id);
        const st5  = await item1.deleteOne();
        res.json(st5);
    } catch (err) {
        res.send("ERROR", +err);
    }
});



module.exports = router;