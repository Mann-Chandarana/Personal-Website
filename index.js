//jshint eversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require('dotenv')
const nodemailer = require('nodemailer');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


////// connecting to mongoose database
mongoose.connect("mongodb+srv://admin-Mann:Test-123@cluster0.ghh2aew.mongodb.net/personalDB");


////// creating personal schema 
const personal_schema = {
    Name: String,
    Subject: String,
    email: String,
    Message: String
};

////// Creating mongoose model 
/////// ---> table1 is the collection(table) inside our database(personalDB)
const Personal = mongoose.model("table1", personal_schema);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    const user = new Personal({
        Name: req.body.name,
        Subject: req.body.subject,
        email: req.body.email,
        Message: req.body.Message
    })
    user.save();
    res.redirect("/");
});


app.listen(process.env.PORT || 3000, function () {
    console.log("Server started successfully on port 3000");
});

