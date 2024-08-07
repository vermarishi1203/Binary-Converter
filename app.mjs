"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true});

const inputNum = checkInputValue();

console.log(`You have entered ${inputNum}`);

console.log(`The binary equivlent of ${inputNum} is: ${convertToBinary(inputNum)}`);

function convertToBinary ( decimalNum ) {

    const decimalNumArray = String(decimalNum).split(".");

    const integer = Number(decimalNumArray[0]);

    const fraction = Number("0." + decimalNumArray[1]);

    const binaryInteger = convertToBinaryInteger(integer);

    const binaryFraction = fraction? convertToBinaryFraction(fraction) : "";  

    const binaryNum = Number(binaryInteger + "." + binaryFraction);
    
    return binaryNum;
    
};

function convertToBinaryInteger ( decimalNum ) {

    if (decimalNum === 0 || decimalNum === 1) return String(decimalNum);
    
    return convertToBinaryInteger( Math.floor( decimalNum / 2 )) + String( decimalNum % 2);

};

function convertToBinaryFraction ( decimalNum ) {

    if( decimalNum === 0 ) return String(decimalNum);

    return String(Math.floor(decimalNum * 2)) + convertToBinaryFraction( decimalNum * 2 - Math.floor(decimalNum * 2));

};

function checkInputValue () {

    const inputNum = prompt("Enter the number: ");

    if( inputNum < 0 || isNaN(inputNum) || inputNum == "" ) {

        console.log("Please input a decimal number greater than 0");

        return checkInputValue();

    };

    return inputNum;

};

