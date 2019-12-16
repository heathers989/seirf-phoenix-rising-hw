//Verbal Questions

//1. The parameter is an input that modifies the function. The argument is the value of
//  the parameter that is specified when the function is called.

//2. console.log() cannot produce the output value of a function, while return can.

//Palindrome
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

  //Sum Array
 const sumArray = (total) => {
    let numbers = 0;
    for(let i=0; i < total.length; i++) {
        numbers += total[i];
    }
    return numbers;
 };
 console.log(sumArray([1, 2, 3, 4, 5, 6]));

 //Prime Numbers

 const checkPrime = (primeTest) => {
    for(let i = 2; i <= Math.sqrt(primeTest); i++) {
       if (primeTest % i === 0) {
           return false;
       } 
    }
    return true;
 };
 console.log(checkPrime(97));

 const printPrimes = (maxNum) => {
 for (let i = 0; i <= maxNum; i++) {
     if (checkPrime(i)){
        console.log(i);
     }
 }
 };

 console.log(printPrimes(98));

 //rock paper scissors
 //create array for options
let rpsArr = ["rock", "paper", "scissors"];
//create function to generate random array response
 const RPS = () => {
     //create a variable to store the index position
    let index = Math.floor(Math.random() * rpsArr.length);
    //log the index position
   console.log(index)
   //return the array index position
   return rpsArr[index]
 }
 let computersMove = RPS();
let usersMove = RPS();

const rockPaperScissors = (computersMove, usersMove) => {
    console.log ('Computer threw ' + computersMove);
    console.log ('User threw ' + usersMove );
    if (computersMove === usersMove){
        console.log('It is a tie!');
        //if computer throws rock and user throws paper
    } else if (computersMove === rpsArr[0] && usersMove === rpsArr[1]) {
        //user wins
        console.log(rpsArr[1] + ' beats '+ rpsArr[0] + ', user wins');
        //if computer throws rock and user throws scissor
    } else if (computersMove === rpsArr[0] && usersMove === rpsArr[2]) {
        //computer wins
        console.log(rpsArr[0] + ' beats '+ rpsArr[2] + ', computer wins');
        //if computer throws paper and user throws rock
    } else if (computersMove === rpsArr[1] && usersMove === rpsArr[0]){
        //computer wins
        console.log(rpsArr[1] + ' beats '+ rpsArr[0] + ', computer wins');
        //if computer throws paper and user throws scissors
    } else if (computersMove === rpsArr[1] && usersMove === rpsArr[2]){
        //user wins
        console.log(rpsArr[2] + ' beats '+ rpsArr[1] + ', user wins');
        //if computer throws scissors and user throws rock
    } else if (computersMove === rpsArr[2] && usersMove === rpsArr[0]){
        //user wins
        console.log(rpsArr[0] + ' beats '+ rpsArr[2] + ', user wins');
        //if computer throws scissors and user throws paper
    } else if (computersMove === rpsArr[2] && usersMove === rpsArr[1]) {
        //computer wins
        console.log(rpsArr[2] + ' beats '+ rpsArr[1] + ', computer wins');
    }
}
//rock is zero, paper is 1, scissors is 2
rockPaperScissors(computersMove, usersMove);
