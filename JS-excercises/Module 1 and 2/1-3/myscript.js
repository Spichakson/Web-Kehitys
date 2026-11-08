

let number1 = Number(prompt("Type first number: "));
let number2 = Number(prompt("Type second number: "));
let number3 = Number(prompt("Type third number: "));

let sum = number1 + number2 + number3
let product = number1 * number2 * number3
let average = sum / 3


document.querySelector("#inputed").textContent = 
"Inputed numbers: " + number1 + ", " + number2 + ", " + number3;

document.querySelector("#numbers_sum").textContent =
"Numbers' sum: " + sum;

document.querySelector("#numbers_product").textContent =
"Numbers' product: " + product;

document.querySelector("#numbers_average").textContent =
"Numbers' average: " + average;