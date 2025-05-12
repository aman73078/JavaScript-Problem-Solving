// 8. Random Integer Guess Game
//      Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

function guessNumber(inputNumber){
    try{
        if(typeof inputNumber !== 'number'){
            throw 'Only numbers are allowed.';
        };

        let randomNum = Math.ceil(Math.random()*10)
        let result = randomNum === inputNumber ? `Random Number is ${randomNum} : Good Work` : `Random Number is ${randomNum} : Not matched`;
        console.log(`Result of guessNumber(${inputNumber}) : ${result}`);
    }catch(error){
        console.log('Error : ',error);
    }
}

guessNumber(7)
guessNumber("7")


// 9. Days Left Before Christmas
//    Write a JavaScript program to calculate the days left before Christmas. 

const leftDays = function(){
    const currentDate = new Date();
    const christmasDate = new Date(currentDate.getFullYear(),11,25);
    let one_day = 1000*60*60*24;
    if(christmasDate.getMonth() === 11 && christmasDate.getDate() > 25){
        christmasDate.setFullYear(christmasDate.getFullYear() + 1);
    }
    console.log(`Left days before Christmas : ${Math.ceil((christmasDate.getTime()-currentDate.getTime())/one_day)}`);
}
leftDays();

// 11. Convert Temperatures Between Celsius and Fahrenheit
//      Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
//      [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
//      Expected Output :
//      60°C is 140 °F
//      45°F is 7.222222222222222°C

const convertTemperature = {
    celsiusToFahrenheit : function(celsius){
        let f = (9*celsius/5) + 32;
        console.log(`${celsius}°C is ${f}°F`);
    },
    FahrenheitToCelsius : function(fahrenheit){
        let c = 5*((fahrenheit-32)/9);
        console.log(`${fahrenheit}°F is ${c}°C`);
    }
}
convertTemperature.celsiusToFahrenheit(60);
convertTemperature.FahrenheitToCelsius(45);

// 13. Create Variable with User-Defined Name
//     Write a JavaScript exercise to create a variable using a user-defined name. 
const createVariable = (funcName)=>{
    
    console.log(`User defined variable---> : ${this[funcName]}`);
}

createVariable();

// 14. Get File Extension of Filename
//      Write a JavaScript exercise to get the filename extension.  
function getFileExtension(fileName){
    try{
        if(typeof fileName !== 'string' || !fileName.includes('.')){
            throw new Error(`Please provide a valid filename`)
        }
        let extension = fileName.split('.')[1];
        console.log(`File extension--> : ${extension}`);
    }catch(error){
        console.log(`Error : ${error.message || error}`);
    }
}
getFileExtension('document.php');
getFileExtension('document.csv');
getFileExtension('document.js');
getFileExtension('document');

// 15. Difference Between Number and 13
//      Write a JavaScript program to get the difference between a given number and 13, if the number is 
//      broader than 13 return double the absolute difference.
function difference(inputNumber){
    try{
        if(typeof inputNumber !== 'number'){
            throw new Error('Please provide an integer value')
        };
        let result = inputNumber <= 13 ? 13-inputNumber : (inputNumber-13)*2;
        console.log(`Difference between ${inputNumber} and 13 : ${result}`);
    }catch(error){
        console.log(`Error : ${error.message || error}`);
    }
}
difference(7);
difference(23);
difference('23');


// 16. Sum Two Integers (Triple if Equal)
//      Write a JavaScript program to compute the sum of the two given integers. If the two values are the 
//      same, then return triple their sum. 
const sum=(num1,num2)=>{
    try{
        if(typeof num1 !== 'number' || typeof num2 !== 'number') throw new Error('Only integer values are allowed');
        let result = num1 === num2 ? (num1+num2)*3 + ` Yes both numbers are same` : num1 + num2;
        console.log(`Sum of ${num1} and ${num2} -----> ${result}`);
    }catch(error){
        console.log(`Error : ${error.message || error}`);
    }
}
sum(5,6);
sum(5,5);
sum(-5,-5);
sum(-5,5); 
sum(-5,'5'); 