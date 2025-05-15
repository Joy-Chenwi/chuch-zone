const express = require("express");
const path = require("path");
const app = express();
const router = require("express-router");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");
const { createServer} = require("node:http");

let isRegistered = true;
let server = createServer(app);

const auth = require("./logic/auth.js");
const io = new Server(server);

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
app.get("/text", (req, res) => {
    res.render("textChat");
})

io.on("connection", (socket)=>{
    console.log("a user just connected");
});

app.listen(3010, () => {
    console.log("Everything is running right");
});
