/* 53. Check 'a' and 'b' Separated by Exactly 3 Places
        Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.  */
function checkSeperatedBy(inputString){
    try{
        if(typeof inputString !== 'string'){
            throw new Error('Only strings are allowed.');
        };
        let result = (inputString.indexOf('b') - inputString.indexOf('a')) === 4 ? true: false;
        console.log(`Result of checkSeperatedBy : ${result}`);
    }catch(error){
        console.log(`Error of checkSeperatedBy : ${error.message || error}`);
    };
};
checkSeperatedBy('elephant');
checkSeperatedBy('ekabal');
checkSeperatedBy('eaiiib');
checkSeperatedBy('pacccb');

/* 54. Count Vowels in String
        Write a JavaScript program to count the number of vowels in a given string.  */
const countVowels = function(inputString){
    try{
        if(typeof inputString !=='string'){
            throw new Error('Only strings are allowed.');
        };
        let countOfVowels = 0;
        for(let char of inputString){
            if(['a','e','i','o','u'].includes(char)){
                countOfVowels++;
            };
        }
        console.log(`Result of countVowels : Vowels :- ${countOfVowels} & Consonant :- ${inputString.length - countOfVowels}`);
    }catch(error){
        console.log(`Error or countVowels : ${error.message || error}`);
    };
};
countVowels('rahul');
countVowels('maheshwari');
countVowels('elephat');
countVowels('banana');


/* 55. Check Equal Number of 'p's and 't's
        Write a JavaScript program to check whether a given string contains an equal number of p's and t's.  */
const checkCountOfPsAndTs=(inputString)=>{
    try{
        if(typeof inputString !== 'string'){
            throw new Error('Only strings are allowed.');
        };
        let pCount = 0;
        let tCount = 0;
        for(let char of inputString){
            if(char.toLowerCase() === 'p'){
                pCount++;
            }else if(char.toLowerCase() === 't'){
                tCount++;
            }
        };
        let result = `Number of p's :- ${pCount} & Number of t's :- ${tCount}`;
        console.log(`Result of checkCountOfPsAndTs : ${result}`);
    }catch(error){
        console.log(`Error of checkCountOfPsAndPs : ${error.message || error}`);
    };
};
checkCountOfPsAndTs('application');
checkCountOfPsAndTs('elephant');
checkCountOfPsAndTs('Nippo Battery');
checkCountOfPsAndTs(333);


/* 56. Divide Numbers and Format with Commas
        Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.  */
const divideTwoNumbersAndReturnCommasSeperated = function(num1,num2){
    try{
        if([num1,num2].some(n => typeof n !=='number')){
            throw new Error('Only numbers are allowed.');
        };
        let divided = 0;
        if(num1 > num2){
            divided = num1/num2;
        }else{
            divided = num2/num1;
        }
        let result = String(divided.toLocaleString('en-IN'));
        console.log(`Result of divideTwoNumbersAndReturnCommasSeperated : ${result}`);
    }catch(error){
        console.log(`Error of divideTwoNumbersAndReturnCommasSeperated : ${error.message || error}`);
    };
};
divideTwoNumbersAndReturnCommasSeperated(50000,20);
divideTwoNumbersAndReturnCommasSeperated(38383923,20);
divideTwoNumbersAndReturnCommasSeperated(-38383923,200000000000000);
divideTwoNumbersAndReturnCommasSeperated(-5,20);
divideTwoNumbersAndReturnCommasSeperated(38383923,'dkse');

/* 57. Create String of Specified Copies
        Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.  */
const makeCopiesOfString=(inputString, numberOfCopies)=>{
    try{
        let errors = [];
        if(typeof inputString !== 'string'){
            errors.push(`Expected 'inputString' to be string but got ${inputString}`);
        }
        if(typeof numberOfCopies !== 'number') {
            errors.push(`Expected 'numberOfCopies' to be number but got ${numberOfCopies}`);
        };
        if(numberOfCopies < 0){
            errors.push(`Expected 'numberOfCopies to be greater than 0 but got ${numberOfCopies}`);
        };

        if(errors.length > 0){
            throw new Error(errors.join(' | '));
        };  
        let copies = '';
        for(let copy=0;copy < numberOfCopies; copy++){
            copies = copies + inputString;
        };
        console.log(`Result of makeCopiesOfString : ${copies}`);
    }catch(error){
        console.log(`Error of makeCopiesOfString : ${error.message || error}`);
    };
};

makeCopiesOfString('abc',3);
makeCopiesOfString('rahul',5);
makeCopiesOfString(3333,'asddfasdf');
makeCopiesOfString(3333,-5);


/* 58. Four Copies of Last 3 Characters
        Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.  */
function fourCopiesOfLast3Characters(inputString){
    try{
        let errors = [];
        if(inputString.length < 3){
            errors.push(`Expected 'inputString' length must be 3 or above but got ${inputString.length ?? 0}`)
        }
        if(typeof inputString !=='string'){
            errors.push(`Expected 'inputString' to be string but got ${inputString}`);
        };
        if(errors.length > 0){
            throw new Error(errors.join(' | '));
        };
        let result = '';
        for(let copy=1; copy <= 4; copy++){
            result = result + inputString.substring(inputString.length-3,inputString.length);
        };
        console.log(`Result of fourCopiesOfLast3Characters : ${result}`);
    }catch(error){
        console.log(`Error of fourCopiesOfLast3Characters : ${error.message || error}`);
    };
};
fourCopiesOfLast3Characters('');
fourCopiesOfLast3Characters(3333);
fourCopiesOfLast3Characters('abc');
fourCopiesOfLast3Characters('ef');
fourCopiesOfLast3Characters('mnop');
fourCopiesOfLast3Characters('kumar');

/* 59. Extract First Half of Even-Length String
        Write a JavaScript program to extract the first half of a even string.  */
function extractFirstHalfOfEvenLengthString(inputString){
    try{
        let errors = []; 
        if(typeof inputString !== 'string'){
            errors.push(`Expected 'inputString' to be string but got ${inputString}`);
        }else if(inputString.length%2 !== 0){
            errors.push(`Expected 'inputString' to be even-length string but got ${inputString.length}`);
        };
        if(errors.length > 0){
            throw new Error(errors.join(' | '));
        };
        let result = inputString.substring(0,inputString.length/2);
        console.log(`Result of extractFirstHalfOfEvenLengthString : ${result}`);
    }catch(error){
        console.log(`Error of extractFirstHalfOfEvenLengthString : ${error.message || error}`);
    };
};
extractFirstHalfOfEvenLengthString('JavaScript');
extractFirstHalfOfEvenLengthString('TypeScript');
extractFirstHalfOfEvenLengthString(333333);
extractFirstHalfOfEvenLengthString('abc');


/* 60. Remove First and Last Characters in String
        Write a JavaScript program to create a new string without the first and last characters of a given string.  */
const removeFirstAndLastCharacter = function(inputString){
    try{
        let error = '';
        if(typeof inputString !== 'string'){
            error = `Expected 'inputString' to be string but got ${inputString}`;
        }else if(inputString.length <3){
            error = `Expected 'inputString' length must be 3 or above but got ${inputString.length}`;
        }
        if(error) throw new Error(error) ;
        let result = inputString.substring(1,inputString.length-1);
        console.log(`Result of removeFirstAndLastCharacter : ${result}`);
    }catch(error){
        console.log(`Error of removeFirstAndLastCharacter : ${error.message || error}`);
    };
};
removeFirstAndLastCharacter('rahul');
removeFirstAndLastCharacter('ab');
removeFirstAndLastCharacter('elephant');
removeFirstAndLastCharacter(38383);

/* 61. Concatenate Two Strings Without First Character
        Write a JavaScript program to concatenate two strings except for their first character.  */
function concatTwoStringExceptingTheirFirstChar(firstString, SecondString){
    try{
        let errorMessage = '';
        if([firstString,SecondString].some(str => typeof str !== 'string')){
            errorMessage = 'Only strings are allowed.';
        }else if([firstString,SecondString].some(str => str.length <2)){
            errorMessage = 'Strings length must be 2 or above.';
        };
        if(errorMessage){
            throw new Error(errorMessage);
        };
        let result = firstString.substring(1,firstString.length) + SecondString.substring(1,SecondString.length);
        console.log(`Result of concatTwoStringExceptingTheirFirstChar : ${result}`);
    }catch(error){
        console.log(`Error of concatTwoStringExceptingTheirFirstChar : ${error.message || error}`);
    };
};
concatTwoStringExceptingTheirFirstChar('rahul','kumar');
concatTwoStringExceptingTheirFirstChar('King','Mirzapur');
concatTwoStringExceptingTheirFirstChar(333,3333);

/* 62. Move Last 3 Characters to Start of String
        Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three. */
function moveThreeCharLastToStart(inputString){
    try{
        let errorMessage = '';
        if(typeof inputString !== 'string'){
            errorMessage = `Expected 'inputString' to be string but got ${inputString}`;
        }else if(inputString.length <3){
            errorMessage = `Expected 'inputString' length must be 3 or above but got ${inputString.length}`;
        };
        if(errorMessage) throw new Error(errorMessage);
        let result = inputString.substring(inputString.length-3,inputString.length) + inputString.substring(0,inputString.length-3);
        console.log(`Result of moveThreeCharLastToStart : ${result}`);
    }catch(error){
        console.log(`Error of moveThreeCharLastToStart : ${error.message || error}`);
    };
};
moveThreeCharLastToStart('abcd');
moveThreeCharLastToStart('efg');
moveThreeCharLastToStart('elephant');
moveThreeCharLastToStart('ab');
moveThreeCharLastToStart(33333);

/* 63. Extract Middle 3 Characters from Odd-Length String
        Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.  */