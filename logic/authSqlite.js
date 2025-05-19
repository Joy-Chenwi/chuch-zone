const sqlite3 = require("sqlite3");
const express = require("express");
const bcrypt = require("bcrypt");
const passJwt = require("passport-jwt");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");
const expressSession = require("express-session");

const app = express();

app.use(passport.initialize());
app.use(passport.session());

const db = new sqlite3.Database("church-zone.db");
