#! /usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

const Multiplication = "Multiplication";
const Addition = "Addition";
const Subtraction = "Subtraction";
const Division = "Division";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 1000);
  });
};

const welcome = async () => {
  const animation = chalkAnimation.rainbow("Hi Welcome To My calculator");
  await sleep();
  animation.stop();
};

const showCalculatorLogic = async () => {
  const calculatorInput = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      message:
        "Which operations you want to perform on this calculator ? please chose from below options \n",
      choices: [Multiplication, Addition, Subtraction, Division],
    },
    {
      type: "number",
      name: "number1",
      message: "Enter First Number :",
    },
    {
      type: "number",
      name: "number2",
      message: "Enter Second Number :",
    },
  ]);

  switch (calculatorInput.operator) {
    case Multiplication:
      console.log(
        `Result of Multiplication of ${calculatorInput.number1} and ${
          calculatorInput.number2
        } = ${calculatorInput.number1 * calculatorInput.number2}`
      );
      return;

    case Addition:
      console.log(
        `Result of Addition of ${calculatorInput.number1} and ${
          calculatorInput.number2
        } = ${calculatorInput.number1 + calculatorInput.number2}`
      );
      return;

    case Division:
      console.log(
        `Result of Division of ${calculatorInput.number1} and ${
          calculatorInput.number2
        } = ${calculatorInput.number1 / calculatorInput.number2}`
      );
      return;

    case Subtraction:
      console.log(
        `Result of Subtraction of ${calculatorInput.number1} and ${
          calculatorInput.number2
        } = ${calculatorInput.number1 - calculatorInput.number2}`
      );
      return;

    default:
      return;
  }
};

const promptAgainAndShowCalculator = async () => {
  do {
    await showCalculatorLogic();
    var shouldCalculatorShowAgain = await inquirer.prompt([
      {
        type: "input",
        name: "shouldCalculatorShowAgain",
        message:
          "Do you want to use calculator again press 'Y' else press 'N' :",
      },
    ]);

    if (
      shouldCalculatorShowAgain.shouldCalculatorShowAgain.toLowerCase() !== "y"
    ) {
      const endingAnimation = chalkAnimation.rainbow(
        "Thanks for using this calculator, have a nice day!"
      );

      setTimeout(() => {
        endingAnimation.stop();
      }, 1000);
    }
  } while (
    shouldCalculatorShowAgain.shouldCalculatorShowAgain.toLowerCase() === "y"
  );
};

await welcome();
promptAgainAndShowCalculator();
