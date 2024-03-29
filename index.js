#! /usr/bin/env node 
import inquirer from "inquirer";
const random_number = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number between (1-10)"
    },
]);
if (answers.userguessednumber === random_number) {
    console.log("congratulations! you guess a right number..");
}
else {
    console.log("sorry! you guessed wrong number..");
}
;
