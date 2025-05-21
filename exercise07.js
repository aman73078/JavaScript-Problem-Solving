/* 35. Check Character Between 2nd and 4th Positions in String
        Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.  */
const checkCharOnFixedPosition =(inputString,char)=>{
    try{
        if([inputString,char].some(char => typeof char !=='string') || (!inputString || !char)){
            throw new Error('Only characters are allowed.');
        }
        let result = (inputString.indexOf(char) === 2) || (inputString.indexOf(char) === 4) ? `Index of ${char} : ${inputString.indexOf(char)}` : `${char} is not available on given string.`;
        console.log(`Result of checkCharOnFixedPosition : ${result}`);
    }catch(error){
        console.log(`Error of checkCharOnFixedPosition : ${error.message || error}`);
    };
};
checkCharOnFixedPosition('rahul','l');
checkCharOnFixedPosition('rahul','');
checkCharOnFixedPosition('lucknow','n');
checkCharOnFixedPosition(3333,'n');

/* 36. Check if Last Digit of Three Integers is Same
        Write a JavaScript program that checks whether the last digit of three positive integers is the 
        same. */
const lastThreeDigitMatch1 = function(num1,num2,num3){
    try{
        if([num1,num2,num3].some(n => typeof n !== 'number')){
            throw new Error(`Only numbers are allowed.`);
        };
        let lastDigitOfEachNumber = [];
        [num1,num2,num3].forEach(n => {
            let str = String(n);
            lastDigitOfEachNumber.push(str[str.length-1]);
        })
        let result;
        if(lastDigitOfEachNumber.length === 3){
            if((lastDigitOfEachNumber[0] === lastDigitOfEachNumber[1]) && (lastDigitOfEachNumber[1] === lastDigitOfEachNumber[2])){
                result = `Yes all are same.`;
            }else{
                result = 'Not same.';
            }
        }
        console.log(`Result of lastThreeDigitMatch1 : ${result}`);
    }catch(error){
        console.log(`Error of lastThreeDigitMatch1 : ${error.message || error}`);
    };
};
lastThreeDigitMatch1(22,32,52);
lastThreeDigitMatch1(95,55,5);
lastThreeDigitMatch1(92,55,6);
lastThreeDigitMatch1(3,56,6);

const lastThreeDigitMatch2 = function(num1,num2,num3){
    try{
        if([num1,num2,num3].some(n => typeof n !=='number')){
            throw new Error('Only numbers are allowed.');
        };
        let lastDigitOfEachNumber = [];
        [num1,num2,num3].forEach(n => {
            let str = String(n);
            lastDigitOfEachNumber.push(str[str.length - 1]);
        });
        let unique = new Set(lastDigitOfEachNumber);
        let result = unique.size === 1 ? 'Yes last digit of the given numbers are same.':'Not Same.';
        console.log(`Result of lastThreeDigitMatch2 : ${result}`);
    }catch(error){
        console.log(`Error of lastThreeDigitMatch2 : ${error.message || error}`);
    };
};
lastThreeDigitMatch2(22,32,92);
lastThreeDigitMatch2(22,32,2);
lastThreeDigitMatch2(35,55,2);
lastThreeDigitMatch2(35,55,0);
lastThreeDigitMatch2(35,55,'rahul');

/* 37. Modify String Based on Length (First 3 Lowercase/Uppercase)
        Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case. */
const modifyString = function(inputString){
    try{
        if(!inputString || (typeof inputString !=='string')){
            throw new Error('Only alphabetical characters are allowed.');
        };
        let result;
        if(inputString.length < 3){
            result = inputString.toUpperCase();
        }else{
            result = inputString.substring(0,3) + inputString.substring(3,inputString.length).toUpperCase();
        };
        console.log(`Result of modifyString : ${result}`);
    }catch(error){
        console.log(`Error of modifyString : ${error.message || error}`);
    };
};
modifyString('rahul');
modifyString('kishorkumar');
modifyString('harshit');
modifyString('ha');
modifyString(333333);
modifyString('jammukashmir');

/*
38. Evaluate Grades Based on Total Marks and Final Exam
    Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:

    If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
    If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
    If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.
*/

const resultOfFinalExam = function(totalMarks,isFinalExamination){
    try{
        if(typeof totalMarks !== 'number'){
            throw new Error('Only numbers are allowed.');
        };
        let result;
        if(isFinalExamination){
            result = totalMarks > 90;
        }

        result = ( totalMarks >=89 && totalMarks <=100);
        console.log(`Result of resultOfFinalExam : ${result}`);
    }catch(error){
        console.log(`Error of resultOfFinalExam : ${error.message || error}`);
    };
}

resultOfFinalExam(89)
resultOfFinalExam(93)
resultOfFinalExam(53)

/* 39. Sum Two Integers and Return Based on Range
Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80. */

function returnBasedOnRange(num1,num2){
    try{
        if([num1,num2].some(n => typeof n !== 'number')){
            throw new Error('Only numbers are allowed.');
        };
        let sum = num1 + num2;
        let result = (sum > 50 && sum < 80) ? 65 : 80;
        console.log(`Result of returnBasedOnRange : ${result}`);
    }catch(error){
        console.log(`Error of returnBasedOnRange : ${error.message || error}`);
    };
};
returnBasedOnRange(35,35);
returnBasedOnRange(35,20);
returnBasedOnRange(5,70);
returnBasedOnRange(5,20);

/* 40. Check if Integer is 8 or Difference/Sum Equals 8
    Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8. 
*/
function checkTwoIntgers(num1,num2){
    try{
        if([num1,num2].some(n => typeof n !== 'number')){
            throw new Error('Only numbers are allowed.');
        };
        let result = [num1,num2].includes(8) || ((num1 + num2) === 8) || (Math.abs(num1 - num2) === 8) ? true : false;
        console.log(`Result of checkTwoIntegers : ${result}`);
    }catch(error){
        console.log(`Error of checkTwoIntegers : ${error.message || error}`);
    };
};
checkTwoIntgers(20,12);
checkTwoIntgers(20,32);
checkTwoIntgers(4,4);
checkTwoIntgers(12,4);

/* 41. Return 30, 40, or 20 Based on Same Numbers
    Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.  */
const returnNumber =(num1,num2,num3)=>{
    try{
        // if([num1,num2,num3].some(n => typeof n !== 'number')){
        //     throw new Error('Only numbers are allowed.');
        // };
        let convertSet = new Set([num1,num2,num3]);
        let result;
        if(convertSet.size === 1){
            result = 30;
        }else if(convertSet.size === 2){
            result = 40;
        }else{
            result = 20;
        }
        console.log(`Result of returnNumber : ${result}`);
    }catch(error){
        console.log(`Error of returnNumber : ${error.message || error}`);
    };
};
returnNumber(20,20,20);
returnNumber(5,20,20);
returnNumber(5,35,20);