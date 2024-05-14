const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ", // Idx0
  "True or false: 5 kilometer == 5000 meters? ", // Inx1
  "(5 + 3)/2 * 10 = ? ", // Idx2
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", // Idx3
  "What is the minimum crew size for the ISS? " // Idx4
];
let correctAnswers = [
  "Sally Ride", // Idx 0
  "true", // Idx 1
  "40", // Idx 2
  "Trajectory", // idx 3
  "3" // idx4
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your full name?");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let passGrade = 0;
  for (let i = 0; i < correctAnswers.length; i++){
   if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
     passGrade++;
     console.log(`Correct answers! ${passGrade} out of 5!`);
   } else {
     console.log(`Incorrect answers! ${passGrade} out of 5!`);
   }
  }

  let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.
grade = (passGrade/questions.length)*100;
if (grade >= 80) {
  console.log("Congratulations! You passed the test!");
} else {
  console.log("The test is failed! Please try again!");
}

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Welcome" + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};