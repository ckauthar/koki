let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {  
    if (isNan(value)) {
        // this is not a number 
    handleSymbol(value);
    } else {
        // this is a number
    handleNumber(value);
  }
  screen.innerText = buffer;
}

function handleSymbol(symbol) {
   switch (symbol) {
       case 'C':
           buffer = '0';
           runningTotal = 0;
           break;
        case '=':  
            if (previousOperator === null) {
                return;
            } 
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '+':
        case '-':
        case '&times;':
        case '&divide':
            handleMath(symbol);
            break;
   }
}

function handleMath(symbol) {
    if (buffer === '0') {
        return;
    }

    const intBuffer = parseInt(Buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;

    buffer = '0';
}

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator += '-') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '&times;') {
        runningTotal += intBuffer;
    } else {
        runningTotal 
    }
    console.log('running total', runningTotal);
}

function handleSymbol(numberString) {
    if (buffer === "0") {
        buffer = numString;
    } else {
        buffer += numberString;
    }   
}

function init () {
  document.querySelector('.calc-buttons')
  .addEventListener('click', function(event) {
    buttonClick(event.target.innerText);
  })
}

init();