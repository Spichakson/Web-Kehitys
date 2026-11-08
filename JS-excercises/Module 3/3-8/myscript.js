function concat(list) {
    let concated = ""
    for(let i = 0; i < list.length; i++) {
        concated += list[i]
    }
    
    const result = document.querySelector("#result")
    result.textContent = `${concated}`
}


const names = ["Peter", "Paul", "Jacob", "Lucas"]

concat(names)

