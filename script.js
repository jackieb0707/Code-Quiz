
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById('next-btn')
const questtionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonElement = document.getElementById("answer-button")

startButton.addEventListener("click", startGame)

nextButton.addEventListener("click", () =>{
    currentQuestionsIndex++
    setnextQuestion()

})

function startGame (){
    startButton.classList.add("hide")
    shuffleQuestions=question.sort(() =>Math.random() -0.5)
    currentQuestionsIndex=0;
    questtionContainerElement.classList.remove("hide")
    setnextQuestion()
    quizScore=0
}

function setnextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answers); {
        const button = document.createdelement("button")
    button.innerText=answers.text;
    button.classList.add("btn")
    if(answers.correct) {
        button.dataset.correct=answers.correct
    }
    button.addEventListener("click",selectedAnswer)
    answerButtonElement.appendChild(button)
    }

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while(answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild)
}
}
function selctAnswer(e){
    const selectedButton=e.target
const correct = selectedButton.dataset.correct

setStatusClass(document.body,correct)
   Array.from(answerButtonElement.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct)
   })
     if(shuffleQuestions.length > currentQuestionsIndex +1){
        nextButton.classList.remove("hide")
     } else {
        startButton.innerText ="restart"
        startButton.classList.remove("hide")
     }
     if(selectedButton.dataset = correct){
        quizScore++
     }
     document.getElementById("right-answer").innerHTML=quizScore
     }


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("correct")
    }
}

function clearStatusClass (element) {
    element.classList.remove ("correct")
    element.classList.remove ("wrong")
}


//
let shuffleQuestions, currentQuestionsIndex;
let quizScore = 0;
let justTime = 60;
let index =0;

const questions = [ 
    {
    question: "what does (fuction) mean?",
    answers: [
        { text: "preforms a task", correct: true },
        { text: "help you move around", correct: false },
        { text: "its only for html", correct: false },
        { text: "has no actual value", correct: false }

    ]
},
{
    question: "what does (fuction) mean?",
    answers: [
        { text: "preforms a task", correct: true },
        { text: "help you move around", correct: false },
        { text: "its only for html", correct: false },
        { text: "has no actual value", correct: false }

    ]
},
{
    question: "what does (fuction) mean?",
    answers: [
        { text: "preforms a task", correct: true },
        { text: "help you move around", correct: false },
        { text: "its only for html", correct: false },
        { text: "has no actual value", correct: false }

    ]
},
{
    question: "what does (fuction) mean?",
    answers: [
        { text: "preforms a task", correct: true },
        { text: "help you move around", correct: false },
        { text: "its only for html", correct: false },
        { text: "has no actual value", correct: false }

    ]
}
]

var startQuiz = function () {
 startTimer ()
displayQuestions ()
}
startButton.addEventListener("click", startQuiz)
function startTimer () {
var timer = setInterval(function () {
    justTime = justTime - 1
    countdown = document.getElementById("countdown")
    countdown.textContent = justTime;
}, 1000)
}
function displayQuestions (){
    var question=questions [index]
    answer1 = document.getElementById("answer1")
    answer2 = document.getElementById("answer2")
    answer3 = document.getElementById("answer3")
    answer4 = document.getElementById("answer4")
    answer1.textContent = question.answers[0].text
    answer2.textContent = question.answers[1].text
    answer3.textContent = question.answers[2].text
    answer4.textContent = question.answers[3].text
    questionEl = document.getElementById("questions")
    questionEl.textContent =question.question
    
}

}
