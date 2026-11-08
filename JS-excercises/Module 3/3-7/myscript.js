function rollDice(sides) {
    const dice = Math.floor(Math.random() * sides) + 1
    return dice
}

const sides = Number(prompt("Enter the number of sides: "))
const body = document.body
const ul_list = document.createElement("ul")
body.append(ul_list)



let dice = 0
while (dice != sides) {
    dice = rollDice(sides)
    const element = document.createElement("li")
    element.textContent = dice
    ul_list.append(element)
}