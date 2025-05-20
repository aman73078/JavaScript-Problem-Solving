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