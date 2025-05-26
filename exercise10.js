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



/*  69. Sum of 3 Elements in Array (Length 3)
        Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3. */