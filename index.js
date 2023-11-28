let inputBtn = document.getElementsByClassName("input-btn");
let resetBtn = document.getElementById("reset");
let display = document.getElementById("display-screen");
let equalToBtn = document.querySelector("#equal");
let screenText = "";
const userInput = [];
inputBtn[0].addEventListener("click", function () {
  userInput.push(inputBtn[0].innerHTML);
  displayInput();
});
inputBtn[1].addEventListener("click", function () {
  userInput.push(inputBtn[1].innerHTML);
  displayInput();
});
inputBtn[2].addEventListener("click", function () {
  userInput.push(inputBtn[2].innerHTML);
  displayInput();
});
inputBtn[3].addEventListener("click", function () {
  userInput.push(inputBtn[3].innerHTML);
  displayInput();
});
inputBtn[4].addEventListener("click", function () {
  userInput.push(inputBtn[4].innerHTML);
  displayInput();
});
inputBtn[5].addEventListener("click", function () {
  userInput.push(inputBtn[5].innerHTML);
  displayInput();
});
inputBtn[6].addEventListener("click", function () {
  userInput.push(inputBtn[6].innerHTML);
  displayInput();
});
inputBtn[7].addEventListener("click", function () {
  userInput.push(inputBtn[7].innerHTML);
  displayInput();
});
inputBtn[8].addEventListener("click", function () {
  userInput.push(inputBtn[8].innerHTML);
  displayInput();
});
inputBtn[9].addEventListener("click", function () {
  userInput.push(inputBtn[9].innerHTML);
  displayInput();
});
inputBtn[10].addEventListener("click", function () {
  userInput.push(inputBtn[10].innerHTML);
  displayInput();
});
inputBtn[11].addEventListener("click", function () {
  userInput.push(inputBtn[11].innerHTML);
  displayInput();
});
inputBtn[12].addEventListener("click", function () {
  userInput.push(inputBtn[12].innerHTML);
  displayInput();
});
inputBtn[13].addEventListener("click", function () {
  userInput.push(inputBtn[13].innerHTML);
  displayInput();
});
inputBtn[14].addEventListener("click", function () {
  userInput.push(inputBtn[14].innerHTML);
  displayInput();
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

  // console.log(typeof screenText);
}

function eraseAll() {
  userInput.splice(0, userInput.length);
  screenText = userInput.join("");
  document.querySelector(".alert").classList.remove("alert-show");
  display.textContent = 0;
}

function showResult() {
  let result = eval(screenText);
  // var result = 4.3455;
  result = Math.floor(result * 100) / 100;
  result.toFixed(2); // alerts 4.34
  display.innerHTML = result;
  userInput.splice(0, userInput.length);

  // console.log(input);
}

// On key down function
