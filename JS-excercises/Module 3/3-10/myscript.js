const can_number = Number(prompt("Input the number of candidates: "))
const candidates = []

for (let i = 1; i < can_number + 1; i++) {
    candidates.push({
        name: prompt(`Enter the name of the candidate ${i}`),
        votes: 0,
})
    }

const voters_num = Number(prompt("Input the number of voters: "))    


function voting() {
    for(let j = 1; j < voters_num + 1; j++) {
        const vote_name = prompt("Who are you voting for?")
        const candidate_check = candidates.find(c => c.name === vote_name);
        if(candidate_check !== undefined) {
            candidate_check.votes ++  
        } else {
            console.log("No such a candidate!")
        }

    }}
    






voting()
candidates.sort((a, b) => b.votes - a.votes);
console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes`)
console.log("Results: ")
for(let i = 0; i < candidates.length; i++) {
    console.log(`${candidates[i].name}: ${candidates[i].votes}`)
}

