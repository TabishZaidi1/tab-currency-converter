#!/usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 278,
    EUR: 0.92,
    lIRA: 32.02,
    IND: 83.29
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "PKR", "EUR", "LIRA", "IND"]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "PKR", "EUR", "LIRA", "IND"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
