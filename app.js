//Question
const questionText = document.getElementById("question");
//AnswerPart
let answerParts = document.getElementsByClassName("answerPart");
//NextQuestion Button
const nextBtn = document.getElementById("nextBtn");
//Queue
const firstNum = document.getElementById("firstNum");
//GameBox
const gameBox = document.getElementById("gameBox");
//Final Result
const finalResult = document.getElementById("finalResult");
//CorrectNum
const correctNumber = document.getElementById("correctNum");
//Restart Button
const restartBtn = document.getElementById("restart");


//Quession Object

const questions = [
   {
       question: 'Which of them is different?',
       answers: ['apple','chicken', 'horse', 'lion'],
       true: 'apple',
   },
   {
       question: 'Which is fruit?',
       answers: ['home', 'pomegranate', 'meat', 'water'],
       true: 'pomegranate',
   },
   {
       question: 'Which is front end language?',
       answers: ['C', 'Java', 'C#', 'JavaScript'],
       true: 'JavaScript',
   },
   {
       question: 'Which is JavaScript framework?',
       answers: ['Django', 'React', 'Laravel', 'TypeScript'],
       true: 'React',
   },
   {
       question: 'Which year is JavaScript released in?',
       answers: [1990, 1995, 2002, 2010],
       true: 1995,
   },
   {
       question: 'What year is Pyhton released in?',
       answers: [1990, 2000, 2010, 1998],
       true: 1990,
   },
   {
       question: 'Which platform is JavaScript so popular in?',
       answers: ['Android', 'Web', 'Ios', 'Mobile'],
       true: 'Web',
   },
   {
       question: 'Which is popular gaming language?',
       answers: ['JavaScript', 'C++', 'Java', 'Kotlin'],
       true: 'C++',
   },
   {
       question: 'Which is animal?',
       answers: ['dog', 'apple', 'orange', 'banana'],
       true: 'dog',
   },
   {
       question: 'What is 20 + 30',
       answers: [50, 80, 100, 90],
       true: 50,
   },
   {
       question: 'Finished',
       answers: [1,2,3,4],
       true: 1,
   },
];



let queue = 0;
questionText.innerHTML = questions[queue].question;

let numQueue = 1;
firstNum.innerHTML = numQueue;

let correctNum = 0

let i, arr;
for(i = 0; i < questions[queue].answers.length; i++) {
    answerParts[i].innerHTML = questions[queue].answers[i];
}

arr = [...answerParts];
for(let j = 0; j < arr.length; j++) {
    arr[j].addEventListener("click", function() {
        if(questions[queue].answers[j] === questions[queue].true) {
            arr[j].classList.add('true');
            correctNum += 1;
        }
        else {
            arr[j].classList.add('false');
        }
    });
}




nextBtn.addEventListener("click", function() {
    for(let y = 0; y < arr.length; y++) {
        arr[y].classList.remove('true');
        arr[y].classList.remove('false');
    }
    queue++;
    questionText.innerHTML = questions[queue].question;
    for(i = 0; i < questions[queue].answers.length; i++) {
        answerParts[i].innerHTML = questions[queue].answers[i];
    }


    numQueue++;
    firstNum.innerHTML = numQueue;

     if(numQueue === 10) {
        nextBtn.addEventListener("click", function() {
            gameBox.style.display = 'none';
            finalResult.style.display = 'flex';
            correctNumber.innerHTML = correctNum;
        });
    }

});



