function generateGrid(gridX, gridY, container) {
  container.style.width = `calc(50px * ${gridX} + 25px)`;
  container.innerHTML = "";
  var bombsNumber = [];

  while(bombsNumber.length < 16){
      var r = Math.floor(Math.random() * (gridX * gridY)) + 1;
      if(bombsNumber.indexOf(r) === -1) bombsNumber.push(r);
  }
  console.log(bombsNumber);

  for (let i = 1; i <= gridX * gridY; i++) {
    if (bombsNumber.includes(i)) {
      container.innerHTML += `<div class="bomb">${i}</div>`;
    }else
    container.innerHTML += `<div class="square">${i}</div>`;
  }
}

const squareContainer = document.getElementById("squarecontainer");
const playButton = document.getElementById("playbtn");
let difficulty = document.getElementById("difficultySelect");

playButton.addEventListener("click", function () {
  console.log(difficulty.value);
  let totCells = 0

  if (difficulty.value === "easy") {
    grid = generateGrid(10, 10, squareContainer);
    totCells = 100;
  }

  if (difficulty.value === "medium") {
    grid = generateGrid(9, 9, squareContainer);
    totCells = 81;
  }

  if (difficulty.value === "hard") {
    grid = generateGrid(7, 7, squareContainer);
    totCells = 49;
  }

  const squares = document.querySelectorAll(".square");
  let goodClicks = 0;

  squares.forEach((square) => {
    square.addEventListener("click", function () {
      square.classList.add("clicked");
      goodClicks = goodClicks + 1;
      if (goodClicks === (totCells - 16)){
        alert(`HAI VINTO! Il tuo punteggio è ${goodClicks}`);
      }
    });
  });


  const bombs = document.querySelectorAll(".bomb");

  bombs.forEach((bomb) => {
    bomb.addEventListener("click", function () {
      bomb.classList.add("bombclicked");
      alert(`Hai trovato una bomba! HAI PERSO. Il tuo punteggio è ${goodClicks}`);
      for (const bomb of bombs){
        bomb.classList.add("bombclicked");
      }
      return false
    });
  });

});
