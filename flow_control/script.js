// //exercise 1
// 1) false;
// 2) true;
// 3) true; this should say 3
// 4) true; this should say 3
// 5) false;
// 6) true;
// 7) true; this should say false... I did my math wrong. 128 is notgreater than 129... oops.
// 8) false;
// 9) false
// 10) true;
// 11) false;
// 12)false; this should say true. Because (!(100/5) ===20) || ((328/4) === 82)) becomes (!(true) || (true)) > (false || true) > (true)

//exercise 2

function evenOrOdd(num) {
  num%2 === 0 ? console.log('even') : console.log('odd');
}

//exercise three
function improvedEvenOrOdd(num) {
  Number.isInteger(num) ? evenOrOdd(num) : console.log('Not an Integer!')
}

//exercise four
//this will console.log all of the product messages after case 113
//because there is no break; statement

//exercise five
if (foo()){
  return 'bar';
} else {
  return qux();
}

//exercise six
// this code will output 'Not Empty' because even though the array
// does not contain any data, it is only being evaluated as true
// or false. if(arr) will return a truthy value.

//exercise seven
function uppercaseString(str){
  if (str.length > 10){
     return str.toUpperCase();
  } else {
    return str;
  }
}

//exercise 8
function numberRange(num){
  if (num >= 0 && num <=50) {
    console.log('Number is between 0 and 50');
  } else if (num >50 && num <= 100){
    console.log("Number is between 51 and 100");
  } else if (num > 100) {
    console.log("number is greater than 100");
  } else if (num < 0) {
    console.log("Number is less than 0");
  }
}