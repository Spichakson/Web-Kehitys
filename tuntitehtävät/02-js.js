"use strict";

///const name = "Frank";
///document.querySelector("#target").innerHTML = 
///"Good morning, " + name + "!";


document.getElementById("calc").addEventListener("click", () => {
let priceInput = document.querySelector("#price");
let qtyInput= document.querySelector("#quantity");
let promoInput = document.querySelector("#promo");



const price = parseInt(priceInput.value);
const qty = parseInt(qtyInput.value);
const promoCode = promoInput.value;

let total_price = price * qty

for (let i = 1; i <= qty; i++) {
    console.log
}



switch(promoCode) {
    case "ale":
        total_price *= 0.7
        break;
    case "super2026":
        total_price *= 0.5
        break;
    default:
        console.log("No code!")
}






let textkpl = document.querySelector("#result");
textkpl.textContent = `Hinta: ${total_price}`




}
)