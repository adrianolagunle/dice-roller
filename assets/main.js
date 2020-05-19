let inputElement = document.querySelector("#input")

let buttonElement = document.querySelector("#button")

let totalElement = document.querySelector("#total")

let showAllRollsElement = document.querySelector("#show-all-rolls")

let allRollsElement = document.querySelector("#all-rolls")

let sumNumber = document.querySelector("#sum-number")

let dieRolls = []

buttonElement.addEventListener("click", function () {
    let userInput = inputElement.value
    Math.floor()
    let rollSum = 0
    let counter = 0
    while (counter < userInput) {
        currentDiceRoll = Math.floor(Math.random() * 6 + 1)
        dieRolls.push(currentDiceRoll)
        rollSum += currentDiceRoll
        counter += 1
    }
    sumNumber.innerHTML = rollSum


})


showAllRollsElement.addEventListener("click", function () {
    sumNumber.innerHTML 
    
    for (let counter2 = 0; counter2 < dieRolls.length; counter2++) {
        let numberRolled = dieRolls[counter2]
        const newDiceString = '<li class="dice">' + numberRolled + "</li>";
        allRollsElement.innerHTML += newDiceString
        
    }   
})  







