let scissorCost = 5;
let pushMowerCost = 25;
let batteryMowerCost = 250;
let studentsCost = 500;

const gamePlay = {
    tool: ["teeth"],
    daysWorked: 0,
    moneyEarned: 0
}

for (gamePlay.daysWorked = 0; gamePlay.moneyEarned <= 100; gamePlay.daysWorked++, gamePlay.moneyEarned++ ){
  if (gamePlay.moneyEarned === 5) {
      let purchase = prompt(" You've earned $" + gamePlay.moneyEarned + '! \n Do you want to buy rusty scissors for $' + scissorCost + 
      '? Enter yes or no.');
    if (purchase === "yes") { gamePlay.tool.push("rusty scissors"); gamePlay.moneyEarned -= scissorCost;
    alert("Thanks for your purchase! Your remaining money is $" + gamePlay.moneyEarned);
    break; } 
    // else if (purchase === "no") {
    // continue;
    // } if (gamePlay.moneyEarned === 25) {
    //   let purchase = prompt(" You've earned $" + gamePlay.moneyEarned + 
    //   '! Do you want to buy \n rusty scissors for ' + scissorCost + '? or \n a push mower for ' 
    //   + pushMowerCost + '?');
    // if (purchase === "rusty scissors") { gamePlay.tool.push("rusty scissors"); 
    // gamePlay.moneyEarned -= scissorCost;
    // alert("Thanks for your purchase! Your remaining money is $" + gamePlay.moneyEarned);
    // break; 
    // } else if (purchase === "push mower") { gamePlay.tool.push("push mower"); 
    // gamePlay.moneyEarned -= pushMowerCost;
    // alert("Thanks for your purchase! Your remaining money is $" + gamePlay.moneyEarned);
    // break; 
    // }
    
    /* else if (purchase === "no") {
        continue; */
    } 
}

console.log(gamePlay.tool)
console.log(gamePlay.moneyEarned)

// for (gamePlay.moneyEarned=0; moneyEarned<1000; daysWorked++){

// }

//set up object with variables for gameplay and costs for each tool
//set up loop to increment days worked by 1 and money earned by 1
//alert or consolelog gamePlay after each day to display results
//if money earned is = 5, prompt "do you want to buy rusty scissors"? - yes or no
//if yes, push rusty scissors to tool array and reduce moneyearned by scissorCost 
// if rusty scissors are purchased set loop to now increment days worked by 1 
//and money earned by 5 if not continue with same incrementation
//if money earned = 25, prompt "do you want to buy push mower, yes or no?"
//if push mower is purchased reduce moneyEarned by pushMowerCost 
//continue above logic for 



/* The ability to take user input (prompt)
The ability for the user to earn money (for loop/if...else)
The ability to buy tools and use the new tool (prompt)
The ability to win the game and end it (team of students and $1000)
Hint: Try setting the win amount to $10 frst, then $50, and etc. 
until you get to the end to allow for easier testing! */