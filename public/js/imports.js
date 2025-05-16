const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(input.value) {
        socket.emit("chat", input.value);
        console.log("they only know Cole");
        input.value = "";
    }
})

socket.on("chat", (msg) => {
    const item = document.createElement("li");
    item.textContent = msg;
    messages.appendChild(item);
    console.log(msg);
    window.scrollTo(0, document.body.scrollHeight);
})
