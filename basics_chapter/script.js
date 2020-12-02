// exercise 1 -- Concatenate two or more strings

let firstName = "Nick";
let lastName = "Paldino";
let fullName = `${firstName} + ${lastName}`;
console.log(firstName);

// exercise 2 -- arithmetic operators;
const NUMBER = 4936;

console.log(parseInt(NUMBER/1000));
console.log(parseInt((NUMBER%1000)/100));
console.log(parseInt(((NUMBER%1000)%100)/10));
console.log(parseInt((((NUMBER%1000)%100)%10)/1));

// my solution.... hmmm. Here's one closer to the books solution
let newNumber = 4936;
let ones = newNumber % 10;
console.log(ones)

newNumber -= ones;
newNumber /= 10;
let tens = newNumber % 10;
console.log(tens);
newNumber -= tens;
newNumber /= 10;
let hundreds = newNumber % 10;
console.log(hundreds);
newNumber -= hundreds;
newNumber /= 10;
let thousands = newNumber;
console.log(thousands)

/* exercise 3
1. String
2. Boolean
3. Number (Float?)
4. Number
5. Undefined
6. Object
*/

/* exercise 4;
Because 5 is written between single quotes, javascript interprets this
as a String. When the Number Ten is "added" to this string, javascript converts the
Number to a String. It then concatenates the string '10' onto the string '5' resulting
in '510'. Had they both been numbers (or if there was a different operator involved)
javascript would have performed the arithmetic.
*/

// exercise 5
console.log(Number('5')+10);

//exercise 6
console.log(`The value of 5 + 10 is ${Number('5') + 10}`);

//exercise 7
//no this will result in Undefined;

//exercise 8
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

//exercise 9
let pets = {
  asta: "dog",
  butterscotch: "cat",
  pudding: "cat",
  neptune: "fish",
  darwin: "lizard"
}

//exercise 10
// false

//exercise 11
// 3 because parseInt stops reading when it finds non number characters

//exercise 12
// The answer is true because they are strings. Kinda like how back in the day
// when you used to get a really long CD and tracks 1, 10, 11, etc were grouped together
// and so were tracks 2, 20, 22. because it was sorting by first digit and not
// in numerical order. Anyway, all of this is a long way of saying what the solution
// in the book says which is "Javascript performs a character by character comparison going
// from left to right, so on the first comparison it determines that '1' < '9'" 
// and therefore evaluates to TRUE