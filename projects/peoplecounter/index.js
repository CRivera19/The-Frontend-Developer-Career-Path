// document.getElementById("count").innerText = 0

let countEl = document.getElementById("count")
let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(countEl)
}
function decrement() {
    count = count - 1
    countEl.innerText = count
    console.log(countEl)
}
function reset() {
    count = 0
    countEl.innerText = count
    console.log(countEl)
}
currentTime = new Date();
console.log(currentTime)

let orderEl = document.getElementById("order")
let order = "currentTime" + "countEl"

// when click save push order to #order
function save() {
    let order = 
}
console.log(order)
