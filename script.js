"use strict";
const githubProfile = document.querySelector(".github-profile");
const inputNode = document.querySelector(".input");
// functions
const randomNum = function () {
    return Math.trunc(Math.random() * 256);
};

const changeColor = function () {
    let red = randomNum();
    let green = randomNum();
    let blue = randomNum();
    let color = `rgb(${red},${green},${blue})`;
    inputNode.style.color = color;
    githubProfile.style.color = color;
    inputNode.style.borderColor = color;
};

inputNode.addEventListener("keypress", changeColor);
