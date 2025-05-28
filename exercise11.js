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