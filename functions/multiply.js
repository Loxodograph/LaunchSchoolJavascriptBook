function getNum(prompt){
let rlSync = require('readline-sync');
let num = Number(rlSync.question(prompt));
return num;
}

let firstNum = getNum("Enter the first number: ");
let secondNum = getNum("Enter the second number: ");
console.log(`${firstNum} * ${secondNum} = ${firstNum*secondNum}`)