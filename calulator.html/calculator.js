let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    const lastChar = display.value[display.value.length - 1];
    if (["+", "-", "*", "/"].includes(lastChar)) {
        display.value = display.value.slice(0, -1);
    }
    display.value += operator;
}

function appendDot() {
    const lastNumber = display.value.split(/[\+\-\*\/]/).pop();
    if (!lastNumber.includes(".")) {
        display.value += ".";
    }
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}