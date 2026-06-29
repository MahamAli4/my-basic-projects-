//============================================ Date
 
// Date 
// javascript Date objects represent a single moment in time in a 
// platform-independent  format.

// Explanation : 
// hamare jo date ka object he wo kisi bhi jaga single moment par diclare hot 
// hai. or wo moment 1st january , 1970 UTC (the epoch) start hota hai .or isi time se jitni bhi date diclare ki jati hai wo is se calculate ho k ati 
// hai. and date objects encapsulate an integral number that represrnts
//  milliseconds since the midnight at the begunning of january 
// 1 1970 .اور تاریخ کی اشیاء ایک لازمی عدد کو سمیٹتی ہیں جو 1 جنوری 1970 کی آدھی رات سے ملی سیکنڈز کی نمائندگی کرتی ہے۔ 


let myDate = new Date();
//console.log(myDate)  //Sat May 03 2025 08:27:20 GMT-0700 (Pacific Daylight Time)
//console.log(myDate.toString())  //Sat May 03 2025 08:30:04 GMT-0700 (Pacific Daylight Time)
//console.log(myDate.toDateString()); //Sat May 03 2025
//console.log(myDate.toISOString()); //2025-05-03T15:32:12.359Z
//console.log(myDate.toJSON());//2025-05-03 T15:32:51.796Z
//console.log(myDate.toLocaleDateString());//03/05/2025
//console.log(myDate.toLocaleString()); //03/05/2025
//console.log(myDate.toLocaleTimeString()); //08:37:36
//console.log(myDate.toTimeString()); //08:38:22 GMT-0700 (Pacific Daylight Time)
//console.log(myDate.toUTCString());//Sat, 03 May 2025 15:40:22 GMT
//console.log(myDate.getDate());// jo date hogi ajaye gi
//console.log(myDate.getDay()) //jo day hoga aus ka number ajaye ga . niche har day ka number likh dia gaya hai....
//[0 inder sunday, 1 index monday, 3 index tuesday, 4 index wednesday, 5 index thursday, 6 index friday, 7 index saturday]

//console.log(myDate.getFullYear());// years chal raha ho ga wo bata de ga jese 2025 chal raha he to answer : 2025
//console.log(myDate.getHours()); // jo ours chal rahe ho ga wo bata de ga.
//console.log(myDate.getMilliseconds());
//console.log(myDate.getMinutes()); // jo minutes chal raha ho wo ajaye ga.
//console.log(myDate.getMonth()); // jo month chal raha ho wo ajaye ga.
//[0 index january, 1 index feb, 2 index march , 3 index april, 4 index may ,5 index jun, 6 index july , 7 index agust , 8 index setember , 9 index october , 10 index november , 11 index december]

//console.log(myDate.getSeconds()); // jo second chal raha ho wo ajaye ga.
//console.log(myDate.getTime()); // jo second chal raha ho wo ajaye ga.


//console.log(typeof myDate) // object


let myCreateDate = new Date(2023,0,23)
//console.log(myCreateDate) //Mon Jan 23 2023 00:00:00 GMT-0800 (Pacific Standard Time)
//console.log(myCreateDate.toString());+ //Mon Jan 23 2023 00:00:00 GMT-0800 (Pacific Standard Time)
//console.log(myCreateDate.toLocaleString()); //23/01/2023, 00:00:00


let myTimeStamp = Date.now()//exist abhi ki date dega.
//console.log(myTimeStamp);//1746288517220 chage hot rahe ga time k hisab se ye millisecond k hisab se count karta hai.
console.log(myCreateDate.getTime()); //1674460800000
console.log(myCreateDate.getDate()); //23























