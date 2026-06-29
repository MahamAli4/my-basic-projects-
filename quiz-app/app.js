const quizData = {
    html: [
        {
            question: "What does HTML stand for?",
            options: ["Hypertext Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language", "None"],
            answer: 0
        },
        {
            question: "Which attribute defines inline styles?",
            options: [
                "font",
                "class",
                "styles",
                "style"
            ],
            answer: 3
        },
        {
            question: "What tag is used to create a form in HTML?",
            options: ["<form>", "<input>", "<submit>", "<button>"],
            answer: 0
        },
        {
            question: "What does the <head> tag contain?",
            options: ["Visible page content", "Metadata/invisible content ", "Header section only", "Footer of the page"],
            answer: 1
        },
        {
            question: "Which tag defines the largest heading?",
            options: [
                "a) <head>",
                "b) <h1> ",
                "c) <title>",
                "d) <heading></heading>"
            ],
            answer: 1
        },
        {
            question: "How can you open a link in a new tab?",
            options: [
                'a) target="_self"',
                'b) target="new"',
                'c) target="_blank" ',
                'd) new-tab="true"'
            ],
            answer: 2
        },
        {
            question: "What is the correct way to comment in HTML?",
            options: [
                'a) // comment',
                'b) /* comment */',
                'c) <!-- comment --',
                'd) <comment></comment>',
            ],
            answer: 2
        },
        {
            question: "Which tag is used to group block elements?",
            options: [
                'a) <span>',
                'b) <div>',
                'c) <group>',
                'd) <section></section>',
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the <meta> tag?",
            options: [
                'a) Add images',
                'b) Add metadata ',
                'c) Create headings',
                'd) Create forms'
            ],
            answer: 1
        },
        {
            question: "What tag defines a cell in a table?",
            options: [
                'a) <tr>',
                'b) <th>',
                'c) <td> ',
                'd) <cell></cell>',
            ],
            answer: 0
        },

    ],
    css: [
        {
            question: "What does CSS stand for?",
            options: [
                'a) Creative Style Sheets',
                'b) Computer Style Sheets',
                'c) Cascading Style Sheets ',
                'd) Colorful Style Sheets'
            ],
            answer: 2
        },
        {
            question: "Which property is used to change text color in CSS?",
            options: [
                'a) font-color',
                'b) text-color',
                'c) color ',
                'd) text-style'
            ],
            answer: 2
        },
        {
            question: "Which CSS property is used to change the background color?",
            options: [
                '  a) background',
                'b) background-color',
                'c) bg-color',
                'd) color'
            ],
            answer: 1
        },
        {
            question: 'How do you select an element with id "header"?',
            options: [
                'a) #header ',
                "'b) .header'",
                "c) header",
                "d) *header"
            ],
            answer: 0
        },
        {
            question: "Which symbol is used for class selectors in CSS?",
            options: [
                "a) *",
                "b) . ",
                "c) #",
                "d) &"
            ],
            answer: 1
        },
        {
            question: "Which property is used to make text bold?",
            options: [
                "a) text-style",
                "b) font-style",
                "c) font-weight",
                "d) font-bold"
            ],
            answer: 2
        },
        {
            question: "What is the default position value in CSS?",
            options: [
                'a) relative',
                'b) fixed',
                'c) absolute',
                'd) static'
            ],
            answer: 3
        },
        {
            question: "Which CSS property controls the size of text?",
            options: [
                'a) font-size',
                'b) text-size',
                'c) size',
                'd) font-style'
            ],
            answer: 0
        },
        {
            question: "Which unit is relative to the root element?",
            options: [
                'a) %',
                "b) rem",
                'c) em',
                "d) px"
            ],
            answer: 1
        },
        {
            question: "Which CSS rule is used for hover effect?",
            options: [
                'a) :focus',
                'b) :hover',
                "c) :click",
                'd) :active'
            ],
            answer: 1
        },
    ],
    javascript: [
        {
            question: "Which keyword is used to declare a variable in JavaScript?",
            options: ["var", "dim", "string", "declare"],
            answer: 0
        },
        {
            question: "Which operator is used for strict equality?",
            options: ["==", "=", "===", "=>"],
            answer: 2
        },
        {
            question: "What does NaN stand for?",
            options: ["Not a Name", "Name as Number", "Null and None", "Not a Number"],
            answer: 3
        },
        {
            question: "Which object represents the browser window in JavaScript?",
            options: ["browser", "window", "screen", "document"],
            answer: 1
        },
        {
            question: "How do you create a function in JavaScript?",
            options: ["function = myFunc()", " function myFunc()", "def myFunc()", "def myFunc()"],
            answer: 1
        },
        {
            question: "What is used to check conditions in JavaScript?",
            options: ["for", "if", "switch", "loop"],
            answer: 1
        },
        {
            question: "Which method converts string to number?",
            options: ["string()", " parseInt() ", " int()", "num()"],
            answer: 1
        },
        {
            question: "What does typeof operator do?",
            options: ["Declares type", " Checks data type", "Converts value", "Changes object"],
            answer: 1
        },
        {
            question: "What is the output of typeof null?",
            options: ["null", "object", "undefined", "string"],
            answer: 1
        },
    ],
    englishGrammar: [
        {
            question: "What is the past tense of 'go'?",
            options: [
                'a) gone',
                'b) going',
                'c) went ',
                'd) go'
            ],
            answer: 2
        },
        {
            question: "Which word is an adjective?",
            options: [
                "a) quickly",
                'b) blue',
                "c) run",
                "d) never"
            ],
            answer: 0
        },
        {
            question: "Which sentence is correct?",
            options: [
                "a) He go to school",
                "b) He goes to school ",
                "c) He going to school",
                "d) He gone school"
            ],
            answer: 1
        },
        {
            question: "What is the plural of 'mouse'?",
            options: [
                'a) mouses',
                'b) mouse',
                'c) mice',
                'd) meese'
            ],
            answer: 2
        },
        {
            question: "What type of word is 'happily'?",
            options: [
                'a) noun',
                'b) adjective',
                'c) adverb',
                'd) verb'
            ],
            answer: 2
        },
        {
            question: "Which is a conjunction?",
            options: [
                'a) before ',
                'b) book',
                "c) beautiful",
                'd) quickly'
            ],
            answer: 0
        },
        {
            question: "Which of the following is a pronoun?",
            options: [
                'a) quickly',
                'b) them',
                'c) running',
                'd) large'
            ],
            answer: 1
        },
        {
            question: "Which sentence is in passive voice?",
            options: [
                'a) She wrote a letter',
                "b) A letter was written by her ",
                "c) She writes a letter",
                "d) She is writing"
            ],
            answer: 1
        },
        {
            question: 'What is the correct form of the verb in this sentence: "She ___ already eaten."',
            options: [
                'a) has ',
                'b) have',
                'c) had',
                'd) is'
            ],
            answer: 0
        },
        {
            question: "Which one is an interrogative sentence?",
            options: [
                'a) What is your name?',
                'b) I am a student.',
                'c) Shut the door.',
                'd) It was raining.'
            ],
            answer: 0
        },
    ],
    math: [
        {
            question: "What is 7 + 5?",
            options: ["a) 10", "b) 11", "c) 12", "d) 13"],
            answer: 2
        },
        {
            question: "What is the square root of 49?",
            options: ["a) 5", "b) 6", "c) 7", "d) 8"],
            answer: 2
        },
        {
            question: "What is 9 × 6?",
            options: ["a) 54", "b) 56", "c) 58", "d) 60"],
            answer: 0
        },
        {
            question: "What is the next number in the sequence: 2, 4, 6, 8, ___?",
            options: ["a) 9", "b) 10", "c) 11", "d) 12"],
            answer: 1
        },
        {
            question: "Which of the following is a prime number?",
            options: ["a) 4", "b) 6", "c) 7", "d) 9"],
            answer: 2
        },
        {
            question: "What is the value of π (pi) approximately?",
            options: ["a) 3.12", "b) 3.14", "c) 3.16", "d) 3.18"],
            answer: 1
        },
        {
            question: "What is the area of a rectangle with length 5 and width 3?",
            options: ["a) 8", "b) 15", "c) 10", "d) 18"],
            answer: 1
        },
        {
            question: "What is 8 squared (8²)?",
            options: ["a) 16", "b) 48", "c) 64", "d) 72"],
            answer: 2
        },
        {
            question: "What is 0.5 as a fraction?",
            options: ["a) 1/2", "b) 1/3", "c) 1/4", "d) 2/3"],
            answer: 0
        },
        {
            question: "What is the sum of angles in a triangle?",
            options: ["a) 90°", "b) 180°", "c)  270°", "d)  360°"],
            answer: 1
        },
        {
            question: "Which shape has 4 equal sides and 4 right angles?",
            options: ["a) Rectangle", "b) Square", "c) Triangle", "d)  Circle"],
            answer: 1
        },
    ],
    iQ: [
        {
            question: "Agar 3 log 3 din mein 3 kaam karte hain, toh 6 log kitne din mein 6 kaam karenge?",
            options: ["3", "6", "4", "2"],
            answer: 0
        },
        {
            question: "Agar A ka age B se 4 saal zyada hai, aur B ka age 10 saal hai, toh A ka age kya hoga?",
            options: [
                "16", "15", "14", "12"
            ],
            answer: 2
        },
        {
            question: "Ek ghante mein 60 km ki speed se ek gadi chalti hai. 2 ghante mein woh kitni doori tay karegi?",
            options: [
                "120 km", "150 km", "140 km", "1200 km"
            ],
            answer: 0
        },
        {
            question: "A, B, C teen dost hain. Agar A 5 din mein kaam karta hai, B 10 din mein, aur C 15 din mein, toh sab milkar kitne din mein kaam poora karenge?",
            options: [
                "3 days", "8 days", "4 days", "12 days"
            ],
            answer: 0
        },
        {
            question: "Agar 2, 4, 8, 16, ... sequence chal raha hai, toh agli value kya hogi?",
            options: [
                "33", "32", "34", "36"
            ],
            answer: 1
        },
    ],
};


// Variables
let currentTopic = null;
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 15;
let username = "";

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const leaderboardDiv = document.getElementById('leaderboard');

const usernameInput = document.getElementById('username');
const topicSelect = document.getElementById('topic-select');
const startBtn = document.getElementById('start-btn');

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const timerEl = document.getElementById('time');

const resultEl = document.getElementById('result');
const fireworks = document.getElementById('fireworks');
const sadAnimation = document.getElementById('sad-animation');
const restartBtn = document.getElementById('restart-btn');

const leaderboardList = document.getElementById('leaderboard-list');

const cheerSound = document.getElementById('cheer-sound');
const loseSound = document.getElementById('lose-sound');

const darkToggle = document.getElementById('dark-toggle');

// Dark Mode Toggle
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
}

// Start Quiz
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    username = usernameInput.value.trim();
    currentTopic = topicSelect.value;

    if (!username) {
        alert("Please enter your name!");
        return;
    }
    if (!currentTopic) {
        alert("Please select a topic!");
        return;
    }

    resetQuiz();
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    loadQuestion();

    document.getElementById('container').style.animation = 'none';
    setTimeout(() => {
        document.getElementById('container').style.animation = 'slideUp 0.6s ease-out';
    }, 10);
}

function resetQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    clearInterval(timerInterval);
}

function loadQuestion() {
    clearInterval(timerInterval);
    timeLeft = 15;
    timerEl.textContent = timeLeft;

    const questionObj = quizData[currentTopic][currentQuestionIndex];
    questionEl.textContent = `${currentQuestionIndex + 1}. ${questionObj.question}`;

    optionsEl.innerHTML = '';
    questionObj.options.forEach((opt, i) => {
        const label = document.createElement('label');
        label.classList.add('option');
        label.innerHTML = `<input type="radio" name="answer" value="${i}"> ${opt}`;
        optionsEl.appendChild(label);
    });

    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            nextQuestion(false);
        }
    }, 1000);
}

nextBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }
    nextQuestion(parseInt(selectedOption.value) === quizData[currentTopic][currentQuestionIndex].answer);
});

function nextQuestion(isCorrect) {
    clearInterval(timerInterval);

    const options = document.querySelectorAll('#options label');
    const correctIndex = quizData[currentTopic][currentQuestionIndex].answer;

    options.forEach((option, index) => {
        if (index === correctIndex) {
            option.classList.add('correct-answer');
        } else if (option.querySelector('input').checked && !isCorrect) {
            option.classList.add('wrong-answer');
        }
    });

    // Remove classes after animation
    setTimeout(() => {
        options.forEach(option => {
            option.classList.remove('correct-answer', 'wrong-answer');
        });
        if (isCorrect) score++;

        currentQuestionIndex++;

        if (currentQuestionIndex < quizData[currentTopic].length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

function showResult() {
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';

    const totalQuestions = quizData[currentTopic].length;
    const percentage = Math.round((score / totalQuestions) * 100);
    const passed = percentage >= 60;

    resultEl.innerHTML = `
                <h1>Well done, ${username}!</h1>
                <h3>Your Score: ${score} / ${totalQuestions}</h3>
                <h3>Percentage: ${percentage}%</h3>
                <h3>Status: <strong>${passed ? "Passed 🎉" : "Failed 😞"}</strong></h3>
            `;

    if (passed) {
        fireworks.style.display = 'block';
        sadAnimation.style.display = 'none';
        cheerSound.play().catch(e => console.log("Audio error:", e));
    } else {
        fireworks.style.display = 'none';
        sadAnimation.style.display = 'block';
        loseSound.play().catch(e => console.log("Audio error:", e));
    }

    saveScoreToLeaderboard();
    showLeaderboard();
}

function saveScoreToLeaderboard() {
    const percentage = Math.round((score / quizData[currentTopic].length) * 100);
    let leaderboard = JSON.parse(localStorage.getItem('quiz_leaderboard')) || [];

    leaderboard.push({
        name: username,
        score: score,
        total: quizData[currentTopic].length,
        percentage: percentage,
        topic: currentTopic,
        date: new Date().toLocaleDateString()
    });

    leaderboard.sort((a, b) => b.percentage - a.percentage);
    leaderboard = leaderboard.slice(0, 5);

    localStorage.setItem('quiz_leaderboard', JSON.stringify(leaderboard));
}

function showLeaderboard() {
    leaderboardDiv.style.display = 'block';
    leaderboardList.innerHTML = '';

    const leaderboard = JSON.parse(localStorage.getItem('quiz_leaderboard')) || [];

    leaderboard.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
                    <strong>${index + 1}. ${item.name}</strong>
                    <span>${item.percentage}% (${item.score}/${item.total})</span>
                    <small>${item.topic} • ${item.date}</small>
                `;
        leaderboardList.appendChild(li);
    });
}

restartBtn.addEventListener('click', () => {
    resultScreen.style.display = 'none';
    leaderboardDiv.style.display = 'none';
    startScreen.style.display = 'block';
});

// Add click animation to all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});