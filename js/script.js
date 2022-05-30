function generateGrid(gridX, gridY, container) {
  container.style.width = `calc(50px * ${gridX} + 25px)`;
  container.innerHTML = "";
  var bombsNumber = [];

  while (bombsNumber.length < 16) {
    var r = Math.floor(Math.random() * (gridX * gridY)) + 1;
    if (bombsNumber.indexOf(r) === -1) bombsNumber.push(r);
  }
  console.log(bombsNumber);

  for (let i = 1; i <= gridX * gridY; i++) {
    if (bombsNumber.includes(i)) {
      container.innerHTML += `<div class="square bomb">${i}</div>`;
    } else container.innerHTML += `<div class="square">${i}</div>`;
  }
}

const squareContainer = document.getElementById("squarecontainer");
const playButton = document.getElementById("playbtn");
let difficulty = document.getElementById("difficultySelect");

playButton.addEventListener("click", function () {
  console.log(difficulty.value);

  if (difficulty.value === "easy") {
    grid = generateGrid(10, 10, squareContainer);
  }

  if (difficulty.value === "medium") {
    grid = generateGrid(9, 9, squareContainer);
  }

  if (difficulty.value === "hard") {
    grid = generateGrid(7, 7, squareContainer);
  }

  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", function () {
      square.classList.add("clicked");
    });
  });

  const bombs = document.querySelectorAll(".bomb");

  bombs.forEach((bomb) => {
    bomb.addEventListener("click", function () {
      bomb.classList.add("bombclicked");
    });
  });
});
