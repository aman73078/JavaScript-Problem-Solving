// 2. Print Current Window Contents
//    Write a JavaScript program to print the current window contents. 
function onClick(){
    window.print();
}

// currentWindowContent()


// 10. Multiplication and Division (User Input)
//     Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).

const multiplicationAndDivision=(task)=>{
    try{
        const result = document.getElementById('result');
        let inputElement = document.querySelectorAll('input');
        const num1 = parseFloat(inputElement[0].value);
        const num2 = parseFloat(inputElement[1].value);
        if(task == 'multiplication'){
            result.textContent = `Multiplication of ${num1} and ${num2} = ${num1*num2}`;
        }else if(task == 'division'){
            result.textContent = `Division of ${num1} and ${num2} = ${num1/num2}`;
        }
    }catch(error){
        console.log(`Error : ${error}`);
    }
}

// 12. Get Current Website URL
//     Write a JavaScript program to get the website URL (loading page).
const getCurrentWebsiteUrl=()=>{
    let currentUrl = window.location.href;
    let ele = document.getElementById('currentUrl');
    ele.textContent = currentUrl;
    console.log('Current URL is : ',currentUrl);
}
getCurrentWebsiteUrl();

