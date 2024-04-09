#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNum" },
    { message: "enter second number", type: "number", name: "secondNum" },
    { message: "choose anyone operator", type: "list", name: "operator", choices: ["Addition", "subtraction", "Multiplication", "Division"] }
]);
if (answer.operator == "Addition") {
    console.log(answer.firstNum + answer.secondNum);
}
else if (answer.operator == "subtraction") {
    console.log(answer.firstNum - answer.secondNum);
}
else if (answer.operator == "Multiplication") {
    console.log(answer.firstNum * answer.secondNum);
}
else if (answer.operator == "Division") {
    console.log(answer.firstNum / answer.secondNum);
}
else {
    console.log("please choose correct operator");
}
