let cells = document.getElementsByClassName("togloh");
let start = document.querySelector(".ehluuleh");
let count = 1;
let gameOver = false;
 
let xScore = document.querySelector("#playerx .score");
let oScore = document.querySelector("#playero .score");
let drawScore = document.querySelector("#draw .score");
 
let x = 0;
let o = 0;
let draw = 0;
 
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    addXandO(i);
  });
}
let wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function addXandO(index) {
  let cell = cells[index];
  if (gameOver) {
    return;
  }
  if (cell.textContent !== "") {
    return;
  }
  if (count % 2 === 0) {
    cell.textContent = "O";
    cell.classList.remove("blue");
    cell.classList.add("yellow");
  } else {
    cell.textContent = "X";
    cell.classList.remove("yellow");
    cell.classList.add("blue");
  }
  for (let i = 0; i < wins.length; i++) {
    let [a, b, c] = wins[i];
 
    if (
      cells[a].textContent !== "" &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      cells[a].style.color = "red";
      cells[b].style.color = "red";
      cells[c].style.color = "red";
      if (cells[a].textContent === "X") {
        x++;
        xScore.textContent = x;
      } else {
        o++;
        oScore.textContent = o;
      }
      alert(cells[a].textContent + " Hojloo");
      gameOver = true;
      return;
    }
  }
  let isDraw = true;
 
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      isDraw = false;
      break;
    }
  }
 
  if (isDraw && !gameOver) {
    draw++;
    drawScore.textContent = draw;
    alert("Draw!");
    gameOver = true;
  }
  count++;
}
 
start.addEventListener("click", function () {
  resetGame();
});
function resetGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
    cells[i].style.color = "";
    cells[i].classList.remove("blue");
    cells[i].classList.remove("yellow");
  }
 
  count = 1;
  gameOver = false;
}