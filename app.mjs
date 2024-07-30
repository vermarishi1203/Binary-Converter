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

    const binaryInteger = convertToBinaryInteger(integer);

    const binaryFraction = convertToBinaryFraction(fraction);

    const binaryNum = Number(binaryInteger + "." + binaryFraction);

    return binaryNum;
    
};

function convertToBinaryInteger ( decimalNum ) {

    const remainderArray = [];

    let binaryNum = "";

    while ( decimalNum !== 0 ) {

        remainderArray.push(parseInt(decimalNum % 2));

        decimalNum = parseInt(decimalNum / 2);

    };

    while ( remainderArray.length !== 0 ) binaryNum = binaryNum + String(remainderArray.pop());

    return binaryNum;

};

function convertToBinaryFraction ( decimalNum ) {

    const productArray = [];

    let binaryNum = "";

    while ( decimalNum !== 0 && productArray.length !== 6 ) {

        productArray.push(Math.floor(decimalNum * 2));

        decimalNum = decimalNum * 2 - productArray[productArray.length-1];
        
    };

    while ( productArray.length !== 0 ) binaryNum = binaryNum + String(productArray.shift());

    return binaryNum;

};

