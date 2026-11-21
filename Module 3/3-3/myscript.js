const names = []

for (let i = 0; i < 6; i++) {
    const name = prompt("Enter a god's name: ")
    names.push(name)
}




names.sort()
names.reverse()

console.log(names)

const body = document.body
const un_list = document.createElement("ul")
body.append(un_list)

for(let i = 0; i < 6; i++) {
    const element = document.createElement("li")
    un_list.append(element)
    element.textContent = names[i]
}