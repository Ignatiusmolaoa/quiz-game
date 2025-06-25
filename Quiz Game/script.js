const allQuestions = {
  general: [
    {
      question: "What is the capital of South Africa?",
      answers: [
        { text: "Pretoria", correct: true },
        { text: "Cape Town", correct: false },
        { text: "Johannesburg", correct: false }
      ]
    },
    {
      question: "How many continents are there?",
      answers: [
        { text: "7", correct: true },
        { text: "6", correct: false },
        { text: "5", correct: false }
      ]
    },
    {
      question: "What color is the sky on a clear day?",
      answers: [
        { text: "Blue", correct: true },
        { text: "Red", correct: false },
        { text: "Purple", correct: false }
      ]
    },
    {
      question: "Which direction does the sun rise from?",
      answers: [
        { text: "East", correct: true },
        { text: "West", correct: false },
        { text: "North", correct: false }
      ]
    },
    {
      question: "Which is the largest ocean?",
      answers: [
        { text: "Pacific", correct: true },
        { text: "Atlantic", correct: false },
        { text: "Indian", correct: false }
      ]
    },
    {
      question: "What do bees produce?",
      answers: [
        { text: "Honey", correct: true },
        { text: "Butter", correct: false },
        { text: "Milk", correct: false }
      ]
    },
    {
      question: "What shape has three sides?",
      answers: [
        { text: "Triangle", correct: true },
        { text: "Square", correct: false },
        { text: "Hexagon", correct: false }
      ]
    },
    {
      question: "How many legs does a spider have?",
      answers: [
        { text: "8", correct: true },
        { text: "6", correct: false },
        { text: "10", correct: false }
      ]
    },
    {
      question: "What fruit is yellow and curved?",
      answers: [
        { text: "Banana", correct: true },
        { text: "Pineapple", correct: false },
        { text: "Orange", correct: false }
      ]
    },
    {
      question: "What gas do we breathe in to survive?",
      answers: [
        { text: "Oxygen", correct: true },
        { text: "Carbon Dioxide", correct: false },
        { text: "Helium", correct: false }
      ]
    }
  ],

  math: [
    {
      question: "What is 12 + 8?",
      answers: [
        { text: "20", correct: true },
        { text: "18", correct: false },
        { text: "21", correct: false }
      ]
    },
    {
      question: "What is 5 x 5?",
      answers: [
        { text: "25", correct: true },
        { text: "15", correct: false },
        { text: "30", correct: false }
      ]
    },
    {
      question: "What is 100 / 10?",
      answers: [
        { text: "10", correct: true },
        { text: "5", correct: false },
        { text: "20", correct: false }
      ]
    },
    {
      question: "What is the square root of 81?",
      answers: [
        { text: "9", correct: true },
        { text: "8", correct: false },
        { text: "7", correct: false }
      ]
    },
    {
      question: "What is 15 - 7?",
      answers: [
        { text: "8", correct: true },
        { text: "7", correct: false },
        { text: "6", correct: false }
      ]
    },
    {
      question: "What is 2³?",
      answers: [
        { text: "8", correct: true },
        { text: "6", correct: false },
        { text: "4", correct: false }
      ]
    },
    {
      question: "What is 50% of 200?",
      answers: [
        { text: "100", correct: true },
        { text: "50", correct: false },
        { text: "75", correct: false }
      ]
    },
    {
      question: "What is 7 x 6?",
      answers: [
        { text: "42", correct: true },
        { text: "36", correct: false },
        { text: "48", correct: false }
      ]
    },
    {
      question: "What is 9 + 10?",
      answers: [
        { text: "19", correct: true },
        { text: "21", correct: false },
        { text: "18", correct: false }
      ]
    },
    {
      question: "What is 30 / 5?",
      answers: [
        { text: "6", correct: true },
        { text: "5", correct: false },
        { text: "7", correct: false }
      ]
    }
  ],

  history: [
    {
      question: "Who was the first President of South Africa after apartheid?",
      answers: [
        { text: "Nelson Mandela", correct: true },
        { text: "Jacob Zuma", correct: false },
        { text: "Thabo Mbeki", correct: false }
      ]
    },
    {
      question: "In what year did World War II end?",
      answers: [
        { text: "1945", correct: true },
        { text: "1939", correct: false },
        { text: "1950", correct: false }
      ]
    },
    {
      question: "What ancient empire built the pyramids?",
      answers: [
        { text: "Egyptians", correct: true },
        { text: "Romans", correct: false },
        { text: "Greeks", correct: false }
      ]
    },
    {
      question: "Who discovered America?",
      answers: [
        { text: "Christopher Columbus", correct: true },
        { text: "Leif Erikson", correct: false },
        { text: "Ferdinand Magellan", correct: false }
      ]
    },
    {
      question: "What war was fought between the North and South of the U.S.?",
      answers: [
        { text: "Civil War", correct: true },
        { text: "World War I", correct: false },
        { text: "Revolutionary War", correct: false }
      ]
    },
    {
      question: "Who was the first emperor of Rome?",
      answers: [
        { text: "Augustus", correct: true },
        { text: "Julius Caesar", correct: false },
        { text: "Nero", correct: false }
      ]
    },
    {
      question: "When was the Berlin Wall torn down?",
      answers: [
        { text: "1989", correct: true },
        { text: "1991", correct: false },
        { text: "1985", correct: false }
      ]
    },
    {
      question: "What was the name of Hitler’s book?",
      answers: [
        { text: "Mein Kampf", correct: true },
        { text: "My War", correct: false },
        { text: "Final Solution", correct: false }
      ]
    },
    {
      question: "What country used to be called Persia?",
      answers: [
        { text: "Iran", correct: true },
        { text: "Iraq", correct: false },
        { text: "India", correct: false }
      ]
    },
    {
      question: "Where did the Renaissance begin?",
      answers: [
        { text: "Italy", correct: true },
        { text: "France", correct: false },
        { text: "Germany", correct: false }
      ]
    }
  ],

  science: [
    {
      question: "What planet is known as the Red Planet?",
      answers: [
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false }
      ]
    },
    {
      question: "What gas do plants absorb?",
      answers: [
        { text: "Carbon Dioxide", correct: true },
        { text: "Oxygen", correct: false },
        { text: "Nitrogen", correct: false }
      ]
    },
    {
      question: "What is the chemical symbol for water?",
      answers: [
        { text: "H2O", correct: true },
        { text: "O2", correct: false },
        { text: "CO2", correct: false }
      ]
    },
    {
      question: "How many planets are in our solar system?",
      answers: [
        { text: "8", correct: true },
        { text: "9", correct: false },
        { text: "7", correct: false }
      ]
    },
    {
      question: "What organ pumps blood through the body?",
      answers: [
        { text: "Heart", correct: true },
        { text: "Liver", correct: false },
        { text: "Lungs", correct: false }
      ]
    },
    {
      question: "What part of the plant makes food?",
      answers: [
        { text: "Leaf", correct: true },
        { text: "Root", correct: false },
        { text: "Stem", correct: false }
      ]
    },
    {
      question: "What’s the hardest natural substance?",
      answers: [
        { text: "Diamond", correct: true },
        { text: "Iron", correct: false },
        { text: "Steel", correct: false }
      ]
    },
    {
      question: "Which planet is the largest?",
      answers: [
        { text: "Jupiter", correct: true },
        { text: "Mars", correct: false },
        { text: "Earth", correct: false }
      ]
    },
    {
      question: "What do humans breathe in?",
      answers: [
        { text: "Oxygen", correct: true },
        { text: "Helium", correct: false },
        { text: "Nitrogen", correct: false }
      ]
    },
    {
      question: "What causes rain?",
      answers: [
        { text: "Condensation", correct: true },
        { text: "Evaporation", correct: false },
        { text: "Photosynthesis", correct: false }
      ]
    }
  ],

  anime: [
    {
      question: "Who is the main character of Naruto?",
      answers: [
        { text: "Naruto Uzumaki", correct: true },
        { text: "Sasuke Uchiha", correct: false },
        { text: "Kakashi", correct: false }
      ]
    },
    {
      question: "In Dragon Ball Z, who kills Frieza the second time?",
      answers: [
        { text: "Future Trunks", correct: true },
        { text: "Goku", correct: false },
        { text: "Vegeta", correct: false }
      ]
    },
    {
      question: "What’s the name of Luffy’s pirate crew?",
      answers: [
        { text: "Straw Hat Pirates", correct: true },
        { text: "Blackbeard Pirates", correct: false },
        { text: "Red Hair Pirates", correct: false }
      ]
    },
    {
      question: "What anime has a notebook that kills?",
      answers: [
        { text: "Death Note", correct: true },
        { text: "Bleach", correct: false },
        { text: "Tokyo Ghoul", correct: false }
      ]
    },
    {
      question: "Which anime has 'Titan' in the name?",
      answers: [
        { text: "Attack on Titan", correct: true },
        { text: "Titan Slayer", correct: false },
        { text: "Titan Ball", correct: false }
      ]
    },
    {
      question: "What is the main goal of Gon in Hunter x Hunter?",
      answers: [
        { text: "Find his father", correct: true },
        { text: "Defeat Hisoka", correct: false },
        { text: "Rule the world", correct: false }
      ]
    },
    {
      question: "Who is the strongest Uchiha?",
      answers: [
        { text: "Madara", correct: true },
        { text: "Sasuke", correct: false },
        { text: "Itachi", correct: false }
      ]
    },
    {
      question: "What anime has a boy with a cursed finger?",
      answers: [
        { text: "Jujutsu Kaisen", correct: true },
        { text: "Bleach", correct: false },
        { text: "Tokyo Revengers", correct: false }
      ]
    },
    {
      question: "In Demon Slayer, what’s Tanjiro’s sister’s name?",
      answers: [
        { text: "Nezuko", correct: true },
        { text: "Mitsuri", correct: false },
        { text: "Shinobu", correct: false }
      ]
    },
    {
      question: "Who is known as the 'Copy Ninja'?",
      answers: [
        { text: "Kakashi Hatake", correct: true },
        { text: "Obito Uchiha", correct: false },
        { text: "Minato", correct: false }
      ]
    }
  ]
};


let currentQuestions = [];
let currentIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const categoryContainer = document.getElementById("category-container");

document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    startGame(category);
  });
});

function startGame(category) {
  categoryContainer.style.display = "none";
  questionContainer.style.display = "block";
  nextButton.style.display = "none";
  score = 0;
  currentQuestions = shuffle([...allQuestions[category]]).slice(0, 10);
  currentIndex = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = currentQuestions[currentIndex];
  questionElement.innerText = currentQuestion.question;

  const shuffledAnswers = shuffle([...currentQuestion.answers]);

  shuffledAnswers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.classList.add("btn");
    if (answer.correct) {
      btn.dataset.correct = answer.correct;
    }
    btn.addEventListener("click", selectAnswer);
    answerButtons.appendChild(btn);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";

  if (correct) score++;

  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct === "true");
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function setStatusClass(element, correct) {
  element.classList.add(correct ? "correct" : "wrong");
}

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

function endQuiz() {
  resetState();
  questionElement.innerText = `🎉 You got ${score} out of 10 correct!`;
  nextButton.innerText = "Restart";
  nextButton.style.display = "block";
  nextButton.onclick = () => location.reload();
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
