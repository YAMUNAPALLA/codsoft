let currentValue = '';
let display = document.getElementById('result');

function appendValue(value) {
    currentValue += value;
    display.value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    display.value = '';
}

function calculateResult() {
    try {
        currentValue = eval(currentValue);
        display.value = currentValue;
    } catch (error) {
        display.value = 'Error';
    }
}
