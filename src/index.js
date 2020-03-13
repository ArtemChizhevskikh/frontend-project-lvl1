import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const playGame = (name, func) => {
  let rightAnswers = 0;
  while (rightAnswers < 3) {
    const coll = func();
    console.log(`Question: ${coll.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === coll.rightAnswer) {
      console.log('Correct!');
      rightAnswers += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${coll.rightAnswer}".`);
      console.log(`Let's try again, ${name}`);
      rightAnswers = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
