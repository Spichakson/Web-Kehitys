year = prompt("Input a year: ") 

if (year % 4 === 0) {
    document.querySelector("#result").textContent = `${year} is a leap year`
} else {
    document.querySelector("#result").textContent = `${year} is not a leap year`
}
