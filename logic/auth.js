const passport = require("passport");
const express = require("express");
const bcrypt = require("bcrypt");
const passJwt = require("passport-jwt");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");
const expressSession = require("express-session");
const mysqlStore = require("express-mysql-session")(expressSession);
const mysql = require("mysql");
const nodeCrypto = require("node:crypto");

const app = express();
const customFields = require("../key.js")

app.use(passport.initialize());
app.use(passport.session());

app.use(expressSession({
    key: customFields.plainTextPassword,
    secret: customFields.anotherPlainPassword,
    store: new  mysqlStore({
        host: "localhost",
        port: 3306,
        user: "root",
        //database: //TODO: Add a db and include it's name
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24,
    }
}));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "user",
    multipleStatement: true
})

connection.connect((err) => {
    if(!err) {
        console.log("Connected");
    }else{
        console.log("Error connecting to the Db");
    }
})

const verifyCallback = (username, password, done) => {
}

const strategy = new LocalStrategy(customFields, verifyCallback);   

passport.use(new LocalStrategy( (username, password, done) => {
    User.findOne({username: username}, (err, user) => {
        if(err) return done(user);
        if(!user) return done(err, false);
        if(!user.verifyPassword(password)) return done(null, false);
        return done(null, user);
    })
}));

let User = {
    id: Number,
    username: String,
    password: String
}

//Serializing a session
passport.serializeUser( (user, done) => {
    done(null, user.id);
})

passport.deserializeUser( (id, done) => {
    User.findById(id, (err, user) => {
        //user here refers to the second user in the inner function
        done(err, user);
    });
});

