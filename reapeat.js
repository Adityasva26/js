function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello")); 

function reverseWords(str) {
    let word = '';
    let reversedStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            word += str[i];
        } else {
            reversedStr = word + ' ' + reversedStr;
            word = '';
        }
    }
    // Add the last word to the reversed string
    reversedStr = word + ' ' + reversedStr;
    return reversedStr.trim(); // Trim any leading/trailing spaces
}

console.log(reverseWords("I am Aditya"));