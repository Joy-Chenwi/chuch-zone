const express = require("express");
const app = express();
const expressWs = require("express-ws")(app);

const sendMessage = (message) =>
{
   app.ws("/chat", (ws, req) => {
       ws.on("message", (msg) => {
           ws.send(msg);
       }
   )});
}

module.exports = { 
    sendMessage
}
