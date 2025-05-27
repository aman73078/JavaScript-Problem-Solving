/* 66. Return City Name if Starts with 'Los' or 'New'
        Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank. */
const returnCityName = function(cityName){
    try{
        if(typeof cityName !== 'string') throw new Error(`Expected 'cityName' to be string but got ${cityName}`);
        let result = ['Los','New'].includes(cityName.substring(0,3)) ? cityName : '';
        console.log(`Result of returnCityName : ${result}`);
    }catch(error){
        console.log(`Error of returnCityName : ${error.message || error}`);
    };
};
returnCityName('New Delhi');
returnCityName('Los Alamos');
returnCityName('New Mexico');
returnCityName('Los Angeles');
returnCityName('Lucknow');
returnCityName('Prayagraj');
returnCityName(333333);

/*  67. Remove First/Last 'P' Characters in String
        Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.  */
const removeFristLastCharP = (inputString) => {
    try{
        if(inputString.length === 0 || typeof inputString !== 'string') throw new Error('Only string are allowed.');
        let result = [0,inputString.length-1].every(index => inputString[index] === 'p') ? inputString.substring(1,inputString.length-1) : inputString;
        console.log(`Result of removeFirstLastCharP : ${result}`);
    }catch(error){
        console.log(`Error of removeFirstLastChar : ${error.message || error}`);
    };
};
removeFristLastCharP('Lucknow');
removeFristLastCharP('pop');
removeFristLastCharP('pushp');
removeFristLastCharP('paap');
removeFristLastCharP('parvinder');
removeFristLastCharP('');
removeFristLastCharP(332332);

/*  68. Use First and Last 'n' Characters from String
        Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n. */
const makeNewStringWithnChar = function(inputString,nChar){
    try{
        let error = '';
        if(!inputString || !nChar){
            error = 'Empty should not accept.';
        }else if(typeof inputString !=='string'){
            error = 'Only alphabet characters are allowed.';
        }
        if(typeof nChar !== 'number'){
            error = `Expected 'nChar' to be number but got ${nChar}`;
        };
        if(inputString.length < nChar){
            error = `String length must be ${nChar} or above.`;
        };
        if(error){
            throw new Error(error);
        }
        let result = inputString.substring(0,nChar) + inputString.substring(inputString.length-nChar, inputString.length);
        console.log(`Result of makeNewStringWithnChar : ${result}`);
    }catch(error){
        console.log(`Error of makeNewStringWithnChar : ${error.message || error}`);
    };
};
makeNewStringWithnChar('rahul',2);
makeNewStringWithnChar('elephant',2);
makeNewStringWithnChar('',2);
makeNewStringWithnChar('',);
makeNewStringWithnChar('kishor kumar',3);


/*  69. Sum of 3 Elements in Array (Length 3)
        Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3. */
function sumOfThreeElementsInArray(...list){
    try{
        if(list.some(n => typeof n !== 'number')){ 
            throw new Error('Array elements must be numbers.');
        }else if(list.length < 3){
            throw new Error('Array length must be 3 or above.');
        };
        let sum = 0;
        for(let ele of list){
            sum += ele;
        };
        console.log(`Result of sumOfThreeElementsInArray : ${sum}`);
    }catch(error){
        console.log(`Error of sumOfThreeElementsInArray : ${error.message || error}`);
    };
};
sumOfThreeElementsInArray(5,3,8);
sumOfThreeElementsInArray(5,5,5);
sumOfThreeElementsInArray(33,55,99);
sumOfThreeElementsInArray(33,55,'add');

/*  70. Rotate Elements Left in Array (Length 3)
        Write a JavaScript program to rotate the elements left in a given array of integers of length 3.  */
const rotateElementLeftInArray = function(list){
    try{
        let error = '';
        if(!Array.isArray(list)){
            error = 'Only Array is allowed.';
        }else if(list.length < 3){
            error = 'Array length must be 3 or above.';
        }else if(list.some(n => typeof n !== 'number')){
            error = 'Only numbers are allowed.';
        };
        if(error) throw new Error(error);
        let result = [list[1],list[2],list[0]];
        console.log(`Result of rotateElementLeftInArray : ${result}`);
    }catch(error){
        console.log(`Error of rotateElementLeftInArray : ${error.message || error}`);
    };
};
rotateElementLeftInArray([3,4,5]);
rotateElementLeftInArray([-3,0,5]);

/*  71. Check if 1 is First/Last Element in Array
        Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.   */
const checkFirstLastElementIs1 = function(...list){
    try{
        let error = '';
        if(list.some(n => typeof n !== 'number')){
            error = 'Array elements must be number.';
        }else if(list.length < 1){
            error = 'Array length must be 1 or above.';
        };
        if(error){
            throw new Error(error);
        };
        let result = [0,list.length-1].some(n => list[n] === 1);
        console.log(`Result of checkFirstLastElementIs1 : ${result}`);
    }catch(error){
        console.log(`Error of checkFirstLastElementIs1 : ${error.message || error}`);
    };
};
checkFirstLastElementIs1(1,33,45);
checkFirstLastElementIs1(13,33,1);
checkFirstLastElementIs1(13,33,45);
checkFirstLastElementIs1('asdfasd',33,45);

const checkFirstLastElementIs2 = function(...list){
    try{
        let error = '';
        if(list.some(n => typeof n !== 'number')){
            error = 'Array elements must be number.';
        }else if(list.length < 1){
            error = 'Array length must be 1 or above.';
        };
        if(error){
            throw new Error(error);
        };
        let result = list[0] === 1 || list[list.length-1] === 1;
        console.log(`Result of checkFirstLastElementIs2 : ${result}`);
    }catch(error){
        console.log(`Error of checkFirstLastElementIs2 : ${error.message || error}`);
    };
};
checkFirstLastElementIs2(33,52,45);
checkFirstLastElementIs2(33,52,1);
checkFirstLastElementIs2(1,33,13);
checkFirstLastElementIs2(13,1,13);
checkFirstLastElementIs2(13,1,'dadsa');

/*  72. Check if First and Last Elements Are Same
        Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.  */
const checkFirstLastElementSame = function(list){
    try{
        let error = '';
        if(!Array.isArray(list)){
            error = 'Only array is allowed.';
        }else if(list.length < 3){
            error = 'Array length must be 3 or above.';
        }else if(list.some(n => typeof n !== 'number')){
            error = 'Only numbers are allowed.';
        };
        if(error){
            throw new Error(error);
        };
        let result = list[0] === list[list.length-1];
        console.log(`Result of checkFirstLastElementSame : ${result}`);
    }catch(error){
        console.log(`Error of checkFirstLastElementSame : ${error.message || error}`);
    };
};
checkFirstLastElementSame([33,45,33]);
checkFirstLastElementSame([33,45,39]);
checkFirstLastElementSame([93,45,39]);
checkFirstLastElementSame(['asdfasd',45,39]);
checkFirstLastElementSame([45,39]);

/*  73. Reverse Elements of Array (Length 3)
        Write a JavaScript program to reverse the elements of a given array of integers of length 3.  */
const reverseArrayElement1 =(...list)=>{
    try{
        if(!Array.isArray(list)) {
            throw new Error('Only array is allowed.');
        }else if(list.length <3){
            throw new Error('Array length must be 3 or above.');
        };
        let result = [];
        for(let ele = list.length-1; ele >= 0;ele--){
            result.push(list[ele]);
        };
        console.log(`Result of reverseArrayElement1 : ${result}`);
    }catch(error){
        console.log(`Error of reverseArrayElement1 : ${error.message || error}`);
    };
};
reverseArrayElement1(12,33,54);
reverseArrayElement1('romi','mahesh','rahul');
reverseArrayElement1('romi','mahesh',);

const reverseArrayElement2 = function(list){
    try{
        if(!Array.isArray(list)) {
            throw new Error('Only array is allowed.');
        }else if(list.length <3){
            throw new Error('Array length must be 3 or above.');
        };
        let result = list.reverse();
        console.log(`Result of reverseArrayElement2 : ${result}`);
    }catch(error){
        console.log(`Error of reverseArrayElement2 : ${error.message || error}`);
    };
}
reverseArrayElement2([2,3,5]);
reverseArrayElement2(['str3','str2','str1']);
reverseArrayElement2(['str3','str2',]);
