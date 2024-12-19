// Calculator functionality
let calcScreen = document.getElementById("calc-screen");

// Append values to the screen
function append(value) {
  if (calcScreen.value === "0" || calcScreen.value === "Error") {
    calcScreen.value = value;
  } else {
    calcScreen.value += value;
  }
}

// Clear the screen
function clearScreen() {
  calcScreen.value = "0";
}

// Remove the last character
function backspace() {
  calcScreen.value = calcScreen.value.slice(0, -1) || "0";
}

// Perform the calculation
function calculate() {
  try {
    calcScreen.value = eval(calcScreen.value.replace(/÷/g, '/').replace(/×/g, '*'));
  } catch (error) {
    calcScreen.value = "Error";
  }
}
