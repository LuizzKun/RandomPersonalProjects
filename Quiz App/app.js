const answers = document.querySelectorAll(".answer")
const question = document.querySelector(".question")
const questionCounter = document.querySelector(".question-counter")
const nextQuestion =  document.querySelector(".next")
const  previousQuestion = document.querySelector(".prev")

let currentQuestion = 0;

//creating questions data

const questions = [
    {
        question: "What does querySelector() do?",
        answers: [
            "A. Creates an HTML element",
            "B. Selects an element from the page",
            "C. Deletes an element",
            "D. Changes the page color"
        ],
        correct: "B"
    },

    {
        question: "Which keyword creates a variable that cannot be reassigned?",
        answers: [
            "A. let",
            "B. var",
            "C. const",
            "D. variable"
        ],
        correct: "C"
    },

    {
        question: "Which method adds an event listener?",
        answers: [
            "A. addEventListener()",
            "B. addEvent()",
            "C. eventListener()",
            "D. listen()"
        ],
        correct: "A"
    },

    {
        question: "Which symbol is used for strict equality?",
        answers: [
            "A. ==",
            "B. =",
            "C. ===",
            "D. !="
        ],
        correct: "C"
    },

    {
        question: "Which method adds an item to the end of an array?",
        answers: [
            "A. push()",
            "B. add()",
            "C. append()",
            "D. insert()"
        ],
        correct: "A"
    },

    {
        question: "What does DOM stand for?",
        answers: [
            "A. Data Object Model",
            "B. Document Object Model",
            "C. Document Order Method",
            "D. Data Organization Model"
        ],
        correct: "B"
    },

    {
        question: "Which keyword is used to create a function?",
        answers: [
            "A. function",
            "B. def",
            "C. func",
            "D. method"
        ],
        correct: "A"
    },

    {
        question: "What does .textContent do?",
        answers: [
            "A. Changes the CSS",
            "B. Gets or changes the text inside an element",
            "C. Creates a new element",
            "D. Deletes an element"
        ],
        correct: "B"
    },

    {
        question: "Which method removes the last item from an array?",
        answers: [
            "A. remove()",
            "B. delete()",
            "C. pop()",
            "D. last()"
        ],
        correct: "C"
    },

    {
        question: "Which loop is commonly used to go through every item in an array?",
        answers: [
            "A. forEach()",
            "B. repeat()",
            "C. loopEach()",
            "D. everyLoop()"
        ],
        correct: "A"
    }
];

//function to update the question

function showQuestion() {
  
  const current  = questions[currentQuestion];

  question.textContent  = current.question
  questionCounter.textContent = `Question ${currentQuestion + 1} of ${questions.length}`

  answers.forEach((button,index) => {
    button.textContent  = current.answers[index]
    button.classList.remove("correct","wrong");
  });
  
}

nextQuestion.addEventListener("click", () => {
  if(currentQuestion <  questions.length - 1) {
    currentQuestion++;
    showQuestion();
    
  }
})

previousQuestion.addEventListener("click", () => {
  if(currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
})

answers.forEach((button) => {
  
button.addEventListener("click", () => {

  const current = questions[currentQuestion]

  if(button.textContent.startsWith(current.correct)) {
    button.classList.add('correct')
  } else {
    button.classList.add('wrong')
  }
})


})

