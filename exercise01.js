// 1. Display Current Day and Time
    // Write a JavaScript program to display the current day and time in the following format.  
    // Sample Output : Today is : Tuesday.
    // Current time is : 10 PM : 30 : 38

const displayCurrentDayTime =()=>{
    const currentDay = new Date();
    const daysList = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
    console.log(`Today is : ${daysList[currentDay.getDay()]}`);
    console.log(`Current time is : ${currentDay.getHours() > 12 ? currentDay.getHours() - 12 +' PM' : currentDay.getHours() + ' AM' } : ${currentDay.getMinutes()} : ${currentDay.getSeconds()}`);
}

displayCurrentDayTime()

// 3. Get Current Date in Various Formats
//      Write a JavaScript program to get the current date.  
//      Expected Output :
//      mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const dateFormat = function(){
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let day = currentDate.getDay();
    console.log(`mm-dd-yyyy : ${month}-${day}-${year}`);
    console.log(`mm/dd/yyyy : ${month}/${day}/${year}`);
    console.log(`dd/mm/yyyy : ${day}/${month}/${year}`);
}

dateFormat()


// 4. Calculate Area of Triangle (Sides: 5, 6, 7)
//      Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

function areaOfTriangle(a,b,c){
    try{
        let list = [a,b,c];
        for(let i of list){
            if(typeof i !=='number'){
                throw `Check the type of ${i}. String is not allowed`;
            }
        }
        let s = (a+b+c)/2;
        const area = s*(s-a)*(s-b)*(s-c);
        let finalArea = Math.sqrt(area);
        console.log(`Area of Triangle : ${finalArea}`);
    }catch(error){
         console.log(error);
    }
}

areaOfTriangle(5,6,7);
areaOfTriangle('5',6,7);
areaOfTriangle(5,'6',7);
areaOfTriangle(5,6,'7');