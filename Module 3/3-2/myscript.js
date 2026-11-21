const number = Number(prompt("How many names? "))
const people_list = []

for (let i = 0; i < number + 1; i++) {
    const name = prompt("Enter a name: ")
    people_list.push(name)
}




people_list.sort()


const body = document.body
const ordered_list = document.createElement("ol")
body.append(ordered_list)



for (let i = 0; i < number; i++ ) {
    const list_numbers = document.createElement("li")
    ordered_list.append(list_numbers)
    list_numbers.textContent = people_list[i]
    
}
