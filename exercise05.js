// 17. Difference Between Number and 19 (Triple if >19)
//      Write a JavaScript program to compute the absolute difference between a specified number and 19. 
//      Returns triple the absolute difference if the specified number is greater than 19.  

const difference = function(inputNumber){
    try{
        if(typeof inputNumber !== 'number'){
            throw new Error('Please provide a number');
        }
        let result = inputNumber < 19 ? 19-inputNumber : `${(inputNumber-19)*3} and ${inputNumber} is greater than 19`;
        console.log(`Difference between ${inputNumber} and 19 : ${result}`);
    }catch(error){
        console.log(`Error : ${error.message || error}`);
    }
}
difference(5);
difference(30);
difference('30');
difference(-30);

// 18. Check if Number or Sum is 50
//      Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or
//      if their sum is 50.

function checkNumbers(num1,num2){
    try{
        if([num1,num2].every(n => typeof n !== 'number')){
            throw new Error('Only numbers are allowed.')
        }
        let result = (num1 === 50 || num2 === 50) || ((num1 + num2) === 50) ? true : false;
        console.log(`Result : ${result}`);
    }catch(error){
        console.log(`Error : ${error.message || error}`)
    }
}
checkNumbers(50,50);
checkNumbers(30,50);
checkNumbers(20,30);
checkNumbers(20,20);
checkNumbers('20',20);

// 19. Check if Integer is Within 20 of 100 or 400
//      Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. 
const checkInteger = function(inputNumber){
    try{
        if(typeof inputNumber !== 'number'){
            throw new Error('Only positive integers are allowed.')
        }
        /* let result =  20 < inputNumber < 100 ? `${inputNumber} is within 20 of 100` : 20 < inputNumber < 400 ? `${inputNumber} is  
                         within 20 of 400` : '';  
             Note:- 20 < inputNumber < 100 don't use like this because it consider like: 
                    (20 < inputNumber) < 100
                    true < 100 [true is considered as 1] then result will be true; */
        let result = (inputNumber > 20) && (inputNumber < 100) ? `${inputNumber} is within 20 of 100` : (inputNumber > 20) && (inputNumber < 400) ? `${inputNumber} is within 20 of 400` : `${inputNumber} is out of range.`;
        console.log(`Result of checkInteger : ${result}`);
    }catch(error){
        console.log(`Error : ${error.message || error}`);
    }
}
checkInteger(50);
checkInteger(110);
checkInteger('200');
checkInteger(300);
checkInteger(-300);


// 20. Check if One Integer is Positive and One is Negative
//      Write a JavaScript program to check two given integers whether one is positive and another one is
//      negative.  
const checkPositiveOrNegativeInteger = function(num1, num2) {
    try {
        if ([num1, num2].some(n => typeof n !== 'number')) {
            throw new Error('Only numbers are allowed.');
        }

        if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
            const positive = num1 > 0 ? num1 : num2;
            const negative = num1 < 0 ? num1 : num2;
            console.log(`Positive: ${positive} and Negative: ${negative}\n`);
        } else {
            console.log('No result — you entered wrong values (both numbers are positive or negative).');
        }
    } catch (error) {
        console.log(`Error: ${error.message || error}\n`);
    }
};

checkPositiveOrNegativeInteger(50, -30);
checkPositiveOrNegativeInteger(-50, 30);
checkPositiveOrNegativeInteger(-50, -30);
checkPositiveOrNegativeInteger(10, 20); 

/* 21. Add 'Py' to Start of String if Not Present
        Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins 
        with "Py" return the original string. */
const addPy=(inputString)=>{
    try{
        if(typeof inputString !== 'string'){
            throw new Error(`Expected a string input`)
        }
        let result = inputString[0] + inputString[1] === 'Py' ? inputString : 'Py'+inputString;
        console.log(`Result of addPy is : ${result}\n`);
    }catch(error){
        console.log(`Error of addPy : ${error.message || error}\n`);
    }
}
addPy('rahul');
addPy('Python');
addPy(33);

// 22. Remove Character at Specified Position in String
//     Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
const removeCharacter1 = function(position,givenString){
    try{
        let result = givenString.slice(0,position) + givenString.slice(position+1);
        console.log(`Result of removeCharacter1 : ${result}\n`);
    }catch(error){
        console.log(`Error of removeCharacter1 : ${error.message || error}\n`);
    }
}
removeCharacter1(2,'malhotra');
removeCharacter1(4,'malhotra');

const removeCharacter2 = function(position,givenString){
    try{
        let result = givenString.substring(0,position) + givenString.substring(position+1,givenString.length);
        console.log(`Result of removeCharacter2 : ${result}\n`);
    }catch(error){
        console.log(`Error of removeCharacter2 : ${error.message || error}\n`);
    }
}
removeCharacter2(3,'malhotra');
removeCharacter2(2,'malhotra');
removeCharacter2(4,'malhotra');

/*  23. Swap First and Last Characters in String
        Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1. */
function swapFirstToLast1(inputString){
    try{
        if(typeof inputString !== 'string'){
            throw new Error('Expected a string input');
        }
        let clonedString = inputString;
        let result = inputString[inputString.length-1] + clonedString.slice(1,inputString.length-1) + inputString[0]
        console.log(`Result of swapFirstToLast : ${result}`);
    }catch(error){
        console.log(`Error of swapFirstToLast1 : ${error.message || error}`);
    }
}
swapFirstToLast1('rahul');
swapFirstToLast1('malhotra');
swapFirstToLast1(3333);

function swapFirstToLast2(inputString){
    try{
        if(typeof inputString !=='string'){
            throw new Error('Expected a string input');
        }
        inputString = inputString.toLowerCase();
        let result = inputString[inputString.length-1] + inputString.substring(1,inputString.length-1) + inputString[0]
        console.log(`Result of swapFirstToLast2 : ${result}`);
    }catch(error){
        console.log(`Error of swapFirstToLast2: ${error.message}`);
    }
}
swapFirstToLast2('rahul');
swapFirstToLast2('malhotra');
swapFirstToLast2(3333);

/*  24. Add First Character to Front and Back of String
        Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back. */

const convertString1 =(inputString)=>{
    try{
        if(typeof inputString !== 'string'){
            throw new Error('Expected a string input');
        };
        inputString = inputString.toLowerCase();
        let result = inputString[0] + inputString + inputString[0];
        console.log(`Result of convertString : ${result}`);
    }catch(error){
        console.log(`Error : ${error.message || error}`);
    };
};
convertString1('rahul');
convertString1('malhotra');

const convertString2 = function(inputString){
    try{
        if(typeof inputString !== 'string'){
            throw new Error('Expected a string input');
        };
        inputString = inputString.toLowerCase();
        let result = inputString[0] + inputString.substring(0,inputString.length) + inputString[0];
        console.log(`Result of convertString2 : ${result}`);
    }catch(error){
        console.log(`Error of converString2 : ${error.message || error}`);
    }
}
convertString2('iphone');
convertString2('microsoft');

/* Note:- In Javascript, .substring() is a string method which is used to extract the portion of a string
            between two specified indices.
            .substring(startIndex, endIndex);
            if startIndex > endIndex, Javascript automatically swaps them.
*/