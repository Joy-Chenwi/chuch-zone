const express = require("express");
const app = express();
const router = require("express-router");
const bodyParser = require("body-parser");

const yoo = require("./logic/websockets.js");

yoo.sendMessage("hello");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view-engine", "ejs");

app.get("/char", (req, res) => {
    yoo.sendMessage("yoo bro");
    res.send("<p> hello </p>");
})

app.get("/", (req, res) => {
    res.send("home");
})

app.listen(3010, () => {
    console.log("Everything is running right");
});
