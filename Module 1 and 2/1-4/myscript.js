
const name = prompt("Type your name: ")
let faculty = Math.random() * 4;




document.querySelector("#result").textContent = name





if (faculty >= 0 && faculty < 1) {
    document.querySelector("#result").textContent =
    name + ", you are Ravenclaw"
} else if (faculty >= 1 && faculty < 2) {
    document.querySelector("#result").textContent =
    name + ", you are Gryffindor"
} else if (faculty >= 2 && faculty < 3) {
    document.querySelector("#result").textContent =
    name + ", you are Slytherin"
} else if (faculty >= 3 && faculty <= 4) {
    document.querySelector("#result").textContent =
    name + ", you are Hufflepuff"
}
