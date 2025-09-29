const container = document.getElementById("container");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const resetBtn = document.getElementById("reset");

const colorOptions = [
  { name: "Red", rgb: "rgb(255, 0, 0)" },
  { name: "Green", rgb: "rgb(0, 255, 0)" },
  { name: "Blue", rgb: "rgb(0, 0, 255)" }
];

let pickedColor;

function pickColor() {
  return colorOptions[Math.floor(Math.random() * colorOptions.length)];
}

function setupGame() {
  container.innerHTML = "";
  message.textContent = "";
  const correct = pickColor();
  pickedColor = correct.rgb;
  colorDisplay.textContent = pickedColor.toUpperCase();


  const shuffled = [...colorOptions].sort(() => Math.random() - 0.5);

  shuffled.forEach(color => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.background = color.rgb;
    square.addEventListener("click", () => {
      if (color.rgb === pickedColor) {
        message.textContent = ` Correct! `;
        highlightCorrect(color.rgb);
      } else {
        square.style.opacity = "0.3";
        message.textContent = " Try Again!";
      }
    });
    container.appendChild(square);
  });
}

function highlightCorrect(color) {
  document.querySelectorAll(".square").forEach(square => {
    square.style.background = color;
    square.style.opacity = "1";
  });
}

resetBtn.addEventListener("click", setupGame);


setupGame();
