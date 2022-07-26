var score = 0;
var highscore = 0;
let x = [0, 40];
let y = [55, 90];
var ones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var tens = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var hundreds = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3];

let GetLeft = () => {
  x[0] += 5;
};

let GetRight = () => {
  x[0] -= 5;
};

let GetUp = () => {
  y[0] += 5;
};

let GetDown = () => {
  y[0] -= 5;
};

const resource = () => {
  if (x[0] >= x[1] && y[0] >= y[1]) {
    x[1] += 30;
    score += 1;
  }
};

let Reset = () => {
  x[1] = 0;
};

document.getElementById("svg1").style.position = "absolute";
document.getElementById("svg2").style.position = "absolute";
setInterval(() => {
  document.getElementById("svg1").style.left = x[0] + "px";
  document.getElementById("svg1").style.top = y[0] + "px";
  document.getElementById("svg2").style.left = x[1] + "px";
  document.getElementById("svg2").style.top = y[1] + "px";
  document.getElementById("score").innerText = score;
}, 100);
