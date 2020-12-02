//exercise 1
// this will log [1,4, 3] because the array is not a primitive value. when we assign array2 = array1 both are pointing to a third piece of memory where the array object is held. When we mutate that array object it changes the results for the console.log action on both variables.

//exercise 2
// this tells me that i tried to log the variable greeting but it is not defined.

//exercise 3

//console.log(Math.sqrt(37))

//exercise 4
// i would use Math.max() for this

//exercise 5
// this returns an array with the length of each word in a string starting with the last word and working backwards.

//exercise 6
// function allMatches(array, regex){
//   let finalArr = array.filter(word => regex.test(word));
//   return finalArr
// }

// this could have been written with less code. return array.filter ...etc is all i needed

// let words = [
//   'laboratory',
//   'experiment',
//   'flab',
//   'Pans Labyrinth',
//   'elaborate',
//   'polar bear',
// ];

// console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

//exercise 7
//exception handling is a way to decide what to do if a function does not pass a test. We can use try catch statements to use these. These can prevent our programs from failing or creating large bugs

//exercise 8
// function isNotANumber(number){
//   if(parseInt(number)){
//     return false;
//   } else{
//     return true;
//   }
// }
//NaN is the only JS value not equal to itself. This could be solved if i simply wrote return number !== number;

// //exercise 9
// function isNegativeZero(number){
//   return 10/number === -Infinity;
// }

// yay i did this one. I used 10/number but the book uses 1/number. i just chose any random value. i can see why 1 is a better option.

// exercise 10
// this code converts the string y to a number. if you continue to run y++ it will then increment the number. the incrementer is different from using y = y + 1. this would not convert the y to a number.