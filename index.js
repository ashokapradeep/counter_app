let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let countAr = []

function increment() {
    count += 1
    countEl.textContent = count
}

function plusTwo() {
    count += 2
    countEl.textContent = count
}

function plusThree() {
    count += 3
    countEl.textContent = count
}
function plusFour() {
    count += 4
    countEl.textContent = count
}
function plusFive() {
    count += 5
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function save() {
    countAr.push(count)
    saveEl.textContent = ""+countAr
    countEl.textContent = "0"
    count = 0
}
function reset() {
    countEl.textContent = 0
    count = 0
    saveEl.textContent = ""
}