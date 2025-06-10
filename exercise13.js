/*  91. Find Max Sum of k Consecutive Numbers in Array
        Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.   */
function findMaxSumOfKConsecutiveNumbersInArray(arr) {
    try {
        if (!Array.isArray(arr)) throw new Error('Only arr is allowed.');
        if (arr.some(n => typeof n !== 'number')) throw new Error("All element of an array must be number.");
        let sortedArray = arr.sort((a, b) => a - b);
        let max_sum = sortedArray[0] + sortedArray[1];
        for (let i = 0; i < sortedArray.length; i++) {
            let sum = arr[i] + arr[i + 1];
            if ((sum > max_sum)) {
                max_sum = sum;
            };
        };
        console.log(`Result of findMaxSumOfKConsecutiveNumbersInArray : ${max_sum}`);
    } catch (error) {
        console.log(`Error of findMaxSumOfKConsecutiveNumbersInArray : ${error.message || error}`);
    };
};
findMaxSumOfKConsecutiveNumbersInArray([1, 3, 2, 14, 5]);
findMaxSumOfKConsecutiveNumbersInArray([12, 39, 22, 4, 15]);
findMaxSumOfKConsecutiveNumbersInArray([2, 9, 2, 4, 6]);
findMaxSumOfKConsecutiveNumbersInArray([2, 9, 2, 4, 'asdfasd']);
findMaxSumOfKConsecutiveNumbersInArray("[2,9,2,4,'asdfasd']");

/*  92. Find Max Difference Between Adjacent Elements
        Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.  */
const findMaxDifferenceBetweenAdjacentElement1 = function (arr) {
    try {
        let error = '';
        if (!Array.isArray(arr)) {
            error = "Only arr is allowed.";
        } else if (!arr.every(n => typeof n === 'number')) {
            error = "All element of an array must be number.";
        };
        if (error) throw new Error(error);
        let sortedArray = arr.sort((a, b) => a - b);
        let max_difference = 0;
        for (let i = 0; i < sortedArray.length; i++) {
            let difference = Math.abs(sortedArray[i] - sortedArray[i + 1]);
            if (difference > max_difference) {
                max_difference = difference;
            };
        };
        console.log(`Result of findMaxDifferenceBetweenAdjacentElement1 : ${max_difference}`);
    } catch (error) {
        console.log(`Error of findMaxDifferenceBetweenAdjacentElement1 : ${error.message || error}`);
    };
};

findMaxDifferenceBetweenAdjacentElement1([2, 9, 4, 7, 3, 8]);
findMaxDifferenceBetweenAdjacentElement1([12, 19, 4, 7, 93, 82]);
findMaxDifferenceBetweenAdjacentElement1([12, 19, 4, 7, 93, 'asdfasd']);
findMaxDifferenceBetweenAdjacentElement1('[12,19,4,7,93]');

/*  93. Find Max Difference Among All Pairs in Array
        Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.  */
const findMaxDifferenceAmongAllPairs = (arr) => {
    try {
        let error = '';
        if (!Array.isArray(arr)) {
            error = "Only arr is allowed.";
        } else if (!arr.every(n => typeof n === 'number')) {
            error = "All element of an array must be number.";
        };
        if (error) throw new Error(error);
        let max_difference = 0;
        for (let i = 0; i < arr.length-1; i++) {
            let difference = Math.abs(arr[i] - arr[i + 1]);
            if (difference > max_difference) {
                max_difference = difference;
            };
        };
        console.log(`Result of findMaxDifferenceAmongAllPairs : ${max_difference}`);
    } catch (error) {
        console.log(`Error of findMaxDifferenceAmongAllPairs : ${error.message || error}`);
    };
};
findMaxDifferenceAmongAllPairs([2, 4, 9, 11, 21]);
findMaxDifferenceAmongAllPairs([25, 4, 23, 92, 58]);
findMaxDifferenceAmongAllPairs(['asdfasd', 4, 23, 92, 58]);
findMaxDifferenceAmongAllPairs('[33,4,23,92,58]');

/*  94. Find Most Frequent Number in Array
        Write a JavaScript program to find the number appearing most frequently in a given array of integers. */
const findMostFrequentNumber = function (arr) {
    try {
        let error = '';
        if (!Array.isArray(arr)) {
            error = "Only arr is allowed.";
        } else if (!arr.every(n => typeof n === 'number')) {
            error = "All element of an array must be number.";
        };
        if (error) throw new Error(error);
        let max_frequent = 0;
        let max_freaquently_number = 0;
        for (let i = 0; i < arr.length; i++) {
            let frequent = arr.filter(n => n === arr[i]).length;
            if (frequent > max_frequent) {
                max_frequent = frequent;
                max_freaquently_number = arr[i];
            };
        };
        console.log(`Result of findMostFrequentNumber : ${max_freaquently_number} : Frequent : ${max_frequent}`);
    } catch (error) {
        console.log(`Error of findMostFrequentNumber : ${error.message || error}`);
    };
};
findMostFrequentNumber([33, 2, 33, 45, 33, 93, 2, 33]);
findMostFrequentNumber([1, 3, 4, 1, 56, 1, 2, 3, 4, 1]);
findMostFrequentNumber([1, 3, 4, 1, 56, 1, 2, 3, 4, 'asdfasd']);
findMostFrequentNumber('[1,3,4,1,56,1,2,3,4,33]');

/*  95. Replace Numbers with Specified Value in Array
        Write a JavaScript program to replace all numbers with a specified number in an array of integers. */
function replaceAllNumbersOfAnArrayWithANumber(arr, oldValue, newValue) {
    try {
        let error = '';
        if (!Array.isArray(arr)) {
            error = "Only arr is allowed.";
        } else if (!arr.every(n => typeof n === 'number')) {
            error = "All element of an array must be number.";
        }
        if ([newValue, oldValue].some(n => typeof n !== 'number')) {
            error = 'newValue and oldValue must be number.';
        };
        if (error) throw new Error(error);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === oldValue) arr[i] = newValue;
        };
        console.log(`Result of replaceAllNumbersOfAnArrayWithANumber : ${arr}`);
    } catch (error) {
        console.log(`Error of replaceAllNumbersOfAnArrayWithANumber : ${error.message || error}`);
    };
};
replaceAllNumbersOfAnArrayWithANumber([3, 5, 3, 92, 3, 34], 3, 77);
replaceAllNumbersOfAnArrayWithANumber([98, 5, 98, 53, 21, 98], 98, 11);
replaceAllNumbersOfAnArrayWithANumber(['asdfsad', 5, 74, 53, 21, 93], 75, 3);
replaceAllNumbersOfAnArrayWithANumber('[33,5,74,53,21,93]', 21, 3);

/*  96. Sum of Absolute Differences of Consecutive Numbers
        Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.  */
const sumOfAbsoluteDifferenceOfConsecutiveNumbers = (arr) => {
    try {
        let error = '';
        if (!Array.isArray(arr)) {
            error = "Only arr is allowed.";
        } else if (!arr.every(n => typeof n === 'number')) {
            error = "All element of an array must be number.";
        }
        if (error) throw new Error(error);
        arr = arr.sort((a,b) => a-b);
        let sum = 0;
        for(let i=0;i<arr.length-1; i++){
            sum += Math.abs(arr[i] - arr[i+1]);
        }
        console.log(`Result of sumOfAbsoluteDifferenceOfConsecutiveNumbers : ${sum}`);
    } catch (error) {
        console.log(`Error of sumOfAbsoluteDifferenceOfConsecutiveNumbers : ${error.message || error}`);
    };
};
sumOfAbsoluteDifferenceOfConsecutiveNumbers([1,2,3,4,5]);
sumOfAbsoluteDifferenceOfConsecutiveNumbers([3,1,35,4,15]);
sumOfAbsoluteDifferenceOfConsecutiveNumbers([3,1,35,4,'asdfda']);
sumOfAbsoluteDifferenceOfConsecutiveNumbers("[3,1,35,4,'asdfda']");

/*  97. Shortest String to Convert into Palindrome
        Write a JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it.  */
function convertShortestStringIntoPalindrome(arr){
    try{
        if(arr.some(str => typeof str !=='string')) throw new Error("Array must be contained only strings.");
        let str_length = 0;
        let smallestString = arr[0];
        for(let i=0;i<arr.length-1;i++){
            console.log(arr[i],Math.min(arr[i].length,arr[i+1].length));
            str_length = Math.min(arr[i].length,arr[i+1].length);
            smallestString = [arr[i],arr[i+1]].filter(str => str.length === str_length)[0];
        }
        console.log(`Result of convertShortestStringIntoPalindrome : ${smallestString}`);
    }catch(error){
        console.log(`Error of convertShortestStringIntoPalindrome : ${error.message || error}`);
    };
};
convertShortestStringIntoPalindrome(['rahul','kishor','ant']);
convertShortestStringIntoPalindrome(['rahul','kishor','ant','elephant']);
convertShortestStringIntoPalindrome(['rahul','kishor','apple','pineapple','elephant']);