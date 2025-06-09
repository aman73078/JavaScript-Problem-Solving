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
        const sortedArray = arr.sort(a,b => a-b);
        let element1 = sortedArray[0];

        console.log(`Result of findMaxDifferenceBetweenAdjacentElement1 : ${}`);
    } catch (error) {
        console.log(`Error of findMaxDifferenceBetweenAdjacentElement1 : ${error.message || error}`);
    };
}