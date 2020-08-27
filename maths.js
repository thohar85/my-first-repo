
let questionBank = [
  {question: "1 x 1", answer: 1},
  {question: "1 x 2", answer: 2},
  {question: "1 x 3", answer: 3},
  {question: "1 x 4", answer: 4},
  {question: "1 x 5", answer: 5},
  {question: "1 x 6", answer: 6},
  {question: "1 x 7", answer: 7},
  {question: "1 x 8", answer: 8},
  {question: "1 x 9", answer: 9},
  {question: "1 x 10", answer: 10},
  {question: "1 x 11", answer: 11},
  {question: "1 x 12", answer: 12},

  {question: "2 x 1", answer: 2},
  {question: "2 x 2", answer: 4},
  {question: "2 x 3", answer: 6},
  {question: "2 x 4", answer: 8},
  {question: "2 x 5", answer: 10},
  {question: "2 x 6", answer: 12},
  {question: "2 x 7", answer: 14},
  {question: "2 x 8", answer: 16},
  {question: "2 x 9", answer: 18},
  {question: "2 x 10", answer: 20},
  {question: "2 x 11", answer: 22},
  {question: "2 x 12", answer: 24},

  {question: "3 x 1", answer: 3},
  {question: "3 x 2", answer: 6},
  {question: "3 x 3", answer: 9},
  {question: "3 x 4", answer: 12},
  {question: "3 x 5", answer: 15},
  {question: "3 x 6", answer: 18},
  {question: "3 x 7", answer: 21},
  {question: "3 x 8", answer: 24},
  {question: "3 x 9", answer: 27},
  {question: "3 x 10", answer: 30},
  {question: "3 x 11", answer: 33},
  {question: "3 x 12", answer: 36},
 
  {question: "4 x 1", answer: 4},
  {question: "4 x 2", answer: 8},
  {question: "4 x 3", answer: 12},
  {question: "4 x 4", answer: 16},
  {question: "4 x 5", answer: 20},
  {question: "4 x 6", answer: 24},
  {question: "4 x 7", answer: 28},
  {question: "4 x 8", answer: 32},
  {question: "4 x 9", answer: 36},
  {question: "4 x 10", answer: 40},
  {question: "4 x 11", answer: 44},
  {question: "4 x 12", answer: 48},

  {question: "5 x 1", answer: 5},
  {question: "5 x 2", answer: 10},
  {question: "5 x 3", answer: 15},
  {question: "5 x 4", answer: 20},
  {question: "5 x 5", answer: 25},
  {question: "5 x 6", answer: 30},
  {question: "5 x 7", answer: 35},
  {question: "5 x 8", answer: 40},
  {question: "5 x 9", answer: 45},
  {question: "5 x 10", answer: 50},
  {question: "5 x 11", answer: 55},
  {question: "5 x 12", answer: 60},

  {question: "6 x 1", answer: 6},
  {question: "6 x 2", answer: 12},
  {question: "6 x 3", answer: 18},
  {question: "6 x 4", answer: 24},
  {question: "6 x 5", answer: 30},
  {question: "6 x 6", answer: 36},
  {question: "6 x 7", answer: 42},
  {question: "6 x 8", answer: 48},
  {question: "6 x 9", answer: 54},
  {question: "6 x 10", answer: 60},
  {question: "6 x 11", answer: 66},
  {question: "6 x 12", answer: 72},

  {question: "7 x 1", answer: 7},
  {question: "7 x 2", answer: 14},
  {question: "7 x 3", answer: 21},
  {question: "7 x 4", answer: 28},
  {question: "7 x 5", answer: 35},
  {question: "7 x 6", answer: 42},
  {question: "7 x 7", answer: 49},
  {question: "7 x 8", answer: 56},
  {question: "7 x 9", answer: 63},
  {question: "7 x 10", answer: 70},
  {question: "7 x 11", answer: 77},
  {question: "7 x 12", answer: 84},

  {question: "8 x 1", answer: 8},
  {question: "8 x 2", answer: 16},
  {question: "8 x 3", answer: 24},
  {question: "8 x 4", answer: 32},
  {question: "8 x 5", answer: 40},
  {question: "8 x 6", answer: 48},
  {question: "8 x 7", answer: 56},
  {question: "8 x 8", answer: 64},
  {question: "8 x 9", answer: 72},
  {question: "8 x 10", answer: 80},
  {question: "8 x 11", answer: 88},
  {question: "8 x 12", answer: 96},

  {question: "9 x 1", answer: 9},
  {question: "9 x 2", answer: 18},
  {question: "9 x 3", answer: 27},
  {question: "9 x 4", answer: 36},
  {question: "9 x 5", answer: 45},
  {question: "9 x 6", answer: 54},
  {question: "9 x 7", answer: 63},
  {question: "9 x 8", answer: 72},
  {question: "9 x 9", answer: 81},
  {question: "9 x 10", answer: 90},
  {question: "9 x 11", answer: 99},
  {question: "9 x 12", answer: 108},

  {question: "10 x 1", answer: 10},
  {question: "10 x 2", answer: 20},
  {question: "10 x 3", answer: 30},
  {question: "10 x 4", answer: 40},
  {question: "10 x 5", answer: 50},
  {question: "10 x 6", answer: 60},
  {question: "10 x 7", answer: 70},
  {question: "10 x 8", answer: 80},
  {question: "10 x 9", answer: 90},
  {question: "10 x 10", answer: 100},
  {question: "10 x 11", answer: 110},
  {question: "10 x 12", answer: 120},

  {question: "11 x 1", answer: 11},
  {question: "11 x 2", answer: 22},
  {question: "11 x 3", answer: 33},
  {question: "11 x 4", answer: 44},
  {question: "11 x 5", answer: 55},
  {question: "11 x 6", answer: 66},
  {question: "11 x 7", answer: 77},
  {question: "11 x 8", answer: 88},
  {question: "11 x 9", answer: 99},
  {question: "11 x 10", answer: 110},
  {question: "11 x 11", answer: 121},
  {question: "11 x 12", answer: 132},

  {question: "12 x 1", answer: 12},
  {question: "12 x 2", answer: 23},
  {question: "12 x 3", answer: 36},
  {question: "12 x 4", answer: 48},
  {question: "12 x 5", answer: 60},
  {question: "12 x 6", answer: 72},
  {question: "12 x 7", answer: 84},
  {question: "12 x 8", answer: 96},
  {question: "12 x 9", answer: 108},
  {question: "12 x 10", answer: 120},
  {question: "12 x 11", answer: 132},
  {question: "12 x 12", answer: 144}
]

let selectedNumbers = []
let questionsThatHaveBeenSelected = []
let selectedRandomNumber = 0

let levelOne = 0

function setGameLevel(lvl) {

  levelOne = lvl * 10

  console.log(levelOne)

  document.querySelector("#start").style.display = "none"
  document.querySelector("#game").style.display = "block"
  document.querySelector("#result").style.display = "none"
}

const numbers = document.querySelectorAll(".number")
//console.log(numbers)

for (number of numbers) {   
  number.addEventListener('click',(e) => {
    //console.log(e.target.innerHTML)
   selectedNumbers.push(e.target.innerHTML)

   document.querySelector(".div15").innerHTML = selectedNumbers.join("")

  })
 }
 
let randomNumber = function() {

  let rand = 0

  do {
    rand = Math.floor((Math.random() * questionBank.length));
  } while (questionsThatHaveBeenSelected.includes(rand))

  selectedRandomNumber = rand

  return rand

}


function productCalculation(num1,num2){
  return num1*num2
}

function checkAnswer(answer) {

  let total = selectedNumbers.join("")

  if (total == questionBank[answer].answer) {
    document.querySelector(".div15").style.backgroundColor = "green"
    //document.querySelector(".div15").innerHTML = "You are correct!"
  } else {
    document.querySelector(".div15").style.backgroundColor = "red"
    //document.querySelector(".div15").innerHTML = "Wrong!"
  }

  questionsThatHaveBeenSelected.push({ "answer" : selectedRandomNumber, "isCorrect" : total == questionBank[answer].answer})

  if ( questionsThatHaveBeenSelected.length < levelOne ) {
    
    setTimeout(() => {
      resetState()
      loadRandomQuestion(randomNumber())
    }, 2000)

  } else {

    let tempArray = []

    for(let x of questionsThatHaveBeenSelected) {
      if (x.isCorrect === true) {
        tempArray.push(x)
      }
    } 

    document.querySelector("#start").style.display = "none"
    document.querySelector("#game").style.display = "none"
    document.querySelector("#result").style.display = "block"

    document.querySelector("#result").innerHTML = `Game is done. You got ${tempArray.length} out of ${levelOne} correct`
    

  }

  
  console.log(questionsThatHaveBeenSelected)
}


function resetState() {
  selectedNumbers = []
  document.querySelector(".div15").style.color = "black"
  document.querySelector(".div15").style.backgroundColor = "white"
  document.querySelector(".div15").style.fontSize = "16"
  document.querySelector('.div15').innerHTML = "answer appears here"
}

function loadRandomQuestion(randomNumber) {
  //questionsThatHaveBeenSelected.push(randomNumber)
  document.querySelector('#question').innerHTML = questionBank[randomNumber].question
}

function loadBothQuestionAnswer(randomNumber) {

  document.querySelector("#start").style.display = "block"
  document.querySelector("#game").style.display = "none"
  document.querySelector("#result").style.display = "none"

  loadRandomQuestion(randomNumber)
}



//1 bug(not displaying right or wrong) + 2 features(display what is typing + score at the end with emoji)