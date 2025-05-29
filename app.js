const userName = prompt("Please Enter Game Player Name:");
document.getElementById('user-name').textContent = userName || "You";

const clickSound = new Audio('./sounds/click.mp3');
const winSound = new Audio('./sounds/win.mp3');
const loseSound = new Audio('./sounds/lose.mp3');

const choices = document.querySelectorAll('.choice');
const msg = document.getElementById('msg');
const userScoreElement = document.getElementById('user-score');
const compScoreElement = document.getElementById('comp-score');

let userScore = 0;
let compScore = 0;

const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
};

const animateMessage = () => {
  msg.classList.remove("bounce");
  void msg.offsetWidth;
  msg.classList.add("bounce");
};

const drawGame = () => {
  msg.textContent = "It's a Draw!";
  animateMessage();
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    msg.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
    userScoreElement.textContent = userScore;
    winSound.play();
  } else {
    compScore++;
    msg.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
    compScoreElement.textContent = compScore;
    loseSound.play();
  }
  animateMessage();
};

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    drawGame();
  } else {
    const userWins = 
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper");
    
    showWinner(userWins, userChoice, computerChoice);
  }
};

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    clickSound.play();
    playGame(choice.id);
  });
});
