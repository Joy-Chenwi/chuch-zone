const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { sayHello } = require("./logic/auth.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view-engine", "ejs");

app.get("/", (req, res) => {
    sayHello();
    res.send("home");
})

app.listen(3010, () => {
    console.log("Everything is running right");
});
