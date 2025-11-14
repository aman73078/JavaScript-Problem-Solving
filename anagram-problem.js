// Problem:- Anagram
// input- ['listen', 'silent','earth','heart','cinema','iceman','eat','bat']
// output- [['listen','silent'],['earth','heart'],['cinema','iceman'], ['eat'],['bat']];
const data = ['listen', 'silent', 'earth', 'heart', 'cinema', 'iceman', 'eat', 'bat'];
function checkAnagram(data) {
    let finalResult = [];
    for (let i = 0; i < data.length; i++) {
        const word1 = data[i].split("").sort().join("");
        inner: for (let j = 1; j < data.length; j++) {
            let word2 = data[j].split("").sort().join("");
            const exist = finalResult.find(item => [data[i], data[j]].every(word => item.includes(word)))
            if (word1 === word2 && data[i] !== data[j] && !exist) {
                finalResult.push([data[i], data[j]]);
                break inner;
            }
        }

    }
    for (let i = 0; i < data.length; i++) {
        if (!finalResult.some(item => item.includes(data[i]))) {
            finalResult.push([data[i]]);
        }
    }
    console.log('anagram1-->',finalResult);
}
checkAnagram(data)

/*                                        OR                                                */

function anagram(data){
    let anagramMap = new Map();
    for(let word of data){
        let sortedWord = word.split("").sort().join("");
        if(anagramMap.has(sortedWord)){
            anagramMap.get(sortedWord).push(word);
        }else{
            anagramMap.set(sortedWord, [word]);
        }
    }
    let finalResult = Array.from(anagramMap.values());
    console.log('anagram2-->',finalResult);
}
anagram(data)