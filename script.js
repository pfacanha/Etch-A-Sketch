console.log("Hello World!");

const gridbox = document.querySelector(".gridbox");
const button = document.querySelector(".btn");

button.addEventListener("click", makeGrid);

function makeGrid() {
  let size = Number(prompt("Enter the size you want"));
  let isAllowed = true;
  while (isAllowed) {
    if (size >= 100) {
      size = Number(prompt("Enter a value less than 100"));
    } else {
      isAllowed = false;
    }
  }
  drawGrid(size);
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function drawGrid(size) {
  gridbox.innerHTML = "";
  const boxSize = 640 / size;

  for (let i = 0; i < size * size; ++i) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;

    div.addEventListener("mouseenter", function (e) {
      const randomColor = getRandomColor();
      e.target.style.backgroundColor = randomColor;
    });
    gridbox.appendChild(div);
  }
}
