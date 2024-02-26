let currentInput = '0';


function updateDisplay() {
    document.getElementById('result').value = currentInput;
}

function handleInput(value) {
    switch (value) {
        case 'AC':
            clearResult();
            break;
        case '+/-':
            toggleSign();
            break;
        case '%':
            getPercentage();
            break;
        case '=':
            calculateResult();
            break;
        default:
            appendToDisplay(value);
            break;
    }
}

function handleOperator(operator) {
    if (!operatorClicked) {
        currentInput += operator;
        operatorClicked = true;
    }
}

function toggleSign() {
    if (currentInput === '0') {
        currentInput = '0';
        updateDisplay();        
    } else {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}

function clearResult() {
    currentInput = '0';
    updateDisplay();
}

function appendToDisplay(key) {
    if (currentInput === '0') {
        currentInput = key;
        updateDisplay();    
    } else {
        currentInput += key;
        updateDisplay();
    }
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function getPercentage(){
    if (currentInput === '0') {
        currentInput = '0';
        updateDisplay();    
    } else {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }
}