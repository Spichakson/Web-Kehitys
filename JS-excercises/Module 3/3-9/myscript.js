function even(list) {
    let even_numbers = []

    for (let i = 0; i < list.length; i++) {
        if(list[i] % 2 === 0) {
            even_numbers.push(list[i])

        }
           
}

console.log(`Changed array: ${even_numbers}`) 
}


const numbers = [2, 7, 4, 5, 8, 12, 14, 21, 23]
console.log(`Original array: ${numbers}`)

even(numbers)