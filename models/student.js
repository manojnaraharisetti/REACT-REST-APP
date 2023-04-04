const mongoose = require("mongoose");

const studschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("stud", studschema);