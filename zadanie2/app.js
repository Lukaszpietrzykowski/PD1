const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status-text");
const restartButton = document.querySelector("#restart-button");
let playerLabel = document.getElementById("player-label");
let enemy = document.getElementById("enemy-label");

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
let isComputer = enemy.value === "computer";

initGame();

function initGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartButton.addEventListener("click", restartGame);
  playerLabel.addEventListener("change", setPlayer);
  enemy.addEventListener("change", setEnemy);
  playerLabel = playerLabel.value
  statusText.textContent = `Tura gracza ${currentPlayer}`;
  running = true;
}

function cellClicked() {
  const cellIndex = this.getAttribute("id");

  if (options[cellIndex] != "" || !running) {
    return;
  }
  console.log(currentPlayer)
  console.log(playerLabel)

  updateCell(this, cellIndex);
  checkWin();
}

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function changePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  statusText.textContent = `Tura gracza ${currentPlayer}`;
}

function checkWin() {
  let roundWon = false;

  for (let i = 0; i < winConditions.length; i++) {
    const winCondition = winConditions[i];
    const cellA = options[winCondition[0]];
    const cellB = options[winCondition[1]];
    const cellC = options[winCondition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }

    if (cellA === cellB && cellB === cellC) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    statusText.textContent = `Wygrywa gracz ${currentPlayer} !`;
    running = false;
  } else if (!options.includes("")) {
    statusText.textContent = `Remis`;
    running = false;
  } else {
    changePlayer();
    if (isComputer && currentPlayer != playerLabel) {
      generateComputerMove();
    }
  }
}

function generateComputerMove() {
  let avaliableIndexes = [];
  for (let i = 0; i < options.length; i++) {
    if (options[i] == "") {
      avaliableIndexes.push(i);
    }
  }

  let randomMove = Math.floor(
    Math.random() * (avaliableIndexes.length - 1 - 0) + 0
  );
  updateCell(cells[avaliableIndexes[randomMove]], avaliableIndexes[randomMove]);
  checkWin();
}

function setEnemy() {
  enemy = document.getElementById("enemy-label").value;
  isComputer = enemy === "computer";
}

function setPlayer() {
  playerLabel = document.getElementById("player-label").value;
  currentPlayer = playerLabel;
  statusText.textContent = `Tura gracza ${currentPlayer}`;
}

function restartGame() {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `Tura gracza ${currentPlayer}`;
  cells.forEach((cell) => (cell.textContent = ""));
  document.getElementById("player-label").value = "X";
  document.getElementById("enemy-label").value = "player";
  running = true;
}
