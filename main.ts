#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let myBalance = 10000;
let pinNumber = 54321;

console.log("My Current Balance is:", myBalance);


let pinCode = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin Code"
    }
])

if (pinCode.pin === pinNumber) {
    console.log("Correct Pin Code!");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please Select Operation",
                type: "list",
                choices: ["Withdraw", "Check Balance"]
            }
        ]
    )



    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt(
            {
                name: "amount",
                type: "list",
                message: "Select Your Withdrwal Amount",
                choices: ["1000", "5000", "10000", "20000"]
            }
        )

        if (amountAns.amount > myBalance) {
            console.log("Insufficeint Balance");

        }

        else {
            console.log(`Your Current Balance is: ${chalk.yellow(myBalance)} and your Withdrwal amount is: ${chalk.red(amountAns.amount)}`);
            
            console.log(`Your Remaining Balance is: ${myBalance - amountAns.amount}`);
        }

    }

    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Balance is: ${myBalance}`);

    }

}

else {
    console.log("Incorrect Pin Code");
}