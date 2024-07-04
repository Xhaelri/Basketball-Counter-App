/* let add1point = document.getElementById("add1point__home");
let add2point = document.getElementById("add3point__home");
let add3point = document.getElementById("add2point__home");
let add1pointG = document.getElementById("add1point__guest");
let add2pointG = document.getElementById("add2point__guest");
let add3pointG = document.getElementById("add3point__guest");
 */
let scoreH = document.getElementById("home-score");
let score1 = 0;

function add1() {
  score1 = score1 + 1;
  scoreH.textContent = score1;
}
function add2() {
  score1 = score1 + 2;
  scoreH.textContent = score1;
}
function add3() {
  score1 = score1 + 3;
  scoreH.textContent = score1;
}

let scoreG = document.getElementById("guest-score");
let score2 = 0;

function add1G() {
  score2 = score2 + 1;
  scoreG.textContent = score2;
}
function add2G() {
  score2 = score2 + 2;
  scoreG.textContent = score2;
}
function add3G() {
  score2 = score2 + 3;
  scoreG.textContent = score2;
}
