const { prompt } = require("enquirer");

async function mainTask() {
    const response = await prompt({
        type: "input",
        name: "faveFruit",
        message: "What is your favourite fruit?",
    });

    const response2 = await prompt({
        type: "input",
        name: "faveVeg",
        message: "What is your favourite vegetable?",
    });

    


    console.log("promise has completed!");
    console.log("response: ", response, response2);
}

mainTask();
console.log("AFTER mainTask() was called");
