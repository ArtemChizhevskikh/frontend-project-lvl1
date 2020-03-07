import readlineSync from 'readline-sync';
import randomNumber from './random.js';


export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let rightAnswers = 0;
  do {
    const number = randomNumber(1, 100);
    const isEven = (num) => (num % 2) === 0;
    const rightAnswer = (isEven(number)) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
      rightAnswers += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}."`);
      console.log(`Let's try again, ${name}`);
      rightAnswers = 0;
    }
  } while (rightAnswers < 3);
  console.log(`Congratulations, ${name}!`);
};
