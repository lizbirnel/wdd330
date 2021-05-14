let cells = document.getElementById("board").children;

for (i = 0; i < cells.length; i++) {
  cells[i].addEventListener("touchend", handleTouch, false);
}

function handleTouch(event) {
  if (event.target.classList.contains("tapped")) {
    alert("You already clicked me");
  } else {
    event.target.classList.add(currentPlayer);
    event.target.classList.toggle("tapped");
    event.target.innerText = currentPlayer;
    numberOfPlays++;
    let clickedRow = event.target.getAttribute("data-row");
    let clickedColumn = event.target.getAttribute("data-col");
    currentBoard[clickedRow][clickedColumn] = currentPlayer;
    checkWinner();
    console.table(currentBoard);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

let currentPlayer = "X";

document.getElementById("reset").addEventListener("touchend", resetGame, false);

function resetGame() {
  for (i = 0; i < cells.length; i++) {
    cells[i].classList.remove("X");
    cells[i].classList.remove("O");
    cells[i].classList.remove("tapped");
    cells[i].innerHTML = "";
  }

  currentBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  numberOfPlays = 0;
  currentPlayer = "X";
  console.table(currentBoard);
  document.getElementById("result").innerHTML = "";
}

let currentBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let numberOfPlays = 0;

function checkWinner() {
  if (
    currentBoard[0][0] !== "" &&
    currentBoard[0][0] == currentBoard[0][1] &&
    currentBoard[0][1] == currentBoard[0][2]
  ) {
    document.getElementById(
      "result"
    ).innerHTML = `${currentBoard[0][0]} is the winner`;
    return true;
  }

  if (
    currentBoard[1][0] !== "" &&
    currentBoard[1][0] == currentBoard[1][1] &&
    currentBoard[1][1] == currentBoard[1][2]
  ) {
    document.getElementById(
      "result"
    ).innerHTML = `${currentBoard[1][0]} is the winner`;
    return true;
  }

  if (
    currentBoard[2][0] !== "" &&
    currentBoard[2][0] == currentBoard[2][1] &&
    currentBoard[2][1] == currentBoard[2][2]
  ) {
    document.getElementById(
      "result"
    ).innerHTML = `${currentBoard[2][0]} is the winner`;
    return true;
  }

  if (
    currentBoard[2][0] !== "" &&
    currentBoard[2][0] == currentBoard[2][1] &&
    currentBoard[2][1] == currentBoard[2][2]
  ) {
    document.getElementById(
      "result"
    ).innerHTML = `${currentBoard[2][0]} is the winner`;
    return true;
  }

  if (
    currentBoard[0][0] !== "" &&
    currentBoard[0][0] == currentBoard[1][0] &&
    currentBoard[0][1] == currentBoard[2][0]
  ) {
    document.getElementById(
      "result"
    ).innerHTML = `${currentBoard[0][0]} is the winner`;
    return true;
  }

  if (
    currentBoard[0][1] !== "" &&
    currentBoard[0][1] == currentBoard[1][1] &&
    currentBoard[1][1] == currentBoard[2][1]
  ) {
    document.getElementById(
      "result"
    ).innerHTML = `${currentBoard[0][1]} is the winner`;
    return true;
  }

  if (
    currentBoard[0][2] !== "" &&
    currentBoard[0][2] == currentBoard[1][2] &&
    currentBoard[1][2] == currentBoard[2][2]
  ) {
    document.getElementById(
      "result"
    ).innerHTML = `${currentBoard[0][2]} is the winner`;
    return true;
  }

  if (
    currentBoard[0][0] !== "" &&
    currentBoard[0][0] == currentBoard[1][1] &&
    currentBoard[1][1] == currentBoard[2][2]
  ) {
    document.getElementById(
      "result"
    ).innerHTML = `${currentBoard[0][0]} is the winner`;
    return true;
  }

  if (
    currentBoard[2][0] !== "" &&
    currentBoard[2][0] == currentBoard[1][1] &&
    currentBoard[1][1] == currentBoard[0][2]
  ) {
    document.getElementById(
      "result"
    ).innerHTML = `${currentBoard[2][0]} is the winner`;
    return true;
  }

  if (numberOfPlays == 9) {
    document.getElementById("result").innerHTML = `It was a Tie!`;
  }
}
