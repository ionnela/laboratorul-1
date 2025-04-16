// Verificăm autentificarea la încărcarea paginii
if (sessionStorage.getItem("isAuthenticated") !== "true") {
    window.location.href = "../autentificare/autentificare.html";
}

let currentQuestion = 0;
let userScore = { O: 0, C: 0, E: 0, A: 0, N: 0 };
let userName = "";

const questions = [
    /* (Same as your original questions array) */
];

function startTest() {
    const name = document.getElementById('userName').value.trim();
    if (!name) {
        alert('Te rugăm să introduci numele tău!');
        return;
    }
    userName = name;
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'flex';
    showQuestion();
}

function showQuestion() {
    /* (Same as your original showQuestion function) */
}

function selectAnswer(index) {
    /* (Same as your original selectAnswer function) */
}

function nextQuestion() {
    /* (Same as your original nextQuestion function) */
}

function updateProgress() {
    /* (Same as your original updateProgress function) */
}

function showResult() {
    /* (Same as your original showResult function) */
}

function setResultIcon(type) {
    /* (Same as your original setResultIcon function) */
}

function calculateResult() {
    /* (Same as your original calculateResult function) */
}

function renderRadarChart() {
    /* (Same as your original renderRadarChart function) */
}

function renderTraitDetails() {
    /* (Same as your original renderTraitDetails function) */
}