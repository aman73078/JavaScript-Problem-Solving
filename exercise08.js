/* 43. Check Rightmost Digits of Three Numbers
        Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.  */
const checkRightMostDigit=(num1,num2,num3)=>{
    try{
        if([num1,num2,num3].some(n => (typeof n !=='number') || (n < 0))){
            throw new Error('Only positive numbers are allowed.');
        };
        let rightMostDigitList = [];
        [num1,num2,num3].forEach(n => {
            rightMostDigitList.push(Number(String(n)[String(n).length - 1]));
        })
        let setList = new Set(rightMostDigitList);
        let result = [1,2].includes(setList.size) ? true : false;
        console.log(`Result of checkRightMostDigit : ${result}`);
    }catch(error){
        console.log(`Error of checkRightMostDigit : ${error.message || error}`);
    };
};
checkRightMostDigit(33,29,44);
checkRightMostDigit(33,29,53);
checkRightMostDigit(47,27,97);
checkRightMostDigit(47,27,-97);

/* 44. Evaluate if Integer is =20 and Less Than Another
        Write a JavaScript program that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than at least one of the other two.  */
function evaluatesInteger(num1,num2,num3){
    try{
        if([num1,num2,num3].some(n => typeof n !== 'number')){
            throw new Error('Only numbers are allowed.');
        };
        let firstCondition = [num1,num2,num3].some(n => n >= 20);
        let unique = new Set([num1,num2,num3]);
        let result = firstCondition && unique.size >=2 ? true:false;
        console.log(`Result of evaluatesInteger : ${result}`);
    }catch(error){
        console.log(`Error of evaluatesInteger : ${error.message || error}`);
    };
};
evaluatesInteger(19,35,35);
evaluatesInteger(19,35,5);
evaluatesInteger(19,15,5);
evaluatesInteger(25,25,25);

/* 45. Check if Integer is 15, or Sum/Difference is 15
        Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.  */
const checkIntergers = function(num1,num2){
    try{
        if([num1,num2].some(n => typeof n !== 'number')){
            throw new Error('Only numbers are allowed.');
        };
        let result = [num1,num2,(num1+num2), (num1 > num2 ? num1 - num2 : num2 - num1)].some(n => (n === 15));
        console.log(`Result of checkIntegers : ${result}`);
    }catch(error){
        console.log(`Error of checkIntegers : ${error.message || error}`);
    };
};
checkIntergers(15,20);
checkIntergers(10,5);
checkIntergers(11,5);
checkIntergers(20,5);
checkIntergers(30,20);

/* 46. Check if Only One Integer is Multiple of 7 or 11
        Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.  */
const checkOnlyOneIsMultipleOf7Or11=(num1,num2)=>{
    try{
        if([num1,num2].some(n => (typeof n !== 'number') || (n < 0))){
            throw new Error('Only positive numbers are allowed.');
        };
        let result; 
        if((num1 % 7 === 0 || num1 % 11 === 0) && (num2 % 7 !== 0 || num2 % 7 !== 0 )){
            result = `${num1} is multiple`;
        }else if((num2 % 7=== 0 || num2 % 11 === 0) && (num1 % 7 !== 0 || num1 % 7 !== 0)){
            result = `${num2} is multiple`;
        }else{
            result = "Not a multiple";
        }
        console.log(`Result of checkOnlyOneIsMultipleOf7Or11 : ${result}`);
    }catch(error){
        console.log(`Error of checkOnlyOneIsMultipleOf7Or11 : ${error.message || error}`);
    };
};
checkOnlyOneIsMultipleOf7Or11(55,35);
checkOnlyOneIsMultipleOf7Or11(13,35);
checkOnlyOneIsMultipleOf7Or11(55,5);
checkOnlyOneIsMultipleOf7Or11(3,5);
checkOnlyOneIsMultipleOf7Or11(3,-35);

/* 47. Check if Integer is in Range 40?10,000
        Write a JavaScript program to check whether a given number exists in the range 40..10000.  
        For example 40 presents in 40 and 4000  */
function checkRange(inputNumber){
    try{
        if(typeof inputNumber !== 'number'){
            throw new Error("Only numbers are allowed.");
        };
        let result = (inputNumber >= 40 && inputNumber < 10000); 
        console.log(`Result of checkRange : ${result}`);
    }catch(error){
        console.log(`Error of checkRange : ${error.message || error}`);
    };
};
checkRange(20);
checkRange(40);
checkRange(500);
checkRange(5960);
checkRange(10000);
checkRange(-10);
checkRange(-60);

/* 48. Reverse a Given String
        Write a JavaScript program to reverse a given string.  */
const reverseString1=(inputString)=>{
    try{
        if(typeof inputString !=='string'){
            throw new Error('Only alphabetical characters are allowed.');
        };
        let reversedStr = "";
        for(let i=inputString.length-1; i >=0;i--){
            reversedStr += inputString[i];
        }
        console.log(`Result of reverseString1 : ${reversedStr}`);
    }catch(error){
        console.log(`Error of reverseString1 : ${error.message || error}`);
    };
};

reverseString1("rahul kumar");
reverseString1(333);

const reverseString2 =(inputString)=>{
    try{
        if(typeof inputString !== 'string'){
            throw new Error("Only alphabetical characters are allowed.");
        };
        let result = inputString.split("").reverse().join("");
        console.log(`Result of reverseString2 : ${result}`);
    }catch(error){
        console.log(`Result of reverseString2 : ${error.message || error}`);
    };
};
reverseString2('rahul kumar');
reverseString2(32323232);

/* 49. Replace Each Character with Next Alphabet Letter
        Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  */
const replaceNextAlphabetLetter=(inputString)=>{
    try{
        if(typeof inputString !=='string'){
            throw new Error("Only alphabet letters are allowed.");
        };
        let alphabetLetters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for(let i=0;i < inputString.length; i++){
            result += alphabetLetters[alphabetLetters.indexOf(inputString[i])+1];
        }
        console.log(`Result of replaceNextAlphabetLetter : ${result.toUpperCase()}`);
    }catch(error){
        console.log(`Error of replaceNextAlphabetLetter : ${error.message || error}`);
    };
};
replaceNextAlphabetLetter('rahul');
replaceNextAlphabetLetter('mango');
replaceNextAlphabetLetter('pineapple');

/* 50. Capitalize First Letter of Each Word in String
        Write a JavaScript program to capitalize the first letter of each word in a given string.  */
function capitalizeFirstLetter(inputString){
    try{
        if(typeof inputString !== 'string'){
            throw new Error('Only alphabetical characters are allowed.');
        };
        let clonedString = inputString.split(" ");
        for(let i = 0; i<clonedString.length;i++){
            clonedString[i] = clonedString[i][0].toUpperCase() + clonedString[i].substr(1)
        }
        let result = clonedString.join(" ")
        console.log(`Result of capitalizeFirstLetter : ${result}`);
    }catch(error){
        console.log(`Error of capitalizeFirstLetter : ${error.message || error}`);
    };
};
capitalizeFirstLetter('this is my string');
capitalizeFirstLetter('hello guys this is my first day');


/* 51. Transform Number to Hours and Minutes
        Write a JavaScript application that transforms a provided numerical value into hours and minutes.  */
function convertNumberToHoursMinutes(inputNumber){
    try{
        if(typeof inputNumber !== 'number'){
            throw new Error('Only numbers are allowed.');
        };
        console.log(`Result of convertNumberToHourMinutes : ${(inputNumber/120).toFixed(2)} & ${(inputNumber/60).toFixed(2)}`);
    }catch(error){
        console.log(`Error of convertNumberToHoursMinutes : ${error.message || error}`);
    };
};
convertNumberToHoursMinutes(5000);
convertNumberToHoursMinutes(88433);
convertNumberToHoursMinutes('rahul');

/* 52. Sort Letters Alphabetically in String
        Write a JavaScript program to convert letters of a given string alphabetically.  */
function sortInAlphabetically(inputString){
    try{
        if(typeof inputString !== 'string'){
            throw new Error('Only strings are allowed.');
        };
        let result = inputString.split("").sort().join("");
        console.log(`Result of sortInAlpabetically : ${result}`);
    }catch(error){
        console.log(`Error of sortInAlphabetically : ${error.message || error}`);
    };
};
sortInAlphabetically('rahul');
sortInAlphabetically('jaykishan');
sortInAlphabetically(333333);