// let display = document.getElementById('inputbox');
// let buttons = document.querySelectorAll('button');
 

// NoTE:-
// document.querySelector('') ye signal value save karta he yani id ho ya class ya element yani tag singal leta hai ..
// agar jese k bohot sare button select karne hon to qureyselector me all laga dainge..
// let buttonsArry = Array.from(buttons)
// let string = " ";

// buttonsArry.forEach(btn => {
    
//     btn.addEventListener('click', (e)=>{
        

//         if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string.length -1)
//             display.value =string;

//         }else if(e.targe.innerHTML == 'AC'){
//             string = "";
//             display.value =string;
//         }else if(e.target.innerHTML == '='){
//             string = eval(string);
//             display.value = string;
//         }else{
//             string += e.target.innerHTML;
//             display.value =string;
//         }
//     })
// });



let display = document.getElementById('inputbox');

/*getElementById('inputbox'):
Ye input field ko select kar raha hai jahan par result show hoga (upar wala white box).*/

let buttons = document.querySelectorAll('button');

/*querySelectorAll('button'):
Ye calculator ke sab buttons ko select kar raha hai (0 se 9, +, -, = waghera).*/


let string = "";
// String banayi jisme input store 
// hoga:Ye ek khaali string banayi gayi hai jisme user ka input save hota hai.
// Jaise hi user koi button click karta hai, uska number/operator is string mein add hota jata hai.




buttons.forEach(button => {
    // forEach: Har button ke liye ye loop chalega.
    button.addEventListener('click', (e) => {
        // addEventListener('click', ...): Jab user button click kare, to function chale.



        let value = e.target.innerHTML;
        // Button ke andar ka text lena: jab bhi button k o click karan ge to button k ander jo hoga wo vale me ajaye ga.



        if (value === 'DEL') {
            string = string.slice(0, -1);
            display.value = string;
        } else if (value === 'AC') {
            string = "";
            display.value = string;
        } else if (value === '=') {
            try {
                string = eval(string);
                display.value = string;
            } catch (err) {
                display.value = "Error";
            }

            // eval(string): Jo math expression ban gaya hai (jaise "2+3"), usse solve karta hai.
            // try...catch: Agar galat input ho jaye (jaise "++" ya divide by 0), to "Error" show karega.

        } else {
            string += value;
            display.value = string;
        }
    });
});
