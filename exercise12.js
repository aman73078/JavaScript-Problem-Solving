/*  84. Replace Characters with Next in Alphabet
        Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  
        Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.   */

const replacedByNextCharOfAlphabet1 = function(inputString){
    try{
        let error = '';
        if(!inputString){
            error = `This field is required.`;
        }else if(typeof inputString !== 'string'){
            error = 'Only alphabetical characters are allowed.';
        };
        if(error) throw new Error(error);
        let alphabetLetters = 'abcdefghijklmnopqrstuvwxyz';
        let newString = '';
        for(let char=0;char < inputString.length; char++){
            newString += alphabetLetters[alphabetLetters.indexOf(inputString[char]) + 1];
        };
        console.log(`Result of replacedByNextCharOfAlphabet1 : ${newString}`);
    }catch(error){
        console.log(`Error of replacedByNextCharOfAlphabet1 : ${error.message || error}`);
    };
};
replacedByNextCharOfAlphabet1('rahul');
replacedByNextCharOfAlphabet1('ramanujam');
replacedByNextCharOfAlphabet1(3333);
replacedByNextCharOfAlphabet1('');


const replacedByNextCharOfAlphabet2 = function(inputString){
    try{
        let error = '';
        if(!inputString){
            error = `This field is required.`;
        }else if(typeof inputString !== 'string'){
            error = 'Only alphabetical characters are allowed.';
        };
        if(error) throw new Error(error);
        let alphabetLetters = 'abcdefghijklmnopqrstuvwxyz';
        let newString = inputString.split('').map((char,index) => char = alphabetLetters[alphabetLetters.indexOf(char) + 1])
        console.log(`Result of replacedByNextCharOfAlphabet2 : ${newString.join('')}`);
    }catch(error){
        console.log(`Error of replacedByNextCharOfAlphabet2 : ${error.message || error}`);
    };
};
replacedByNextCharOfAlphabet2('rahul');
replacedByNextCharOfAlphabet2('ramanujam');
replacedByNextCharOfAlphabet2(3333);
replacedByNextCharOfAlphabet2('');

const replacedByNextCharOfAlphabet3 = function(inputString){
    try{
        let error = '';
        if(!inputString){
            error = `This field is required.`;
        }else if(typeof inputString !== 'string'){
            error = 'Only alphabetical characters are allowed.';
        };
        if(error) throw new Error(error);
        let alphabetLetters = 'abcdefghijklmnopqrstuvwxyz';
        let result = inputString;
        for(let char of inputString){
            let nextChar = alphabetLetters[(alphabetLetters.indexOf(char) + 1)];
            result = result.replace(char, nextChar);
        };
        console.log(`Result of replacedByNextCharOfAlphabet3 : ${result}`);
    }catch(error){
        console.log(`Error of replacedByNextCharOfAlphabet3 : ${error.message || error}`);
    };
};
replacedByNextCharOfAlphabet3('rahul');
replacedByNextCharOfAlphabet3('ramanujam');
replacedByNextCharOfAlphabet3(3333);
replacedByNextCharOfAlphabet3('');


/*  85. Split Array into Two Sums Alternating Elements
        Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.  */
const twoPartsSum1 =(integerList)=>{
    try{
        let error = '';
        if(integerList.length === 0){
            error = 'Integer list is empty.';
        }else if(integerList.some(n => typeof n!=='number' || n < 0)){
            error = `Only positive integers are allowed.`;
        };
        if(error) throw new Error(error);
        let firstPart = 0;
        let secondPart = 0;
        for(let i=0; i < integerList.length; i++){
            if(i % 2 === 0) firstPart += integerList[i];
            else secondPart += integerList[i];
        };
        let result = [firstPart, secondPart];
        console.log(`Result of twoPartsSum1 : ${JSON.stringify(result)}`);
    }catch(error){
        console.log(`Error of twoPartsSum1 : ${error.message || error}`);
    };
};
twoPartsSum1([1,2,3,4,5,6]);
twoPartsSum1([1,2,1,2,1,2]);
twoPartsSum1([1,2,1,2,1]);
twoPartsSum1([1,2,1,2,'asd']);
twoPartsSum1([]);


const twoPartsSum2 =(integerList)=>{
    try{
        let error = '';
        if(integerList.length === 0){
            error = 'Integer list is empty.';
        }else if(integerList.some(n => typeof n!=='number' || n < 0)){
            error = `Only positive integers are allowed.`;
        };
        if(error) throw new Error(error);
        let firstPart =  integerList.filter((n,index) => index%2===0).reduce((acc,currVal) => {
                                                return acc + currVal;
                                            },0);
        let secondPart = integerList.filter((n,index) => index%2===1).reduce((acc,currVal) => {
                                                return acc + currVal;
                                            },0);
        let result = [firstPart, secondPart];
        console.log(`Result of twoPartsSum2 : ${JSON.stringify(result)}`);
    }catch(error){
        console.log(`Error of twoPartsSum2 : ${error.message || error}`);
    };
};
twoPartsSum2([1,2,3,4,5,6]);
twoPartsSum2([1,2,1,2,1,2]);
twoPartsSum2([1,2,1,2,1]);
twoPartsSum2([1,2,1,2,'asd']);
twoPartsSum2([]);


/*  86. Find Type of Given Angle
        Write a JavaScript program to find the types of a given angle.  
        Types of angles:
        Acute angle: An angle between 0 and 90 degrees.
        Right angle: An 90 degree angle.
        Obtuse angle: An angle between 90 and 180 degrees.
        Straight angle: A 180 degree angle.   */
function findAngle (inputAngle) {
    try{
        if(typeof inputAngle !== 'number') throw new Error('Angle must be in number.');
        let result = '';
        if(inputAngle > 0 && inputAngle < 90) result = `${inputAngle} is an Acute angle.`;
        else if(inputAngle === 90) result = `${inputAngle} is a Right angle.`;
        else if(inputAngle > 90 && inputAngle < 180) result = `${inputAngle} is a Obtuse angle.`;
        else if(inputAngle === 180) result = `${inputAngle} is a Straight angle.`;

        console.log(`Result of findAngle : ${result}`);
    }catch(error){
        console.log(`Error of findAngle : ${error.message || error}`);
    };
};
findAngle(90);
findAngle(35);
findAngle(155);
findAngle(180);
findAngle('adfasd');

/*  87. Check if Two Arrays Are Similar with One Swap
        Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.  */
