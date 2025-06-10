const questions = [
  {
    question: "What is 5 + 3?",
    options: ["6", "8", "10", "7"],
    answer: "8"
  },
  {
    question: "What is 9 - 4?",
    options: ["3", "5", "6", "4"],
    answer: "5"
  },
  {
    question: "What is 6 x 2?",
    options: ["12", "8", "10", "14"],
    answer: "12"
  },
  {
    question: "What is 16 ÷ 4?",
    options: ["2", "4", "5", "6"],
    answer: "4"
  }
];

let currentQuestionIndex = 0;

function startQuiz() {
  const username = document.getElementById("username").value.trim();
  if (!username) {
    alert("Please enter your name to start!");
    return;
  }

  document.querySelector(".quiz-container").classList.add("hidden");
  document.getElementById("quizSection").classList.remove("hidden");
  document.getElementById("greeting").textContent = `Hello, ${username}! Let's start the quiz.`;

  loadQuestion();
}

function loadQuestion() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const feedbackEl = document.getElementById("feedback");
  const nextBtn = document.getElementById("next-btn");

  feedbackEl.textContent = "";
  nextBtn.style.display = "none";
  optionsEl.innerHTML = "";

  const current = questions[currentQuestionIndex];
  questionEl.textContent = current.question;

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const current = questions[currentQuestionIndex];
  const feedbackEl = document.getElementById("feedback");
  const nextBtn = document.getElementById("next-btn");

  if (selected === current.answer) {
    feedbackEl.textContent = "✅ Correct!";
    feedbackEl.style.color = "lightgreen";
  } else {
    feedbackEl.textContent = `❌ Incorrect! The correct answer is ${current.answer}.`;
    feedbackEl.style.color = "#ff6666";
  }

  document.querySelectorAll(".option").forEach(btn => btn.disabled = true);
  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question-container").innerHTML = "<h2>🎉 Quiz Completed!</h2>";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("feedback").textContent = "";
  }
}
