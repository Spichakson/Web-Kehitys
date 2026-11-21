let numbers = []

for (let j = 0; j < 1000; j++) {
    number = Number(prompt("Enter a number or enter 0 to end"))
    if (number === 0) {
        break
    }
    numbers.push(number)
    
}



numbers.sort((a, b) => b -a);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}