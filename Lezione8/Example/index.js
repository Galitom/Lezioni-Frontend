/*
window.addEventListener("load", (event) => {
    console.log(1, event);
});

document.addEventListener("DOMContentLoaded", (event) => {
    console.log(2, event);
});
*/
const firstName = document.getElementById("primoInput");
const msgErr = document.createElement("p");

document.addEventListener("submit", (event) => {
    console.log(event);
    if (firstName.value == "") {
        event.preventDefault();
        msgErr.innerText = "ai fato caca";
        document.querySelector("form").append(msgErr);
    }
});

firstName.addEventListener("keypress", (event) => {
    console.log(firstName.value);
});

const m = new Map();

m.set(() => 2, "Giulia");
