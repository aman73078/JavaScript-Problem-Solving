/*  102. Count Inversions in Array
        Write a JavaScript program to find the number of inversions of a given array of integers. 
        Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j. */
const countInversionsInArray = function (arr) {
    try {
        let errorMessage = '';
        if (!Array.isArray(arr)) {
            errorMessage = 'Only array is allowed.';
        } else if (arr.some(n => typeof n !== 'number')) {
            errorMessage = 'All element of an array must be integer.';
        }
        if (errorMessage) throw new Error(errorMessage);
        let inversionPairs = [];
        let i = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (i < j) {
                    if (arr[i] > arr[j]) {
                        inversionPairs.push(`(${arr[i]}, ${arr[j]})`);
                    };
                }
            }
        };
        console.log(`Result of countInversionsInArray : count :- ${inversionPairs.length} : pairs :- ${inversionPairs}`);
    } catch (error) {
        console.log(`Error of countInversionsInArray : ${error.message || error}`);
    };
};
countInversionsInArray([2, 1, 3, 5]);
countInversionsInArray([4, 3, 2, 1]);
countInversionsInArray([1, 2, 3, 45]);

/*  103. Max Integer by Removing One Digit
        Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.  */
const findMaxIntergerByRemovingOneDigit = function (inputNumber) {
    try {
        if (typeof inputNumber !== 'number') throw new Error("Only numbers are allowed.");
        let maxNumber = 0;
        let convertedIntoString = inputNumber.toString();
        for (let i = 0; i < convertedIntoString.length; i++) {
            for (let j = i + 1; j <= convertedIntoString.length; j++) {
                if (convertedIntoString.length !== convertedIntoString.substring(i, j).length && (Number(convertedIntoString.substring(i, j)) > maxNumber)) {
                    maxNumber = Number(convertedIntoString.substring(i, j));
                };
            };
        };
        console.log(`Result of findMaxIntergerByRemovingOneDigit : ${maxNumber}`);
    } catch (error) {
        console.log(`Error of findMaxIntergerByRemovingOneDigit : ${error.message || error}`);
    };
};
findMaxIntergerByRemovingOneDigit(38383);
findMaxIntergerByRemovingOneDigit(9295);
findMaxIntergerByRemovingOneDigit(793215);
findMaxIntergerByRemovingOneDigit(100);
findMaxIntergerByRemovingOneDigit(1245);
findMaxIntergerByRemovingOneDigit('rahul');

/*  104. Find Pair with Closest Absolute Difference
        Write a JavaScript program to find two elements of an array such that their absolute difference is not larger than a given integer. However, it is as close as possible to the integer.  */
function findPairWithClosestAbsoluteDiff(arr, inputNumber) {
    try {
        let errorMessage = '';
        if (!Array.isArray(arr) || arr.some(n => typeof n !== 'number')) {
            errorMessage = 'Only array is allowed which contains all integers.';
        } else if (typeof inputNumber !== 'number') {
            errorMessage = "'inputNumber must be a number.'";
        }
        if (errorMessage) throw new Error(errorMessage);
        let maxDifference = -1;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                let difference = Math.abs(arr[i] - arr[j]);
                if (difference < inputNumber) {
                    maxDifference = Math.max(maxDifference, difference)
                }
            }
        }
        console.log(`Result of findPairWithClosestAbsoluteDiff : ${maxDifference}`);
    } catch (error) {
        console.log(`Error of findPairWithClosestAbsoluteDiff : ${error.message || error}`);
    };
};

findPairWithClosestAbsoluteDiff([29,2,35,22,4,39],45);
findPairWithClosestAbsoluteDiff([29,2,35,22,4,39],5);
findPairWithClosestAbsoluteDiff([12, 10, 33, 34], 10);
findPairWithClosestAbsoluteDiff([12, 10, 33, 34], 24);
findPairWithClosestAbsoluteDiff([12, 10, 33, 34], 40);


/*  105. Replace Number with Digit Sum Until Single Digit
        Write a JavaScript program to find the number of times to replace a given number with the sum of its digits. This is until it converts to a single-digit number.  */
