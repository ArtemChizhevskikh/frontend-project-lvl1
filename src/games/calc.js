import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const numberOfOperators = operators.length;

const calculate = (a, b, operator) => {
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

const getGameData = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const randomOperator = operators[getRandomNumber(0, numberOfOperators - 1)];
  const rightAnswer = calculate(num1, num2, randomOperator).toString();
  const question = `${num1} ${randomOperator} ${num2}`;
  const gameData = { rightAnswer, question };
  return gameData;
};

export default () => playGame(gameDescription, getGameData);
