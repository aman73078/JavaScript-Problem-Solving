// 5. Rotate String 'w3resource' Periodically
//      Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by ?
//      periodically removing one letter from the string end and attaching it to the front.

// 1st Way
function rotatePeriodically1(inputString){
    try{
        if(typeof inputString !== 'string' || !inputString){
            throw 'Only strings are allowed.'
        }
        let reversedString = '';
        for(let i=inputString.length-1; i>=0;i--){
            reversedString += inputString[i];
        }
        console.log(`reversedString1 : ${reversedString}\n`);
    }catch(error){
        console.log(`Error : ${error}\n`);
    }
}

rotatePeriodically1('w3resource')
rotatePeriodically1(322323)

// 2nd Way
const rotatePeriodically2 = function(inputString){
    try{
        if(typeof inputString !== 'string' || !inputString){
            throw 'Only strings are allowed.'
        }
        let reversedString = inputString.split('').reverse().join('')
        console.log(`reversedString2 : ${reversedString}\n`);    
    }catch(error){
        console.log(`Error : ${error}\n`);
    }
    
}

rotatePeriodically2('w3resource')
rotatePeriodically2(322323)


// 6. Check Leap Year (Gregorian Calendar)
//      Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  
// Note:- A year is a leap year if it's divisible by 4, unless it's also divisible by 100 but not by 400.

const checkLeapYear = function(year){
    try{    
        if(!year || typeof year !== 'number'){
            throw 'Please provide a numeric value.';
        }
        let result = year % 4 === 0 && year % 100 === 0 && year % 400 !== 0 ? `Yes ${year} is a leap year` : `${year} is not a leap year.`;
        console.log(`${result}\n`);
    }catch(error){
        console.log(`Error : ${error}\n`);
    }
}

checkLeapYear(2000);
checkLeapYear(2005);
checkLeapYear('1800');

// 7. Find Years When Jan 1 is Sunday (2014?2050)
//      Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  

function findYearWhenJan1IsSunday(){
    for(let startYear=2014; startYear<=2050;startYear++){
        let currentDate = new Date(startYear,0,2);
        let day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][currentDate.getDay()]
        if(day==='Sunday'){
            console.log(`Sunday is on : ${currentDate}`);
        }
    }
}
findYearWhenJan1IsSunday()