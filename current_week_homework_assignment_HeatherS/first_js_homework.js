 //Section 1
 /*  1. The acronym DRY stands for "Don't repeat yourself".
    We should pay attention to writing DRY code so that our code is easier to read and more efficient.
    Any function that can merge two or more repeating pieces of code into one block of cod will help 
    to keep code DRY, such as a for loop, which allows an initial expression and a while expression to
    be established in the same section of code, or to print sequental output results of multiple lines
    without requesting each line/result seperately.
    2. "Var" variables can be updated and re-declared within its scope
       "let" variables can be updated but not re-declared
       "const" variables can neither be updated nor re-declared.
*/

//Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
console.log(a + b == c);
console.log(a * a == d);
console.log(e != 'Kevin');
console.log(48 <= '48');
console.log(f != e);

let g = 0;
console.log(g);
g = b+c;
console.log(g);
//Used let so the variable g could be updated.
//if const let or var are not used and the variable is simply declared as g = 0 there is no error. 
//If using const instead of let, gives TypeError: Assignment to constant variable.
//If 10 = g is written, error is "SyntaxError: Invalid left-hand side in assignment"

//bonus challenge:
//console.log (a < (b || f ) == !f && e < c);
// there's no way for e_c to evaluate for true using < > or ==. Expression would evaluate to true
// only if e != c

//Section 3
/*while (true) {
	console.log('Do not run this loop');
}
The above would be an infinite loop because infinite loops run as long as the expression in the () is true and
there's nothing in this loop that would change the expression to false.
*/

/* const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
This loop would also be an infinite loop because const variables cannot be updated. If runProgram was a let 
variable the loop would not be infinite
*/


// create variable letters with the string value A
// create variable i with the value 0
let letters = "A";
let i = 0;

//starts a while loop that will run as long as i is less than 20
while (i < 20) {
    //increase the value of the variable letters plus A
    letters += "A";
    //increase the value of the variable i in increments of 1
    i++;
    //closes the while loop and the code inside will continue running until the while condition is false
}
//print the value of the variable letters
console.log(letters);
//pre-test: I think the program will print the letter A 20 times
/* post-test: the letter A printed 21 times. Upon re-evaluation, since letters gets incremented before i and 
there's no limit or condition that would stop A from incrementing, this makes sense. Have to keep in mind the
order in which statements are evaluated.
*/      

//Section 4
/* A for loop will accomplish the same thing as a while loop. In a while loop, the variable is declared
outside of the loop, the while conditions are established in the inital () at the beginning and the 
incrementation/repeating conditions are established inside the loop. In a for loop, all of those pieces/
run conditions are condensed into one line at the beginning of the loop instead in the initial (). */

/* The first part of the control panel is the initial condition, it usually establishes an intial value for a 
 variable.
The second part of the control panel is the while condition, as long as this condition is true, the loop 
will continue to run.
The third part of the control panel is the repeating expression, it runs at the end of the loop and is usually
instructions on incrementing the starting value. */

//for loop II
for (let i = 0; i < 1000; i++) {
	console.log(i);
}

/* Bonus challenge: the \ in the string keeps the ' in "today's" and "yesterday's" from being read as closing
the string. Without the \ , a syntax error would be returned. 
The forward slash / is just read as part of the string so a syntax error would still occur with it inserted in
the same place as the backslash.
 */

 //for loop in reverse:
 for (let i = 999; i >= 0; i--) {
	console.log(i);
}

//More counting
for (let i = 1; i <= 10; i++) {
	console.log('The value of i is: ' + i + ' of 10');
}

//bonus challenge
for (let i = 1; i <= 10; i++) {
    console.log(`The value of i is: ${i} of 10`);
}

//Iteration

const starWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for(let i = 0; i < starWars.length; i++) {
    console.log(starWars[i]);
}

for(let i = 0; i < starWars.length; i++) {
    console.log(starWars[i] + " " + i );
}

//bonus
for(let i = 0; i < starWars.length; i+=2) {
    console.log(starWars[i]);
}



