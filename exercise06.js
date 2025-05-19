/* 25. Check if Number is Multiple of 3 or 7
Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
*/
const checkMultipleOfNumber=(inputNumber)=>{
    try{
        if(typeof inputNumber !== 'number'){
            throw new Error('Please enter a number');
        }

        let result = '';
        if((inputNumber % 3=== 0) && !(inputNumber % 7 === 0)){
            result = `${inputNumber} is a multiple of 3`;
        }else if((inputNumber % 7 === 0) && !(inputNumber % 3 === 0)){
            result = `${inputNumber} is a multiple of 7.`
        }else if((inputNumber % 7 === 0) && (inputNumber % 3 ===0)){
            result = `${inputNumber} is a multiple of both 3 and 7`;
        }else{
            result = `${inputNumber} is not a multiple of 3 or 7.`
        }
        console.log(`Result of checkMultipleOfNumber : ${result}`);
    }catch(error){
        console.log(`Error of checkMultipleOfNumber : ${error.message || error}`);
    }
}
checkMultipleOfNumber(5);
checkMultipleOfNumber(21);
checkMultipleOfNumber(28);
checkMultipleOfNumber(15);

/* 26. Add Last 3 Characters to Front and Back of String
        Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.
*/

const addThreeCharFrontBack = function(inputString){
    try{
        if(typeof inputString !== 'string'){
            throw new Error('Only alphabets are allowed.')
        }else if(inputString.trim().length < 3){
            throw new Error('The string length must be 3 or more.');
        }
        let extractThreeChar = inputString.substring(inputString.length -3, inputString.length);
        let result = extractThreeChar + inputString + extractThreeChar;
        console.log(`Result of addThreeCharFrontBack : ${result}`);
    }catch(error){
        console.log(`Error of addThreeCharFrontBack : ${error.message || error}`);
    }
}
addThreeCharFrontBack('kishor');
addThreeCharFrontBack('chandrabhanu');
addThreeCharFrontBack('');
addThreeCharFrontBack(333333);

/* 27. Check if String Starts with 'Java'
        Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise. */
function checkStartWithJava(inputString){
    try{
        if(typeof inputString !== 'string'){
            throw new Error('Only character are allowed.');
        }
        let result = inputString.slice(0,4).toLowerCase() === 'Java'.toLowerCase() ;
        console.log(result);
    }catch(error){
        console.log(`Error of checkStartWithJava : ${error.message || error}`);
    }
}
checkStartWithJava('TypeScript');
checkStartWithJava('JavaScript');
checkStartWithJava('Angular');
checkStartWithJava(33232);

/* 28. Check if Two Integers are in Range 50?99
        Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range. */
const checkRangeOfTwoIntegers =(num1,num2)=>{
    try{
        if([num1,num2].every(n => typeof n !== 'number')){
            throw new Error('Only numbers are allowed.');
        };
        let result = (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99 );
        console.log(`Result of checkRangeOfTwoIntegers : ${result}`);
    }catch(error){
        console.log(`Error of checkRangeOfTwoIntegers : ${error.message || error}`);
    };
};

checkRangeOfTwoIntegers(58,101);
checkRangeOfTwoIntegers(24,200);
checkRangeOfTwoIntegers(34,90);
checkRangeOfTwoIntegers('rahul','kumar');

/* 29. Check if Three Integers are in Range 50?99
        Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range. */
const checkThreeIntegersInRange1=(num1,num2,num3)=>{
    try{
        if([num1,num2,num3].every(n => typeof n !== 'number')){
            throw new Error('Only numbers are allowed.');
        };
        let result;
        if((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99)){
            result = true;
        }else{
            result = false;
        }
        console.log(`Result of checkThreeIntegersInRange2 : ${result}`);
    }catch(error){
        console.log(`Error of checkThreeIntegersInRange2 : ${error.message || error}`);
    };
};

checkThreeIntegersInRange1(55,23,100);
checkThreeIntegersInRange1(55,23,101);
checkThreeIntegersInRange1(45,23,101);

const checkThreeIntegersInRange2=(num1,num2,num3)=>{
    try{
        if([num1,num2,num3].every(n => typeof n !== 'number')){
            throw new Error('Only numbers are allowed.');
        };
        let result = [num1,num2,num3].some(n => (n >=50 && n <=99));
        console.log(`Result of checkThreeIntegersInRange : ${result}`);
    }catch(error){
        console.log(`Error of checkThreeIntegersInRange : ${error.message || error}`);
    };
};


/* 30. Remove 'Script' from String at 5th Position
        Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one. */

const checkScriptOn5thPosition = function(inputString){
    try{
        if(inputString === ''){
            throw new Error('This is required');
        }else if(typeof inputString !== 'string'){
            throw new Error('Only alphabet letters are allowed.');
        };
        let extractString = inputString.slice(inputString.length-6, inputString.length)
        let result = extractString.toLowerCase() === 'script' ? inputString.substring(0,inputString.length - extractString.length) : inputString
        console.log(`Result of checkScriptOn5thPosition : ${result}`);
    }catch(error){
        console.log(`Error of checkScriptOn5thPosition : ${error.message || error}`);
    };
};

checkScriptOn5thPosition('TypeScript');
checkScriptOn5thPosition('angular');
checkScriptOn5thPosition('JavaScript');
checkScriptOn5thPosition('');
checkScriptOn5thPosition(33333);

/* 31. Find Largest of Three Integers
        Write a JavaScript program to find the largest of three given integers. */
function findLargestInteger(num1,num2,num3){
    try{
        if([num1,num2,num3].some(n => typeof n !== 'number')){
            throw new Error('Only numbers are allowed.');
        };
        let result = '';
        if((num1 > num2) && (num1 > num3)){
            result = `${num1} is a largest integer of given integers.`;
        }else if((num2 > num1) && (num2 > num3)){
            result = `${num2} is a largest integer of given integers.`;
        }else{
            result = `${num3} is a largest integer of given integers.`;
        }
        console.log(`Result of findLargestInteger : ${result}`);
    }catch(error){
        console.log(`Error of findLargestInteger : ${error.message || error}`);
    };
}
findLargestInteger(22,5,100);
findLargestInteger(22,5,-100);
findLargestInteger(-22,-5,0);
findLargestInteger(-22,-5,'rahul');

/* 32. Find Closest Value to 100 from Two Numbers
        Write a JavaScript program to find the closest value to 100 from two numerical values.  */

const findClosestValue1 = function closest(num1,num2){
    try{
        if([num1, num2].every(n => typeof n !== 'number')){
            throw new Error('Only numbers are allowed.');
        };
        let result = '';
        if(((100 > num1) && (num1 > num2)) || ((100 < num1) && (num1 < num2))){
            result = `${num1} is closest to 100.`;
        }else if(((100 > num2) && (num2 > num1)) || ((100< num2) && (num2 < num1))){
            result = `${num2} is closest to 100.`;
        }
        console.log(`Result of findClosestValue1 : ${result}`);
    }catch(error){
        console.log(`Error of findClosestValue1 : ${error.message || error}`);
    };
};
findClosestValue1(98,20);
findClosestValue1(28,90);
findClosestValue1(28,-90);
findClosestValue1(-28,-90);
findClosestValue1(128,190);
findClosestValue1('magic','rahul');

const findClosestValue2 = function(num1,num2){
    try{
        if([num1,num2].every(n => typeof n !== 'number')){
            throw new Error('Only numbers are allowed.');
        };
        let result = '';
        if((100-num1 > 100-num2) || (num2-100 > num1 - 100)){
            result = `${num2} is closest to 100.`;
        }else if((100-num2 > 100-num1)){
            result = `${num1} is closest to 100.`;
        }
        console.log(`Result of findClosestValue2 : ${result}`);
    }catch(error){
        console.log(`Error of findClosestValue2 : ${error.message || error}`);
    }
}

findClosestValue2(30,70)
findClosestValue2(90,70)
findClosestValue2(110,150)

/* 33. Check if Two Numbers are in Specific Ranges
        Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive. */
const checkRange=(num1,num2)=>{
    try{
        if([num1,num2].every(n => typeof n !== 'number')){
            throw new Error(`Only numbers are allowed.`);
        };
        let result;
        if((num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) || (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100)){
            result =  true;
        }else{
            result = false;
        }
        console.log(`Result of checkRange : ${result}`);
    }catch(error){
        console.log(`Error of checkRange : ${error.message || error}`);
    }
};
checkRange(5,80);
checkRange(45,55);
checkRange(75,95);

/* 34. Find Larger Number in Range 40?60
        Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive. */
const findLargerNumberBetweenTwoNumber=(num1,num2)=>{
    try{
        if([num1,num2].every(n => typeof n !== 'number')){
            throw new Error('Only numbers are allowed.');
        };
        let condition = [num1,num2].every(n => (n >= 40 && n <= 60))
        let result = !condition ? `Given numbers[${num1}, ${num2}] are out of range` : num1 > num2 ? `${num1} is largest number.` : `${num2} is largest number.`;
        console.log(`Result of findLargerNumberBetweenTwoNumber : ${result}`);
    }catch(error){
        console.log(`Error of findLargerNumberBetweenTwoNumber : ${error.message || error}`);
    };
};

findLargerNumberBetweenTwoNumber(45,36);
findLargerNumberBetweenTwoNumber(45,55);
findLargerNumberBetweenTwoNumber(45,75);
findLargerNumberBetweenTwoNumber(36,75);
findLargerNumberBetweenTwoNumber('rahul','kumar');