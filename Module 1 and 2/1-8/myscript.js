const start_year = Number(prompt("Enter the start year: "))
const end_year = Number(prompt("Enter the end year: "))


const body = document.body


let year_list = document.createElement("ul")
body.append(year_list)

document.querySelector("#statement").textContent = "Leap years between inputed years: "




for (let i = start_year; i < end_year; i++ ) {
    if (i % 4 == 0 && i % 100 != 0) {

        let year_el = document.createElement("li")
        year_el.append(i)
        year_list.append(year_el)
        
    } else if (i % 400 == 0) {

        let year_el = document.createElement("li")
        year_el.append(i)
        year_list.append(year_el)

    }

}













