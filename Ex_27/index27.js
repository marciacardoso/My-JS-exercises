const firstNumber= 100;
const secondNumber= 10;
console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);

var template='I add ${firstNumber} + ${secondNumber} and the result is ${result}';
var result= firstNumber + secondNumber;
console.log(template);

var template='I subtract ${firstNumber} - ${secondNumber} and the result is ${result}';
var result= firstNumber - secondNumber;
console.log(template);

var template='I multiple ${firstNumber} * ${secondNumber} and the result is ${result}';
var result=firstNumber * secondNumber;
console.log(template);

var template='I divide ${firstNumber} / ${secondNumber} and the result is ${result}';
var result= firstNumber / secondNumber;
console.log(template);

var template= 'The reminder between ${firstNumber} % ${secondNumber} is ${result}';
var result= firstNumber % secondNumber;
console.log(template);



