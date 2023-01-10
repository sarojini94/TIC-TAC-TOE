var turn = 1;
var win = -1;
var clickcounter = 0;
var matrix = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
];
function myfun(elem, row, col) {
  //  alert("jj");
  matrix[row][col] = turn;
  if (elem.innerHTML != "") return;
  if (turn == 1) {
    elem.innerHTML = "X";
    turn = 2;
  } else if (turn == 2) {
    elem.innerHTML = "0";
    turn = 1;
  }

  for (var i = 0; i < 3; i++) {
    if (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2])
      win = matrix[i][0];

    if (matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i])
      win = matrix[0][i];

    if ((matrix[0][0] == matrix[1][1]) == matrix[2][2]) win = matrix[1][1];
    if ((matrix[0][2] == matrix[1][1]) == matrix[2][0]) win = matrix[1][1];

    if (win != -1) {
      document.getElementById("print").innerHTML = "You Won";
    }
    if (clickcounter == 9 && win == -1) {
      document.getElementById("print").innerHTML = "board has been drawn";
    }
  }
}

function game() {
  location.reload();
  document.querySelectorAll(".col").value = "";
}
