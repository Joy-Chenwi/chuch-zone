const passport = require("passport");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const passJwt = require("passport-jwt");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");
const expressSession = require("express-session");

const credentials = require("../key.js")

app.use(passport.initialize());
app.use(passport.session());

const veryfiPassword = (password) => {
//TODO: create a DB connection and comparation model to
//OPTIMIZE: Both the verifiedPass and the way to connect to the pass from the 
//database for realtime data

    if(password !=  verifiedPass) return err;
}

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

