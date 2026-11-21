function rollDice() {
    const dice = Math.floor(Math.random() * 6) + 1
    return dice
}


const body = document.body
const ul_list = document.createElement("ul")
body.append(ul_list)



let dice = 0
while (dice != 6) {
    dice = rollDice()
    const element = document.createElement("li")
    element.textContent = dice
    ul_list.append(element)
}