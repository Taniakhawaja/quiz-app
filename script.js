
const questions = [
    {
        question: "Question: What is the historical name of Peshawar?        ?",
        answers: [
            { text: " Purushapura", correct: true },
            { text: "Taxila", correct: false },
            { text: "Gandhara", correct: false },
            { text: "Takshashila", correct: false },
        ]
    },
    {
        question: " Peshawar is the capital of which Pakistani province?        ?",
        answers: [
            { text: "Panjab", correct: false },
            { text: "K.P.K", correct: true },
            { text: "Sindh", correct: false },
            { text: "Balochistan", correct: false }
        ]
    },
    {
        question: " Which ancient civilization flourished in the region around Peshawar?",
        answers: [
            { text: "Ancient Greek Civilization", correct: false },
            { text: "Ancient Egyptian Civilization", correct: false },
            { text: "Mesopotamian Civilization", correct: false },
            { text: " Indus Valley Civilization", correct: true }
        ]
    },
    {
        question: "Is there any Saylani Mass IT Center in Peshawar?",
        answers: [
            { text: "Yes", correct: true },
            { text: "No", correct: false },
            { text: "May be", correct: false },
            { text: "Don't know", correct: false }
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();


function goToQuiz() {
    window.location.href = "quiz.html";
}
