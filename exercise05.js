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
            console.log(`Positive: ${positive} and Negative: ${negative}`);
        } else {
            console.log('No result — you entered wrong values (both numbers are positive or negative).');
        }
    } catch (error) {
        console.log(`Error: ${error.message || error}`);
    }
};

checkPositiveOrNegativeInteger(50, -30);
checkPositiveOrNegativeInteger(-50, 30);
checkPositiveOrNegativeInteger(-50, -30);
checkPositiveOrNegativeInteger(10, 20); 
