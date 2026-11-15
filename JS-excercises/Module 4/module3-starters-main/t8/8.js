const number_1 = document.getElementById("num1");
const number_2 = document.getElementById("num2");

const operation = document.getElementById("operation");
const button= document.getElementById("start")


function addition() {
    const result = Number(number_1.value) + Number(number_2.value);
    document.querySelector("#result").textContent = result
    return result
    
}
function substraction() {
    const result = Number(number_1.value) - Number(number_2.value);
    document.querySelector("#result").textContent = result
    return result
    
}
function multiplication() {
    const result = Number(number_1.value) * Number(number_2.value);
    document.querySelector("#result").textContent = result
    return result
    
}
function division() {
    const result = Number(number_1.value) / Number(number_2.value);
    document.querySelector("#result").textContent = result
    return result
    
}

let selectedValue = operation.value

function selection() {
    selectedValue = operation.value
    console.log(selectedValue)
    return selectedValue
    
}



function calculation() {
    if (selectedValue === "add") {
    addition()
} else if (selectedValue === "sub") {
    substraction()
} else if (selectedValue === "multi") {
    multiplication()
} else if (selectedValue === "div") {
    division()
}}




selection()
operation.addEventListener("change", (event) => {
    selectedValue = event.target.value
    console.log(selectedValue)
})


button.addEventListener("click", calculation)





