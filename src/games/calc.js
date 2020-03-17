import playGame from '../index.js';
import randomNumber from '../utils.js';

const operators = ['+', '-', '*'];
const randomOperation = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator '${operator}'`);
  }
};

export default () => {
  const gameRules = 'What is the result of the expression?';
  const calcGame = () => {
    const num1 = randomNumber(1, 20);
    const num2 = randomNumber(1, 20);
    const randomOperator = operators[randomNumber(0, 2)];
    const rightAnswer = randomOperation(num1, num2, randomOperator).toString();
    const question = `${num1} ${randomOperator} ${num2}`;
    const coll = { rightAnswer, question };
    return coll;
  };
  return playGame(gameRules, calcGame);
};
