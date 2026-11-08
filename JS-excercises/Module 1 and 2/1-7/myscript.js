let throws = Number(prompt("Enter the rolls' number: "));

let result = 0

for (let i = 0; i < throws; i++) {
    let dice = Math.round(Math.random()* 6)
        if (dice === 0) {continue}
    result += dice
    console.log(`Dice thrown: ${dice}`)
    
}

document.querySelector("#throws").textContent = 
`Dice has been thrown ${throws} times`;

document.querySelector("#result").textContent = 
`Sum of the results is ${result}`;