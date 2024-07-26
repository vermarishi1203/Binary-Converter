"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true});

const inputNum = prompt("Enter the number: ");

console.log(`You have entered ${inputNum}`);
