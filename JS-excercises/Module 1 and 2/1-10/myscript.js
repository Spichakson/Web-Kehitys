const dices = Number(prompt("Input the number of dices: "))
const dices_sum = Number(prompt("Input the sum of the eye numbers: "))


let correct_throws = 0

for (let i = 0; i < 10000; i++) {
    let one_throw = 0
    for (let j = 1; j < dices + 1; j++ ) { 
        throw_result = Math.floor((Math.random()*6)) + 1
        one_throw += throw_result
               
    }
    if (one_throw === dices_sum) {
        correct_throws ++
    }
    
      

}
const result = (correct_throws / 10000) * 100
console.log(correct_throws)
document.querySelector("#result").textContent = 
`The probability of the inputed sum is ${result.toFixed(2)}%`