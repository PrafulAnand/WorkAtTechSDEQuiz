console.log("Welcome to Defeat SARS-COV2 challenge");
console.log("This challenge comprises of 5 questions.\nEach Correct answer gives you a score of 10.\nA wrong answer gives -10 and you can get infected with SARS-COV2\n");
const course = [{
  question: 'What is SARS-CoV2 commonly known as?',
  options: {
    a: 'Covid-19 or Coronavirus',
    b: 'Common Flu',
    c: 'Hanta Virus',
    d: 'Ebola'
  },
  correct: 'a'
},
{
  question: 'In which country SARS-CoV2 was initially found?',
  options: {
    a: 'India',
    b: 'China',
    c: 'USA',
    d: 'Africa'
  },
  correct: 'b'
},
{
  question: 'How to stay safe from SARS-COv2?',
  options: {
    a: 'Social Distancing',
    b: 'Wear mask',
    c: 'Wash your hands frequently',
    d: 'All of the above'
  },
  correct: 'd'
},
{
  question: 'Which country has the most number of active covid cases currently?',
  options: {
    a: 'USA',
    b: 'Brazil',
    c: 'China',
    d: 'India'
  },
  correct: 'a'
},
{
  question: 'How long does the novel coronavirus survive outside the body??',
  options: {
    a: 'Several hours to days',
    b: 'Upto 2 and a half weeks',
    c: 'A week in air and on surfaces',
    d: 'For several months'
  },
  correct: 'a'
}];
let score = 0;
for (const element of course) {
  console.log("\n" + element.question);
  console.log(element.options);
  const readLineSync = require('readline-sync');
  const name = readLineSync.question();
  if (name === element.correct) {
    score += 10;
    console.log("yay correct answer. Your score is " + score);
  } else {
    score -= 10;
    console.log("Wrong Answer.\nCorrect option is " + element.correct + "\nBe careful.\nYour Score is " + score)
    
  }

}
if(score == 30){
  console.log("Your Final score is " + score + "\nYou have defeated SARS-CoV2!!Stay safe and happy")
}else if(score == 20){
  console.log("Your Final score is " + score + "\nClose enough.Be extra cautious, You can get infected with SARS-CoV2 :(");
}else{
  console.log("Your Final score is " + score + "\nYou are infected. Isolate yourself and Dont worry,Take proper rest and you should be good in the next 14 days!!")
}

// const readLineSync = require('readline-sync');
// const name = readLineSync.question('What is your name?\n');
// console.log(`Hello ${name}.`);
