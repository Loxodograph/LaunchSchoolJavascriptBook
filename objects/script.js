//exercise 1
//person.name or person['name']

//exercise 2
// apparently they can all be keys. the non string ones are converted to strings by js

//exercise 3
// let myArray = {
//   0: 'funky',
//   1: 'bonaduce',
//   2: 'sexy',
//   3: 'john',
//   4: 'belushi',
//   length: 5
// };

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i])
// }

// //exercise 4
// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// }

// let key =  Object.keys(obj)
// console.log(key.map(item => item.toUpperCase()));
// console.log(obj)

//exercise 5

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// }
// let myObj = Object.create(myProtoObj);

//exercise 6
//'foo' is string so primitive
//pi is primitive
// array is object
// false is primitive
// foo is a variable name and therefore neither
// function is an object
// undefined is primitive
//object is an object

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// }
// let myObj = Object.create(myProtoObj);
// myObj.qux = 3;

// let objKeys = Object.keys(myObj);
// objKeys.forEach(function(key) {
//   console.log(key);
// });
//I believe this will not run because you can not use a forEach statement for an object.

//turns out i was wrong. it will run. this will only examine the Own property for myObj. therefore it only logs qux

// for (let key in myObj) {
//   console.log(key);
// }

// this will log foo, bar, and qux.


// function objectOmitter(obj, keys){
//   let finalObj = {}
//   if (!keys) {
//     return Object.assign(finalObj, obj);
//   } else {
//     keys.forEach(function(key){
//       if (obj.hasOwnProperty(key)){
//         finalObj[key] = obj[key];
//       }
      
//     })
//     return finalObj;
//   }
// }
// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };


// let newObj = objectOmitter(objToCopy);
// console.log(newObj)

// let newObj2 = objectOmitter(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);    

// let newObj3 = objectOmitter(objToCopy, [ 'bar' ]);
// console.log(newObj3);   

//exercise 9

//i read the solution for this one. Strings are not mutable like objects. I knew this but i didnt remember. Therefore when you say argument2 = 'hi' it doesnt actually change the string.

//exercise 10
// six primitive values four objects.
// 1, 2, a, b, false, and null are the primitive values
// the objects are The whole array [ ], the empty object {}, the array containing [b, false] and the array containing that previous array ([a, [b, false]])

//exercise 11
// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };
// obj.bar[3].xyz = 606;
// console.log(obj)