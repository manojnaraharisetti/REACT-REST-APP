const express = require("express");
const mongoose = require("mongoose");
const app = express();
const url = "mongodb+srv://raja:2003@cluster0.vyncxaw.mongodb.net/Manoj?retryWrites=true&w=majority";

mongoose.connect(url);

const con = mongoose.connection;

con.on('open', () => {
    console.log("DB CONNECTED..............")
})

const studroute = require('./routes/students')

app.use(express.json)
app.use("/students", studroute); //http://localhost:2003/students
app.listen(2003, () => {
    console.log("Server Started on 2003");
});
