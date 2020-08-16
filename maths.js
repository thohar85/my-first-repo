// const startButton = document.getElementById('start-btn')
// const nextButton = document.getElementById('next-btn')
// const questionContainerElement = document.getElementById('question-container')
// const questionElement = document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-input')

// function resetState() {
//   clearStatusClass(document.body)
//   nextButton.classList.add('hide')
//   while (answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//   }
// }

// function clearStatusClass(element) {
//   element.classList.remove('correct')
//   element.classList.remove('wrong')
// }

const numbers = document.querySelectorAll(".number")
console.log(numbers)

let selectedNumbers = []
let questionsThatHaveBeenSelected = []

for (number of numbers) {   
 number.addEventListener('click',(e) => {
   console.log(e.target.innerHTML)
  selectedNumbers.push(e.target.innerHTML)
 })
}

function productCalculation(num1,num2){
  return num1*num2
}

function checkAnswer() {

  let total = selectedNumbers.join("")

  // for (n of selectedNumbers) {
  //   total *= n // total = total * n
  // }

  console.log(total)

  return total
}


function resetState() {
  document.querySelector('#question').innerHTML = "reset"
}

function loadRandomQuestion() {

  let randomNumber = 0

  do {
    randomNumber = Math.floor((Math.random() * questionBank.length));
  } while (questionsThatHaveBeenSelected.includes(randomNumber))

  console.log(randomNumber)

  questionsThatHaveBeenSelected.push(randomNumber)

  document.querySelector('#question').innerHTML = questionBank[randomNumber].question

}

let questionBank = [
  {question: "What is 2 + 2 ?", answer: 4},
  {question: "What is 3 + 2 ?", answer: 5},
  {question: "What is 4 + 2 ?", answer: 6},
  {question: "What is 5 + 2 ?", answer: 7},
  {question: "What is 6 + 2 ?", answer: 8}
]