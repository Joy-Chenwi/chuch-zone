const express = require("express");
const path = require("path");
const app = express();
const router = require("express-router");
const bodyParser = require("body-parser");

let isRegistered = true;

const auth = require("./logic/auth.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    let isRegistered = true;
    res.render("index");
})

app.get("/signup", (req, res) => {
    res.render("register");
});
app.get("/login", (req, res) => {
    res.render("login");
});

app.listen(3010, () => {
    console.log("Everything is running right");
});
