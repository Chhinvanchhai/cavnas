var canvas = document.querySelector("canvas");

console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
c.fillRect(100, 100, 100, 100);

var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(440, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

// line
ctx.beginPath();
ctx.moveTo(300, 400);
ctx.lineTo(2000, 400);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 400);
ctx.lineTo(0, 960);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 400);
ctx.lineTo(300, 0);
ctx.stroke();

ctx.beginPath();
ctx.rect(400, 340, 60, 60);
ctx.stroke();

var cell = [];
let speed = 0;
// setInterval(() => {
//    let c = {
//     x: 30,
//     y: 30
//    }
//   cell.push(c)
//   speed+=c.x
//   ctx.beginPath();
//   ctx.fillRect(canvas.width-speed, canvas.height-40, 40, 40);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.fillRect(canvas.width-40, canvas.height-speed, 40, 40);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.fillRect(canvas.width-speed, 0, 40, 40);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.fillStyle ="#302687"
//   ctx.fillRect(0, canvas.height-speed, 40, 40);
//   ctx.stroke();
// }, 2000);

// ctx.lineTo

// for gaem testing

var count = 0;
var mark = 0;
var allscore = [];
var playerscore = 0;
var shape = 16;
var snake = {
  x: 160,
  y: 160,
  dx: shape,
  dy: 0,
  cells: [],
  maxcell: 4,
};
var fruits = {
  fx: 160 + shape,
  fy: shape,
};
let count2 = 0;
var speed2 = 30;

function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function loop() {
  requestAnimationFrame(loop);
  // console.log("in animation loop");
  count2++;

  if (count2 < speed2) return;
  count2 = 0;

  ctx.beginPath();
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.x += snake.dx;
  snake.y += snake.dy;
  if (snake.x > canvas.width) {
    snake.x = 0;
  }

  // if (snake.x < canvas.width) {
  //   snake.x = canvas.width - shape;
  // }

  // if (snake.y < canvas.height) {
  //   snake.y = canvas.height - shape;
  // }

  // if (snake.y > canvas.height) {
  //   snake.y = 0;
  // }

  ctx.fillStyle = "blue";
  ctx.fillRect(fruits.fx, fruits.fy, shape - 1, shape - 1);

  snake.cells.unshift({ a: snake.x, b: snake.y });

  // console.log("snake.cells", snake.cells);

  if (snake.cells.length > snake.maxcell) {
    snake.cells.pop();
  }

  snake.cells.forEach(function (cell, index) {
    //do it 4 step
    ctx.fillStyle = "red";
    if (index == 0) {
      ctx.fillStyle = "white";
    }
    if (cell.a === fruits.fx && cell.b === fruits.fy) {
      fruits.fx = getRandom(0, 25) * shape;
      fruits.fy = getRandom(0, 25) * shape;
    }
    // snake.maxcell++;

    ctx.fillRect(cell.a, cell.b, shape - 1, shape - 1);
  });
}

document.addEventListener("keydown", function (e) {
  if (
    (e.which === 37 && snake.dx === 0) ||
    (e.which === 65 && snake.dx === 0)
  ) {
    snake.dx = -shape;
    snake.dy = 0;
  } else if (
    (e.which === 38 && snake.dy === 0) ||
    (e.which === 87 && snake.dy === 0)
  ) {
    snake.dy = -shape;
    snake.dx = 0;
  } else if (
    (e.which === 39 && snake.dx === 0) ||
    (e.which === 68 && snake.dx === 0)
  ) {
    snake.dx = shape;
    snake.dy = 0;
  } else if (
    (e.which === 40 && snake.dy === 0) ||
    (e.which === 83 && snake.dy === 0)
  ) {
    snake.dy = shape;
    snake.dx = 0;
  }
});

canvas.onmousemove  = function (m) {
  // ctx.beginPath();
  // ctx.fillStyle ="#302687"
  // ctx.fillRect(e.x, e.y, 20, 20);
  canvas.onmousedown  =  function(e) {
    ctx.beginPath();
    ctx.fillStyle ="#302687"
    ctx.fillRect(m.x, m.y, 20, 20);
  }
};

// canvas.onmousemove  =  function(e) {
//   ctx.beginPath();
//   ctx.fillStyle ="#302687"
//   ctx.fillRect(e.x, e.y, 20, 20);
// }

canvas.contextmenu = function (e) {
  console.log("ee", e);
};

requestAnimationFrame(loop);
