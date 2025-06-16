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
        for (let i = 0; i < arr.length - 1; i++) {
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
        arr = arr.sort((a, b) => a - b);
        let sum = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            sum += Math.abs(arr[i] - arr[i + 1]);
        }
        console.log(`Result of sumOfAbsoluteDifferenceOfConsecutiveNumbers : ${sum}`);
    } catch (error) {
        console.log(`Error of sumOfAbsoluteDifferenceOfConsecutiveNumbers : ${error.message || error}`);
    };
};
sumOfAbsoluteDifferenceOfConsecutiveNumbers([1, 2, 3, 4, 5]);
sumOfAbsoluteDifferenceOfConsecutiveNumbers([3, 1, 35, 4, 15]);
sumOfAbsoluteDifferenceOfConsecutiveNumbers([3, 1, 35, 4, 'asdfda']);
sumOfAbsoluteDifferenceOfConsecutiveNumbers("[3,1,35,4,'asdfda']");

/*  97. Shortest String to Convert into Palindrome
        Write a JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it.  */
function convertShortestStringIntoPalindrome(arr) {
    try {
        if (!Array.isArray(arr)) throw new Error("'arr' must be an array.")
        if (arr.some(str => typeof str !== 'string')) throw new Error("Array must be contained only strings.");
        let shortest_string = arr[0];
        // let shortest_string_length = 0;
        let shortest_string_length = arr[0].length;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i].length < shortest_string_length) {
                shortest_string_length = arr[i].length;
                shortest_string = arr[i];
            };
        };
        let resultPalindrome = shortest_string + shortest_string.split('').reverse().join("");
        console.log(`Result of convertShortestStringIntoPalindrome : ${resultPalindrome} : Length : ${shortest_string_length}`);
    } catch (error) {
        console.log(`Error of convertShortestStringIntoPalindrome : ${error.message || error}`);
    };
};
convertShortestStringIntoPalindrome(['rahul', 'kishor', 'ant']);
convertShortestStringIntoPalindrome(['manojkumar', 'kishor', 'ant', 'elephant']);
convertShortestStringIntoPalindrome(['yashvant', 'kishor', 'apple', 'pineapple', 'elephant']);
convertShortestStringIntoPalindrome(['yashvant', 'kishor', 'apple', 'pineapple', 3333]);
convertShortestStringIntoPalindrome("['yashvant','kishor','apple','pineapple',3333]");

/*  98. Change Case Minimally for Upper or Lower Case
        Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case. 
        Fox example "Write" will be write and "PHp" will be "PHP" */
const changeCaseMinimallyForUpperOrLower = (inputString) => {
    try {
        let errorMessage = '';
        if (!inputString.length) {
            errorMessage = "You provided empty string.";
        }
        if (typeof inputString !== 'string') {
            errorMessage = "'inputString must be a string'";
        };
        if (errorMessage) throw new Error(errorMessage);
        let upperCaseCount = 0;
        let lowerCaseCount = 0;
        for (let i = 0; i < inputString.length; i++) {
            if (/[A-Z]/.test(inputString[i])) {
                upperCaseCount++;
            } else {
                lowerCaseCount++;
            };
        };
        let result = upperCaseCount > lowerCaseCount ? inputString.toUpperCase() : inputString.toLowerCase();
        console.log(`Result of changeCaseMinimallyForUpperOrLower : ${result}`);
    } catch (error) {
        console.log(`Error of changeCaseMinimallyForUpperOrLower : ${error.message || error}`);
    };
};
changeCaseMinimallyForUpperOrLower('Write');
changeCaseMinimallyForUpperOrLower('PHp');
changeCaseMinimallyForUpperOrLower(33);
changeCaseMinimallyForUpperOrLower('');

/*  99. Check if String Can Rearrange to Match Another
        Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string.  */
function checkTwoStringEqualAfterRearranging(inputString1, inputString2) {
    try {
        let errorMessage = '';
        if ([inputString1, inputString2].some(str => typeof str !== 'string')) {
            errorMessage = 'Only strings are allowed.';
        } else if ([inputString1, inputString2].some(str => !str.length)) {
            errorMessage = 'Empty strings are not allowed.';
        };
        if (errorMessage) throw new Error(errorMessage);
        inputString1 = inputString1.split("").sort((a, b) => a - b).join("");
        inputString2 = inputString2.split("").sort((a, b) => a - b).join("");
        let result = true;
        for (let i = 0; i < Math.max(inputString1.length, inputString2.length); i++) {
            if (inputString1[i] !== inputString2[i]) result = false;
        };
        console.log(`Result of checkTwoStringEqualAfterRearranging : ${inputString1}, ${inputString2} :- ${result}`);
    } catch (error) {
        console.log(`Error of checkTwoStringEqualAfterRearranging : ${error.message || error}`);
    };
};
checkTwoStringEqualAfterRearranging('kishor', 'rokish');
checkTwoStringEqualAfterRearranging('manoj', 'apple');
checkTwoStringEqualAfterRearranging(33, 'apple');
checkTwoStringEqualAfterRearranging('gjh', '');

/*  100. Check if Arrays Share at Least One Common Element
         Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers.  */
const findAtLeastOneCommonEle = function (arr1, arr2) {
    try {
        let errorMessage = '';
        if ([arr1, arr2].some(arr => !Array.isArray(arr))) {
            errorMessage = 'Only arrays are allowed.';
        } else if (arr1.some(n => typeof n !== 'number') || arr2.some(n => typeof n !== 'number')) {
            errorMessage = 'All elements of an array must be integer.';
        };
        if (errorMessage) throw new Error(errorMessage);
        let result = false;
        for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) if (arr1.includes(arr2[i])) result = true;
        console.log(`Result of findAtLeastOneCommonEle : ${result}`);
    } catch (error) {
        console.log(`Error of findAtLeastOneCommonEle : ${error.message || error}`);
    };
};
findAtLeastOneCommonEle([3, 45, 23, 1], [98, 77, 32, 1, 88]);
findAtLeastOneCommonEle([3, 45, 23, 1], [98, 77, 32, 11, 45]);
findAtLeastOneCommonEle([3, 45, 23, 1], [983, 774, 322, 111, 355]);
findAtLeastOneCommonEle([3, 45, 23, 1], [983, 774, 322, 111, 'asdfasd']);
findAtLeastOneCommonEle([3, 45, 23, 1], "[983,774,322,111,'asdfasd']");


/*  101. Check Latin Letters with No Adjacent Upper/Lower Case
        Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.  */

function checkLatinLetters(inputString) {
    try {
        if (typeof inputString !== 'string') throw new Error("'inputString' must be a string.");
        if (inputString.length <= 0) throw new Error("Empty string is not allowed.");
        let upperCaseCount = 0;
        let lowerCaseCount = 0;
        let result = true;
        for (let i = 0; i < inputString.length - 1; i++) {
            if ((inputString.toUpperCase().includes(inputString[i]) && inputString.toUpperCase().includes(inputString[i + 1])) || (inputString.toLowerCase().includes(inputString[i]) && inputString.toLowerCase().includes(inputString[i + 1]))) {
                result = false;
            };
        };
        console.log(`Result of checkLatinLetters : ${result}`);
    } catch (error) {
        console.log(`Error of checkLatinLetters : ${error.message || error}`);
    };
};
checkLatinLetters('abc');
checkLatinLetters('aBc');
checkLatinLetters('aBcDe');
checkLatinLetters('aBcDE');
checkLatinLetters('ffGfGe');
checkLatinLetters('AAbCd');
checkLatinLetters(3333);
checkLatinLetters('');