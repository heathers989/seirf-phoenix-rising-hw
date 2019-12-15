//Verbal Questions

//1. The parameter is an input that modifies the function. The argument is the value of
//  the parameter that is specified when the function is called.

//2. console.log() cannot produce the output value of a function, while return can.

const checkPalindrome = (word) => {
    const reversed = word.toLowerCase().split('').reverse().join('')
    if(reversed === word.toLowerCase()) {
        return true;
   } else {
        return false;
    }
 };
 console.log(checkPalindrome("Noon"));
 console.log(checkPalindrome("Borscht"));