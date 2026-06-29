//======================== FUNCTION IN JS
//block  of code that performs a specific task , can be inviked whenever needed


// console.log('hello');

"abc".toUpperCase()
"xyz".toLowerCase()

[1,2,3].push(4); //this k functions 

// mostb of programming me ham khud k functions banate hai 

//function Defination:
function functionName(){
  console.log('maham')
  console.log('ali')
  
}
// functionName()    // function call karna invoke karana bhikehte hai.
// 
// agar function k ander jo kam kia hai wo bar bar repeat karna ho to function ko 
//  autni bar call karte jao  .function haman redendancy matlab code ko repeat karne se bachate hai.

function myMessage(msg){
    //parameter --> input
    console.log(msg)
    
}
myMessage("I Love JS")// argument

//call k ander jo value pass karte hai aus ko argument kehte hai. coma se seprate kar k multiple input le sakte hai.

 
//function koi value bhi return kar k dete hai. aus
//  k lie ham return key word ka use karan ge. or return keyword 1 hi value return
//  karta hai.or aik bat or jab return keyword use karlia jaye to aus ko phir aus k niche koi
//  bhi work kia jaye matlab koi bhi code likha jaye to nahi chale ga.


function sum(x,y){
    //local variable --> scope
    s = x+y;
    console.log("before return")
    return s;
    console.log("after return")// ye ni chale ga
}
let val= sum(33,4);
console.log(val)
console.log(x) // answer ho ga: is not defined
//q k ye  function k bahir nahi chale ga.

// functions parameter -->like local varialbe of function --> block scope


//function auper se le k niche tak work karta hai.


// ye functions k ander jo parameter ate hain wo local variable kehlata hai.
//  aus ka scope local variavale ki tarhan hota hai . matlab wo sirf ausi function k 
// block me kam karta hai.

// simple function syntex

function greet(){
    console.log("good morning");
}

greet();


// lekin jab kisi akele functon ko call karana ho to aus ko simple function kimtarhan nai likhe ge 
// bulk aus ko aik variable me store kar lain gge...

// Example:

let greet = function(){
    console.log("good evening");
}

greet();//call karna ya in invoke karna



// ====================================Arrow function and simple function=========================== 
//Arrow Functions: compact way of writing a function

const functionName =(param1,param2)=>{
    //do some work
}


// Arrow function syntex 
let greet = () =>{
    console.log("good evening");
}

greet();

// singal line code he to curly prenthisis bhi hata  sakte hain.
// singal line code ho to diffrent type Arrow function likhne ka tarika is ko bohot shot se shot tarike se likh sakte han. 

// !st tarika 
let greet = () =>console.log("good evening");
greet();

// 2nd tarika 
let greet = () =>{return 'Good night'};
console.log(greet());

// 3rd taika 
let greet = () => 'Good Morning';
console.log(greet());


// set time Out
// setTimeout()  is ka matlab he konsa funtion kitni der k bad chale.
// example: 
setTimeout(function (){
    console.log('Good Morning');
    
}, 2000);
// is me 2 second k bad good morning likha ajaye ga . 

// short hand with Arrow function 
setTimeout(() =>{
    console.log('Good Morning');
    
}, 2000);


// argument k sath function call karana ka tariaka 
// example 
let sum = function(a,b){
    return a+b
}
console.log(sum(25,25)); // Answer is 50

// Arrow function se banane ka tarika 
let sum1 = (a,b) =>{
    return a+b
}
console.log(sum(25,25)); // answer is 50

// short hand Arrow function
let sum3 = (a,b)=> a+b;
console.log(sum(24,24)); // Answer is 48



// singal arguments se double bane ka tarika 

// example 
let double = (a) => a*2;
console.log(double(100)); // answer is 200


// short had 
let double2 = a => a*2;
console.log(double(100)); // answer is 200


// ========================Array.from  what is this  ==========================

// array .form qu lagaya jata hai 

const str = "maham";
console.log(str);// maham
console.log(typeof(str));// string

// Let's Practice Question
// Q:  create a function using the "function" keyword that takes  String as an argument & returns the number of volwels in the string.


function countVowels(str){
    let count = 0
    for(const char of str){
        if(
            char === "a" || 
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
        ){
            count++
        }
    }
    return count;
}

let value = prompt("Please Enter Your Message I give you Vowels");
console.log(countVowels(value))







