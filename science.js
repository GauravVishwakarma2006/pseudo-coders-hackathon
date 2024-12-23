const questions = [
    {
        question: "What planet do we live on?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Earth", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "What do plants need to grow?",
        answers: [
            { text: "Water", correct: true },
            { text: "Chocolate", correct: false },
            { text: "Sand", correct: false },
            { text: "Cement", correct: false }
        ]
    },
    {
        question: "Which animal is known as the king of the jungle?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Lion", correct: true },
            { text: "Tiger", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "What is the hottest planet in our solar system?",
        answers: [
            { text: "Mercury", correct: false },
            { text: "Venus", correct: true },
            { text: "Mars", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What do we breathe in to live?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Helium", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
        alert("Correct! Well done.");
    } else {
        alert("Oops! That's not right.");
    }
    nextButton.classList.remove('hide');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
    } else {
        alert(`Quiz finished! Your score is ${score} out of ${questions.length}.`);
        startGame(); // Restart the game
    }
}

startGame();
