import readlineSync from 'readline-sync';
import randomNumber from '../random.js';

export default (name) => {
  console.log('What is the result of the expression?');
  let rightAnswers = 0;
  const coll = ['+', '-', '*'];
  do {
    const number1 = randomNumber(1, 20);
    const number2 = randomNumber(1, 20);
    const randomOperator = coll[randomNumber(1, 3) - 1];
    const randomOperation = (num1, num2, message) => {
      switch (message) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        default:
          throw new Error(`Unknown operator '${message}'`);
      }
    };
    const rightAnswer = randomOperation(number1, number2, randomOperator);
    console.log(`Question: ${number1} ${randomOperator} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer.toString()) {
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
