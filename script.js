// let count = 0

// document.getElementById('increase1').onclick = function () {
//   count += 1
//   document.getElementById('scoreLabel1').innerHTML = count
// }
// document.getElementById('increase2').onclick = function () {}
// document.getElementById('increase3').onclick = function () {}
let count = 0
let score1 = document.getElementById(scoreLabel)
console.log(scoreLabel)
function increase1() {
  count = count + 1
  scoreLabel.textContent = count
}
function increase2() {
  count = count + 2
  scoreLabel.textContent = count
}
function increase3() {
  count = count + 3
  scoreLabel.textContent = count
}

let score2 = document.getElementById(scoreLabel1)
function increase11() {
  count = count + 1
  scoreLabel1.textContent = count
}
function increase22() {
  count = count + 2
  scoreLabel1.textContent = count
}
function increase33() {
  count = count + 3
  scoreLabel1.textContent = count
}
