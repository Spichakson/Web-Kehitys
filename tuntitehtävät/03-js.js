let timerID = null;


function startMakingBoxes () {
    console.log("Starting making boxes...");
    timerID = setInterval(timedAction, 2000);
}

function stopMakingBoxes() {
    console.log("Stopping making boxes...")
    clearInterval(timerID)
    let over_p = document.createElement("p")
    over_p.textContent= "game over!"
    over_p.setAttribute("class", "div-blue")
}

function deleteBox(evt) {
    let parentDiv = evt.currentTarget.parentElement;
    parentDiv.removeChild(evt.currentTarget);
}


function timedAction() {
    let boxDiv = document.querySelector(".box");

    let newPara = document.createElement("p");
    newPara.textContent = "I am a box!!!"
    newPara.setAttribute("class", "div-green");
    newPara.addEventListener("click", deleteBox)
    boxDiv.appendChild(newPara)


}

let startButton = document.getElementById("start");
startButton.addEventListener("click", startMakingBoxes)

let stopButton = document.getElementById("end")
stopButton.addEventListener("click", stopMakingBoxes)


let heading = document.getElementById("main-heading");
console.log(heading);


let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs)