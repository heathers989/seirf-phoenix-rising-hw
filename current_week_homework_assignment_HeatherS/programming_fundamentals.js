//Common programming principles

// DRY - Don't repeat yourself. Reuse existing code instead of repeating the same code multiple times.
// KISS - Keep the code simple for the sake of readability, sustainability and understandability.
// Avoid creating a YAGNI - Don't add functionality until/unless you need it.
// Do the simplest thing that could possibly work - Don't make code unnecessarily detailed 
// Don't make me think - code should require as little effort as possible to understand for the next developer that reads it.
// Write code for the maintainer - write code that can be maintained and understood by the next person that reads it
// Single responisbility principle - a function/class should only perform one task 
// Avoid premature optimization - get code functional/working first before trying to optimize it
// Separation of concerns - keep areas/sections of code separate and managed by separate sections of code - avoid having the same section of code used in different processes.

// None really surprise me - they all seem pretty common sense for coding practices
// At this point, sometimes figuring out a simpler way to do something is actually more challenging and thus takes longer.


//Commenting Code

//create function "f" with argument "l"
const f = l => {
    // create varabiles 'es', 'p', 'c', and 'n' and assign values
    let es = 0, p = 0, c = 1, n = 0
    // create a while loop to run while the value of 'c' is less than or equal the value of 'l'
    while (c <= l) {
      // reassign the value of 'n' to be the sum of 'c' + 'p' 
      // (currently c = 0 and p = 1 so n === 1)
      n = c + p;
      // c and p are reassigned the values of n and c, respectively
      [c, p] = [n, c]
      // if c is an even number, add the value of c to the value of es to
      //create new value of es, otherwise add zero to the current value of es
      es += (c % 2 === 0) ? c : 0
    }
    //return the value of es
    return es
  }
  //run the function f with 55 as the argument 'l'
  console.log(f(55))

  /*this function is a fibonacci sequence - the third number in the sequence is the sum of the two previous numbers, but it only
  returns the even numbered values, so calling it fibonacci or fibonacciEvens could've helped the maintainer understand it better.
  the names of the variables in the second code example help a lot as well*/

  /*I would personally rather use the f2 code because I find the if statement structure to be easier to read than the ? operator,
  and the names of the variables would make it easy to name the vaiables for the new argument accordingly - oddSum for any numbers
  where current % 2 !=== 0.*/

  /*the semicolon is needed otherwise the [c,p] is read as a continuation of the n assignment and then when the next = sign before
  [n,c] contradicts the previous assignment of n */