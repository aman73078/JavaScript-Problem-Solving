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
        