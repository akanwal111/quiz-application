const questions = [
  {
    question: "Which language runs in a web browser?",
    choices: ["Java", "C", "Python", "JavaScript"],
    correctAnswer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    choices: [
      "Central Style Sheet",
      "Cascading Style Sheet",
      "Computer Style Sheet",
      "Colorful Style Sheet"
    ],
    correctAnswer: "Cascading Style Sheet"
  },
  {
    question: "What year was JavaScript created?",
    choices: ["1995", "2000", "1990", "1998"],
    correctAnswer: "1995"
  }
];

let currentIndex = 0;
let score = 0;

function loadQuestion() {
  const current = questions[currentIndex];
  document.getElementById("question").innerText = current.question;
  document.getElementById("choices").innerHTML = "";
  document.getElementById("feedback").innerText = "";

  current.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice;
    button.onclick = () => checkAnswer(choice);
    document.getElementById("choices").appendChild(button);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentIndex].correctAnswer;
  const feedback = document.getElementById("feedback");

  if (selected === correct) {
    feedback.innerText = "✅ Correct!";
    score++;
  } else {
    feedback.innerText = `❌ Wrong! Correct: ${correct}`;
  }

  currentIndex++;
  setTimeout(() => {
    if (currentIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 1500);
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").innerText = `🎉 You scored ${score} out of ${questions.length}!`;
}

window.onload = loadQuestion;
