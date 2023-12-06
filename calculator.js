function multiply() {
    performOperation('txtn1', 'txtn2', 'multi', (n1, n2) => n1 * n2);
}

function divide() {
    performOperation('txtn3', 'txtn4', 'divi', (n3, n4) => n3 / n4);
}

function add() {
    performOperation('txtn5', 'txtn6', 'som', (n5, n6) => n5 + n6);
}

function subtract() {
    performOperation('txtn7', 'txtn8', 'sub', (n7, n8) => n7 - n8);
}

function power() {
    performOperation('txtn9', 'txtn10', 'poten', (n9, n10) => Math.pow(n9, n10));
}

function performOperation(input1, input2, resultId, operation) {
    var num1 = parseFloat(document.getElementById(input1).value);
    var num2 = parseFloat(document.getElementById(input2).value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var result = operation(num1, num2);
        document.getElementById(resultId).innerHTML = `${num1} ${getOperator(resultId)} ${num2} = ${result}`;
    } else {
        document.getElementById(resultId).innerHTML = 'Invalid Input';
    }
}

function getOperator(resultId) {
    switch (resultId) {
        case 'multi':
            return 'x';
        case 'divi':
            return '/';
        case 'som':
            return '+';
        case 'sub':
            return '-';
        case 'poten':
            return '**';
        default:
            return '';
    }
}
