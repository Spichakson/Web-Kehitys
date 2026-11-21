const trigger = document.querySelector("#trigger")
const picture = document.querySelector("#target")

function change() {
    picture.src = "img/picB.jpg"
}

function original() {
    picture.src = "img/picA.jpg"
}

trigger.addEventListener("mouseover", change)
trigger.addEventListener("mouseout", original)