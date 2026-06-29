
function clock(){
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const day = document.getElementById('day');
const period = document.querySelector('#period');

var monthNames = [
    "January",
    "Februray",
    "March",
    "April",
    "May" ,
    "June",
    "July",
    "August" ,
    "September" ,
    "October",
    "November",
    "December"
];
 const clock = setInterval(function time(){
    let today = new Date()
    let d = today.getDate()
    let m = today.getMonth()
    let y= today.getFullYear()
    let h = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()
    let ampm = h >= 12 ? "PM" : "AM";
    // Ye short form (ternary operator) hai
    //  if-else condition ka. 
    if (h >= 12) {
        ampm = "AM";
    } else {
        ampm = "PM";
    }


     // Add  zeros conditions
     h = h < 10 ? "0" + h : h;
     min = min < 10 ? "0" + min : min;
     sec = sec < 10 ? "0" + sec : sec;

    day.innerHTML = `${d} ${monthNames[m]} ${y}`
    hour.innerText = h
    minute.innerText =min
    second.innerText= sec
    period.innerText = ampm
 },1000);

}
clock();

//},1000 ka matlab :
//  ye part hai setInterval() function ka, aur 1000 milliseconds 
// ka matlab hota hai: 1 second.
// ✅ Purpose:
// Iska matlab hai har 1 second ke baad ye function dobara chale:
// 🔁 Example:
// Agar tum 1000 ki jagah 5000 karti:
// setInterval(time, 5000); 
// to clock 5 second ke gap me update hoti, jo delay create karega.



// NOTES:
// setInterval() JavaScript ka built-in function hai jo kisi function ko repeat 
// karne ke liye use hota hai — har thode-thode time baad. Ye ek function ko bar-bar run karta hai fixed time delay 
// ke sath. Time delay milliseconds me hota hai.
// (1000 milliseconds = 1 second)


// 🧠 Syntax:
// setInterval(function, time);

// 👇 Example:
// setInterval(function () {
//     console.log("Hello");
//   }, 2000);

// ⏰ Output:
// "Hello" print hoga har 2 second baad — repeat hota rahega.

// ⏰ Clock me kyun use karte hain?
// Clock ko har second update karna padta hai:
//setInterval(function(){
    // new time lo
    // time elements update karo
 // }, 1000);  // har 1 second baad

//  Agar setInterval() na use karein, to clock 
// ek hi dafa show hogi aur update nahi hogi.
  