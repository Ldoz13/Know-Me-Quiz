var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name? ");
console.log(
  "Welcome " + userName + " ! We will be playing DO YOU KNOW ELDHOSE?"
);
var scoreof = 0;
var questionAnswer = [
  {
    question:
      "What is my favourite dessert?   a) Ice cream  b) Kulfi  c) Brownie  d) Gulab Jamun  ",
    answerof: "c",
  },
  {
    question:
      "What is my bike's colour?   a) Black  b) Blue  c) Red  d) White    ",
    answerof: "a",
  },
  {
    question:
      "Which is my hometown ?   a) Bangalore  b) Kochi  c) Delhi d) Mumbai    ",
    answerof: "b",
  },
  {
    question:
      "What is my Job?  a) Accountant b) Lawyer  c) Scientist  d) Driver   ",
    answerof: "c",
  },
  {
    question:
      "What is my qualification?   a) Masters b) Bachelors  c) Diploma d) phD    ",
    answerof: "a",
  },
];

for (var index = 0; index < questionAnswer.length; index++) {
  var userAnswer = readlineSync.question(questionAnswer[index].question);
  {
    if (userAnswer === questionAnswer[index].answerof) {
      scoreof++;
      console.log("Correct answer! Your score = " + scoreof);
    } else {
      console.log("Wrong Answer :(");
    }
  }
}
console.log(
  "-------------------------------------------------------------------------"
);
console.log("Your final score is " + scoreof);
