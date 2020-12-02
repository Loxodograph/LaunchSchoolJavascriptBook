let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age?\n'));

for (let i = 1; i <=5; i++){
  let yearsTime = i*10;
  console.log(`In ${yearsTime} years, you will be ${age + yearsTime} years old`);
}