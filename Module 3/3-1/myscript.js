const numbers = []

const body = document.body

for(let i=1; i < 6; i++) {
    const number = Number(prompt(`Input number ${i}`))
    numbers.push(number)
}   

for (let i = 4; i >= 0; i--) {
    const par = document.createElement("p")
    body.appendChild(par)
    par.textContent = numbers[i]


}