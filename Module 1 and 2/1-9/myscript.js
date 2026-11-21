const number = Number(prompt("Input a number: "))


let number_prime = true
if (number <= 1) {
    document.querySelector("#statement").textContent =
    `${number} is a prime number`
    
}

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        console.log(number + "/" + i)
        number_prime = false;
        break
    } else {
        continue
    }

}

if (number_prime === true) {
    document.querySelector("#statement").textContent =
    `${number} is a prime number`
} else {
    document.querySelector("#statement").textContent =
    `${number} is not a prime number`
}