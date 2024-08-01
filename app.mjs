"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true});

const inputNum = checkInputValue();

console.log(`You have entered ${inputNum}`);

let roundedOffText = "";

console.log(`The binary equivlent of ${inputNum} is: ${convertToBinary(inputNum)} ${roundedOffText}`);

function convertToBinary ( decimalNum ) {

    const decimalNumArray = String(decimalNum).split(".");

    const integer = Number(decimalNumArray[0]);

    const fraction = Number("0." + decimalNumArray[1]);

    const binaryInteger = convertToBinaryInteger(integer);

    const binaryFraction = fraction? convertToBinaryFraction(fraction) : "";  

    const binaryNum = Number(binaryInteger + "." + binaryFraction);

    fraction? roundedOffText = `(rounded-off upto 6 bits)`:roundedOffText = "";
    
    return binaryNum;
    
};

function convertToBinaryInteger ( decimalNum ) {

    if (decimalNum === 0 || decimalNum === 1) return String(decimalNum);
    
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

function checkInputValue () {

    const inputNum = prompt("Enter the number: ");

    if( inputNum < 0 || isNaN(inputNum) || inputNum == "" ) {

        console.log("Please input a decimal number greater than 0");

        return checkInputValue();

    }

    return inputNum;

};

