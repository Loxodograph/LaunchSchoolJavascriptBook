//exercise 2

function factorial(number){
  let product = number;
  for (let i = number-1; i >0; i--){
    product *= i;
  }
  return product
}

//exercise 3
// this will cause an infinite loop because the while loop is (counter = 1) when it should say something like (counter === 1). we assign the value of 1 to the counter each time it loops. The counter never reaches greater than 2.

//exercise 4
// this code does not produce an error. It logs the numbers 1-5 because even though i begins on 0 we log it with +=1, making it log 1 higher than it's index. Sine there is no increment in the for loop declaration, we do not need to worry about skipping any values.

//exercise 5
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let tries = 0;
let result;
do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while(result <=2);
console.log(`It took ${tries} tries to get a number greater than 2`);
// i had to steal this from the book. I forgot about the do while loop.

//exercise 6
function recursiveFactorial(number){
  if (number < 2) return 1;
  return number * recursiveFactorial(number-1);
}