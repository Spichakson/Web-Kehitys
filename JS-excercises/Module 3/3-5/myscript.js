const numbers = []



for(let i = 0; i < 1000; i++) {

    const number = Number(prompt("Enter a number: "))

    if (numbers.includes(number)) {
        break   
}
    numbers.push(number)
}
numbers.sort((a, b) => a - b)

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}