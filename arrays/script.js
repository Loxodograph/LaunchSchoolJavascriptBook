//exercise 1
// array1 length is 4;
// array 2 length is 5;
// array 3 length is 0;
// array 4 length is 5; Oops i made a mistake here. Array 3 length will be 3 because setting array4.length = 3 will automatically truncate the array.
// array 5 length is 101;

//exercise 2
// let myArray = [1, 3, 6, 11, 4, 2,
//   4, 9, 17, 16, 0];

//   myArray.forEach(item => item % 2 === 0 ? console.log(item) : null);

//exercise 3
// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];
// for (let i = 0; i < myArray.length; i++){
//   let arr = myArray[i];
//   arr.forEach(item => item % 2 === 0 ? console.log(item) : null);
// }

//exercise 4
// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// let newArray = myArray.map(function(number){
//   if(number%2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// })
// console.log(newArray)

//exercise 5
// function findIntegers(array){
  // return array.filter(number => Number.isInteger(number));
// }

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers);
 
//exercise 6

// function oddLengths(array) {
//   return array.map(item => item.length)
//               .filter(item => item %2 !== 0);

// }
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr));

//exercise 7
// let array = [3, 5, 7];
// console.log(sumOfSquares(array)); // => 83
// function sumOfSquares(arr){
//   return arr.reduce((a,b) => a + (b * b), 0)
// }

//exercise 8
// function oddLengths(strings) {
//   return strings.reduce((filteredNumbersArray, letters) => {
//     let length = letters.length;
//     if (length % 2 === 1) {
//       filteredNumbersArray.push(length);
//     }

//     return filteredNumbersArray;
//   }, []);
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr));

//I had to copy this code from the book. I didn't understand using an array as an accumulator

//exercise 9
// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];

// let numberArray = numbers1.concat(numbers2).concat(numbers3);
// console.log(numberArray.includes(3));

//exercise 10
// let arr = [
//   ["hello", "world"],
//   ["example", "mem", null, 6, 88],
//   [4, 8, 12]
// ];
// arr[1][3] = 606;
// console.log(arr)