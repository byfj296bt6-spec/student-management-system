const screen = document.getElementById('screen');

// Add number or operator to screen
function appendToScreen(value) {
screen.value += value;
}

// Clear the screen
function clearScreen() {
screen.value = '';
}

// Calculate result
function calculateResult() {
try {
screen.value = eval(screen.value);
} catch (error) {
alert("Invalid input");
}
}