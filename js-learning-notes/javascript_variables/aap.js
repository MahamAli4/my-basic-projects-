//--------------------- What is Javascript ?
/* js is a programming Language. We use it to give intructions to the computer
Dynamically Typed language .this is case sensitive language hai.

input------> COMPUTER --------> Output*/

// ========================Variable in JS 
/* VAriables are  container for data

==========================Variable Rules
1:-  Variable names are case sensitive ; "a" & A is different.
2:-  Only Letters, digits,Underscore and $ is allowed. (not even spance)
3:-  only a letter, underscore or $ should be 1st character.
4:- reserved words cannot be variable names.



====================let, const & var

var    Variable can be re-declared & updated. A global scope variable.and funsctional scope.

let    Varible cannot be re-declared but can be updated. A block scope variable.

const  variable cannot be re-declared or updated .A block scope variable.*/


//===========================Data Type in JS
// data types 2 hain : 1. premitive   2: non premitive
/*

1. Primitive Data Types:
Primitive data types are the built-in data types provided by JavaScript. 
They represent single values and are not mutable.

[Number , string, Boolean, undefined, Null,
BigInt,Symbol]

NUMBER:
Number data type in JavaScript can be used to hold decimal values as well
 as values without decimals.

 Example: 
   let x = 250;
    let y = 40.5;
    console.log("Value of x=" + x);  // value of x = 250
    console.log("Value of y=" + y);  // value of y = 40.5



STRING:
The string data type in JavaScript represents a sequence of characters that are surrounded by
 single or double quotes and backteek ``.

 Example:
 let str = 'Hello All';
let str1 = "Welcome to my new house";
console.log("Value of str=" + str);
console.log("Value of str1=" + str1);


Undefined:
This means that a variable has been declared but has not been assigned a value,

Example:
let x;
console.log(x); // Outputs: undefined


Boolean:
The boolean data type can accept only two values i.e. true and false.

 Example:
 let x: true
console.log(x); 



 Null:
 This data type can hold only one possible value that is null.
 Example: 
 let x = null;
    console.log("Value of x=" + x);


BigInt:
BigInt data type can represent numbers greater than
 253-1 which helps to perform operations on large numbers.
  The number is specified by writing ‘n’ at the end of the value.

  Example: 
  let bigNum = 123422222222222222222222222222222222222n
console.log(bigNum)



Symbol:
Symbol data type is used to create objects which will always be unique.
 these objects can be created using Symbol constructor.

 Example:
 let sym = Symbol("Hello")
console.log(typeof(sym));
console.log(sym);


2. Non-primitive Data Types
Non-primitive data types, also known as reference types, are objects and derived data types. They can
 store collections of values or more complex entities. 

 Object:
 An object in Javascript is an entity having properties and methods.
  Everything is an object in javascript.

  Example: 
  // Creating object with the name person
    let person = {
        firstName: "Luiza",
        lastName: "Shaikh",
    };

    // Print the value of object on console
    console.log(person.firstName 
        + "  " + person.lastName);



Array:  
With the help of an array, we can store more than one element under 
a single name.

Example:
 let a = new Array();
    let b = new Array(10);
    let d = new Array(1, 2, 3, "Hello");
    console.log("value of a=" + a);
    console.log("value of b" + b);
    console.log("value of d=" + d);


    functions bhi non premitive data type me hota hi
*/



