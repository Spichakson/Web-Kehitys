const answer = confirm("Should i calculate the square root? ")


if (answer === true){
    const number = prompt("Enter a number: ")
    if (number > 0) { 
        const sq_root = Math.sqrt(number)
        document.querySelector("#result").textContent = `Square root of ${number} is ${sq_root}`
        } else {document.querySelector("#result").textContent = "The square root of a negative number is not defined."

        }
} else {
    document.querySelector("#result").textContent = "The square root is not calculated."
}
 