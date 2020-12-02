//exercise 3
// You will get a reference error. foo is not defined. this happens
// because foo is declared in a block with let which only sets block scope. but the console.log action is being called outside of the block.

//exercise 4
// NAME remains Victor in both circumstances because NAME is declared as a constant. The value of a const variable can not be reassigned.

//exercise 5
// this code will output 'bar' because foo was defined as bar. A second foo variable was defined as 'qux' inside of a different block. the console.log action will not access this block when it is called.

//exercise 6
// this code will not produce an error. even though it appears we are attempting to reassign a const variable, we are actually creating a new const within a separate block. the console.log will output 'bar'