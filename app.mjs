"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true});

const inputNum = prompt("Enter the number: ");

console.log(`You have entered ${inputNum}`);

console.log(`The binary equivlent of ${inputNum} is: ${convertToBinary(inputNum)}`);

function convertToBinary ( decimalNum ) {

    const decimalNumArray = String(decimalNum).split(".");

    const integer = Number(decimalNumArray[0]);

    const fraction = Number("0." + decimalNumArray[1]);

    console.log( fraction, typeof(fraction));

    const binaryInteger = convertToBinaryInteger(integer);

    const binaryFraction = convertToBinaryFraction(fraction);

    const binaryNum = Number(String(binaryInteger) + "." + String(binaryFraction));

    return binaryNum;
    
};

function convertToBinaryInteger ( decimalNum ) {

    const remainderArray = [];

    let binaryNum = 0;

    while ( decimalNum !== 0 ) {

        remainderArray.push(parseInt(decimalNum % 2));

        decimalNum = parseInt(decimalNum / 2);

    };

    while ( remainderArray.length !== 0 ) binaryNum = binaryNum * 10 + remainderArray.pop();

    return binaryNum;

};

function convertToBinaryFraction ( decimalNum ) {

    

};