'use strict';
const names = ['John', 'Paul', 'Jones'];


let text = ""

for (let i = 0; i < names.length; i++) {
    text += `<li>${names[i]}</li>`
    
}

document.querySelector("#target").innerHTML = text