"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true});

const inputNum = prompt("Enter the number: ");

console.log(`You have entered ${inputNum}`);

// console.log(`The binary equivlent of ${inputNum} is: ${convertToBinary(inputNum)}`);

convertToBinary( inputNum );

function convertToBinary ( decimalNum ) {

    const remainderArray = [];

    let quotient = decimalNum;

    let binaryNum = 0;

    while ( quotient !== 0 ) {

        remainderArray.push(decimalNum % 2);
        
        quotient = decimalNum / 2 ;

    };

    while ( remainderArray.length !== 0 ) {

        binaryNum = binaryNum * 10 + remainderArray.pop();
    };

    // return binaryNum;

    console.log(binaryNum);

};