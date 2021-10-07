"use strict";
window.onload = (event) => {
    console.log('page loaded');
};

document.getElementById("button").addEventListener("click", console.log("send data"))

event.preventDefault();