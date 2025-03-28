"use scrict";

const container = document.querySelector("#container");

// Creating 16x16 div grid
for(let i = 0; i < 256; i++) {
    let temp = document.createElement("div");
    temp.classList.add("grid");
    container.appendChild(temp);
}