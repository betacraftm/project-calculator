let inputBtn = document.querySelectorAll('.input-btn');
let resetBtn = document.getElementById("reset");
let display = document.getElementById("display-screen");
let equalToBtn = document.querySelector("#equal");
let screenText = "";
const userInput = [];

inputBtn.forEach((input) => {
  input.addEventListener("click", () => {
    userInput.push(input.innerHTML);
    displayInput();
  });
});

resetBtn.addEventListener("click", eraseAll);

equalToBtn.addEventListener("click", showResult);

function displayInput() {
  screenText = userInput.join("");
  if (screenText.length <= 8) {
    display.textContent = screenText;
  } else {
    document.querySelector(".alert").classList.add("alert-show");
  }
}

function eraseAll() {
  userInput.splice(0, userInput.length);
  screenText = userInput.join("");
  document.querySelector(".alert").classList.remove("alert-show");
  display.textContent = 0;
}

function showResult() {
  let result = eval(screenText);
  result = Math.floor(result * 100) / 100;
  result.toFixed(2);
  display.innerHTML = result;
  userInput.splice(0, userInput.length);
}

