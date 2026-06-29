let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
const winnerOverlay = document.getElementById("winner-overlay");
const winnerText = document.getElementById("winner-text");

let turnO = true; // true => O's turn, false => X's turn
//playerX , playerO

//let arr = ["apple","banana", "orange"] // ye 1D arry kehte hai.

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O"
            turnO = false
        }else{
            box.innerText ="X"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
}
)

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;

        if (
            boxes[a].innerText !== "" &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[a].innerText === boxes[c].innerText
        ) {
            showWinner(boxes[a].innerText);
            disableBoxes();
            return;
        }
    }
};

const showWinner = (winner) => {
    winnerText.innerText = `${winner} is the Winner!`;
    winnerOverlay.style.display = "flex";
};


const disableBoxes = ()=> {
boxes.forEach((box)=>{
    box.disabled = true
})
   
}

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    winnerOverlay.style.display = "none"; // hide overlay
});

 