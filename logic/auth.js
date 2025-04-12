const passport = require("passport");
const bcrypt = require("bcrypt");
const passJwt = require("passport-jwt");

const sayHello = () => {
    console.log("hello retard");
}

module.exports = { 
    sayHello
};
