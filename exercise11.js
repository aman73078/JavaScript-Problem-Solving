/*  74. Set All Elements to Largest of First/Last in Array
        Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.    */
const findLargestValue = function(list){
    try{
        let error = '';
        if(!Array.isArray(list)){
            error = 'Only array is allowed.';
        }else if(list.some(n => typeof n !=='number')){
            error = 'Element should be number.';
        };
        if(error) throw new Error(error);
        const firstEle = list[0];
        const lastEle = list[list.length-1];
        if(firstEle > lastEle){
            for(let i=0; i<list.length; i++){
                list[i] = firstEle;
            };
        }else if(lastEle > firstEle){
            for(let i=0; i<list.length;i++){
                list[i] = lastEle;
            };
        };
        console.log(`Result of findLargestValue : ${list}`);
    }catch(error){
        console.log(`Error of findLargestValue : ${error.message || error}`);
    };
};
findLargestValue([20,30,40]);
findLargestValue([80,30,40]);
findLargestValue([80,30,'asdasd']);

/*  75. Create Array with Middle Elements from Two Arrays
        Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.   */
const createArrayMiddleEleFromTwoArray = (list1,list2)=>{
    try{
        let error = '';
        if([list1,list2].some(list => !Array.isArray(list))){
            error = 'Only arrays are allowed.';
        }else if(list1.some(ele => typeof ele !=='number') || list2.some(ele => typeof ele !=='number')){
            error = 'Elements should be numbers.';
        }
        else if([list1,list2].some(list => list.length % 2 === 0)){
            error = 'Length of list1 and list2 must be odd.';
        };
        ;
        if(error) throw new Error(error);
        let result = [];
        [list1,list2].forEach(list => {
            result.push(list[Math.floor(list.length/2)]);
        });
        console.log(`Result of createArrayMiddleEleFromTwoArray : ${JSON.stringify(result)}`);
    }catch(error){
        console.log(`Error of createArrayMiddleEleFromTwoArray : ${error.message || error}`);
    };
};
createArrayMiddleEleFromTwoArray([33,45,39],[1,33,29]);
createArrayMiddleEleFromTwoArray([33,45,39],[1,33,29]);
createArrayMiddleEleFromTwoArray([33,45,39],[1,33,'asdfasdf']);

/*  76. Create Array with First/Last Elements from Array
        Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.   */
const createArrayWithFirstLastEle = function(list){
    try{
        let error = '';
        if(!Array.isArray(list)){
            error = 'Only array is allowed.';
        }else if(list.some(ele => typeof ele !== 'number')){
            error = 'Elements should be numbers.';
        }else if(list.length < 1){
            error = 'Array length must be larger than or equal to 1.';
        };
        if(error) throw new Error(error);
        let result = [list[0],list[list.length-1]];
        console.log(`Result of createArrayWithFirstLastEle : ${JSON.stringify(result)}`);
    }catch(error){
        console.log(`Error of createArrayWithFirstLastEle : ${error.message || error}`);
    };
};
createArrayWithFirstLastEle([22,35,65,29]);
createArrayWithFirstLastEle([22]);
createArrayWithFirstLastEle([]);
createArrayWithFirstLastEle(['ASDFASDF']);

/*  77. Check if Array Contains 1 or 3
        Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.   */
const checkArrayLengthContains1Or3 = function(list){
    try{
        let error = '';
        if(!Array.isArray(list)){
            error = 'Only array is allowed.';
        }else if(list.some(ele => typeof ele !=='number')){
            error = 'Element should be numbers.';
        }else if(list.length > 2){
            error = 'Length should be 2';
        };
        if(error) throw new Error(error);
        let result = [1,3].some(ele => list.includes(ele));
        console.log(`Result of checkArrayLengthContains1Or3 : ${result}`);
    }catch(error){
        console.log(`Error of checkArrayLengthContains1Or3 : ${error.message || error}`);
    };
};
checkArrayLengthContains1Or3([1,33]);
checkArrayLengthContains1Or3([15,3]);
checkArrayLengthContains1Or3([33,43]);
checkArrayLengthContains1Or3([33,43,98]);
checkArrayLengthContains1Or3([33,43,'asdfasd']);

/*  78. Check if Array Does Not Contain 1 or 3
        Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.  */
const checkArrayLengthDoesNotContains1Or3 =(list)=>{
    try{
        let error = '';
        if(!Array.isArray(list)){
            error = 'Only array is allowed.';
        }else if(list.some(ele => typeof ele !=='number')){
            error = 'Element should be numbers.';
        }else if(list.length > 2){
            error = 'Length should be 2';
        };
        if(error) throw new Error(error);
        let result = [1,3].every(ele => !list.includes(ele));
        console.log(`Result of checkArrayLengthDoesNotContains1Or3 : ${result}`);
    }catch(error){
        console.log(`Error of checkArrayLengthDoesNotContains1Or3 : ${error.message || error}`);
    };
}
checkArrayLengthDoesNotContains1Or3([33,45,65]);
checkArrayLengthDoesNotContains1Or3([33,45]);
checkArrayLengthDoesNotContains1Or3([33,1]);
checkArrayLengthDoesNotContains1Or3([3,81]);
checkArrayLengthDoesNotContains1Or3(['asdfasd',81]);

/*  79. Check if Array Contains 30 and 40 Twice
        Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array 
        length should be 0, 1, or 2.  */
const checkArrayContains30Or40Twice = function(list){
    try{
        let error = '';
        if(!Array.isArray(list)){
            error = 'Only array is allowed.';
        }else if(list.some(ele => typeof ele !== 'number')){
            error = 'Element should be numbers.';
        }else if(list.length > 2){
            error = "The array length should be 0, 1, or 2.";
        };
        if(error) throw new Error(error);
        let result = (list[0]===30 && list[1]===30) || (list[0]===40 && list[1]===40);
        console.log(`Result of checkArrayContains30Or40Twice : ${result}`);
    }catch(error){
        console.log(`Error of checkArrayContains30Or40Twice : ${error.message || error}`);
    };
};
checkArrayContains30Or40Twice([30,40]);
checkArrayContains30Or40Twice([30,30]);
checkArrayContains30Or40Twice([40,40]);
checkArrayContains30Or40Twice([40,'adsfasd']);
checkArrayContains30Or40Twice([40,54,98]);

/*  80. Swap First and Last Elements in Array
        Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.  */
const swapFirstLastEleOfArray1 = function(list){
    try{
        let error = '';
        if(!Array.isArray(list)){
            error = "Only array is allowed.";
        }else if(list.length < 1){
            error = 'Array length must be 1 or above.';
        };
        if(error) throw new Error(error);
        let firstEle = list[0];
        let lastEle = list[list.length-1];
        list[0] = lastEle;
        list[list.length-1] = firstEle;
        console.log(`Result of swapFirstLastEleOfArray1 : ${list}`);
    }catch(error){
        console.log(`Error of swapFirstLastEleOfArray1 : ${error.message || error}`);
    };
};
swapFirstLastEleOfArray1([1,3,5,9]);
swapFirstLastEleOfArray1(['kumar',3,5,'rahul']);

const swapFirstLastEleOfArray2 = (list)=>{
    try{
        let error = '';
        if(!Array.isArray(list)){
            error = "Only array is allowed.";
        }else if(list.length < 1){
            error = 'Array length must be 1 or above.';
        };
        if(error) throw new Error(error);
        [list[0],list[list.length - 1]] = [list[list.length - 1], list[0]]
        console.log(`Result of swapFirstLastEleOfArray2 : ${list}`);
    }catch(error){
        console.log(`Error of swapFirstLastEleOfArray2 : ${error.message || error}`);
    };
};

swapFirstLastEleOfArray2([31,30,15,90]);
swapFirstLastEleOfArray2(['Jay',3,5,'Kishan']);
swapFirstLastEleOfArray2([]);
swapFirstLastEleOfArray2('asdffasd');

/*  81. Add Two Digits in a Two-Digit Number
        Write a JavaScript program to add two digits to a given positive integer of length two.  */
const addTwoDigits1 = function(inputNumber){
    try{
        let error = '';
        if(typeof inputNumber !== 'number'){
            error = 'Only number is allowed.';
        }else if(inputNumber < 0){
            error = "Number must be Positive.";
        }else if(String(inputNumber).length !== 2){
            error = 'Give 2 digits number.';
        }
        if(error) throw new Error(error);
        let convertString = String(inputNumber);
        let result = Number(convertString[0]) + Number(convertString[1]);
        console.log(`Result of addTwoDigits1 : ${result}`);
    }catch(error){
        console.log(`Error of addTwoDigits1 : ${error.message || error}`);
    };
};
addTwoDigits1(33);
addTwoDigits1(53);
addTwoDigits1(93);

const addTwoDigits2 = (inputNumber) => {
    try{
        let error = '';
        if(typeof inputNumber !== 'number'){
            error = 'Only number is allowed.';
        }else if(inputNumber < 0){
            error = "Number must be Positive.";
        }else if(String(inputNumber).length !== 2){
            error = 'Give 2 digits number.';
        }
        if(error) throw new Error(error);
        let result = inputNumber % 10 + Math.floor(inputNumber/10);
        console.log(`Result of addTwoDigits2 : ${result}`);
    }catch(error){
        console.log(`Error of addTwoDigits2 : ${error.message || error}`);
    };
};
addTwoDigits2(33);
addTwoDigits2(97);
addTwoDigits2(23);
addTwoDigits2('ASDFASD');
addTwoDigits2(5);

/*  82. Add Two Integers Without Carrying
        Write a JavaScript program to add two positive integers without carrying.  */
const addTwoIntegersWithoutCarring =(num1,num2)=>{
    try{
        if([num1,num2].some(n => typeof n !== 'number')) throw new Error('Only numbers are allowed.');
        let result = 0;
        let x = 1;
        while(num1 > 0 && num2 > 0){
            result += x * ((num1 + num2)%10);
            num1 = Math.floor(num1/10);
            num2 = Math.floor(num2/10);
            x *= 10;
        };
        console.log(`Result of addTwoIntegersWithoutCarring : ${result}`);
    }catch(error){
        console.log(`Error of addTwoIntegersWithoutCarring : ${error.message || error}`); 
    };
};
addTwoIntegersWithoutCarring(922,211);
addTwoIntegersWithoutCarring(988,244);
addTwoIntegersWithoutCarring(9988,9244);

/*  83. Find Longest String in Array
        Write a JavaScript program to find the longest string from a given array of strings.  */
const findLongestString1 = function(list){
    try{
        let error = '';
        if(!Array.isArray(list)){
            error = 'Only array is allowed.';
        }else if(list.some(str => typeof str !== 'string')){
            error = "Elements of 'list' must be strings.";
        }
        if(error) throw new Error(error);
        let longestString = list[0];
        for(let ele of list){
            if(longestString.length < ele.length) longestString = ele;
        }
        console.log(`Result of findLongestString1 : ${longestString}`);
    }catch(error){
        console.log(`Error of findLongestString1 : ${error.message || error}`);
    };
};
findLongestString1(['rahul','mahesh','Lal Bahadur Shashtri','Indira Gandhi','Hema Malini']);
findLongestString1(['Mahendran','Suyash','Balram','Yash','kishor']);
findLongestString1(['Mahendran','Suyash','Balram','Yash',333]);

const findLongestString2 = function(list){
    try{
        let error = '';
        if(!Array.isArray(list)){
            error = 'Only array is allowed.';
        }else if(list.some(str => typeof str !== 'string')){
            error = "Elements of 'list' must be strings.";
        }
        if(error) throw new Error(error);
        let max = list[0].length;
        list.map(val => max = Math.max(max, val.length));
        let result = list.filter(val => max== val.length);
        console.log(`Result of findLongestString2 : ${result}`);
    }catch(error){
        console.log(`Error of findLongestString2 : ${error.message || error}`);
    };
};
findLongestString2(['rahul','mahesh','Lal Bahadur Shashtri','Indira Gandhi','Hema Malini']);
findLongestString2(['Mahendran','Suyash','Balram','Yash','kishor']);
findLongestString2(['Mahendran','Suyash','Balram','Yash',333]);