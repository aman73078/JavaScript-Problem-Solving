var name = 'my name aman tripathi';
var name1 = 'my name is mahendran';

//output: 'tripathi aman name my';

function reverse(value) {
    let convertedList = '';
    let data = '';
    let finalResult = '';
    for (let i = value.length - 1; i >= 0; i--) {
        if (value[i] == ' ') {
            for (let j = convertedList.length - 1; j >= 0; j--) {
                if (convertedList[j] !== 'undefined') {
                    data += convertedList[j];
                }
            }
            finalResult += data + " ";
            convertedList = ''
        }
        else {
            convertedList += value[i];
            data = ''
        }
    }
    for (let i = 0; i <= (value.length - finalResult.length); i++) {
        finalResult += value[i];
    }
    console.log('aman-->', finalResult)
}
reverse(name);
reverse(name1);