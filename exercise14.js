/*  102. Count Inversions in Array
        Write a JavaScript program to find the number of inversions of a given array of integers. 
        Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j. */
const countInversionsInArray = function(arr){
    try{
        let errorMessage = '';
        if(!Array.isArray(arr)){
            errorMessage = 'Only array is allowed.';
        }else if(arr.some(n => typeof n !== 'number')){
            errorMessage = 'All element of an array must be integer.';
        }
        if(errorMessage) throw new Error(errorMessage);
        let inversionPairs = [];
        let i=0;
        for(let i = 0; i< arr.length-1; i++){
            for(let j=i+1; j<arr.length;j++){
                if(i<j){
                    if(arr[i] > arr[j]){
                        inversionPairs.push(`(${arr[i]}, ${arr[j]})`);
                    };
                }
            }
        };
        console.log(`Result of countInversionsInArray : count :- ${inversionPairs.length} : pairs :- ${inversionPairs}`);
    }catch(error){
        console.log(`Error of countInversionsInArray : ${error.message || error}`);
    };
};
countInversionsInArray([2,1,3,5]);
countInversionsInArray([4,3,2,1]);
countInversionsInArray([1,2,3,45]);

/*  103. Max Integer by Removing One Digit
        Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.  */
