let equation = '';

function appendValue(value) {
  equation += value;
  updateScreen();
}

function clearScreen() {
  equation = '';
  updateScreen();
}

function calculate() {
  try {
    const result = eval(equation);
    equation = result.toString();
    updateScreen();
  } catch (error) {
    equation = 'Error';
    updateScreen();
  }
}

function updateScreen() {
  document.querySelector('.screen').value = equation;
}