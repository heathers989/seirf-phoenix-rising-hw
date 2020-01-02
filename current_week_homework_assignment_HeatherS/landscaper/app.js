//create variables for the costs of tools
let scissorCost = 5;
let pushMowerCost = 25;
let batteryMowerCost = 250;
let studentsCost = 500;

//create object for the items in gameplay
const gamePlay = {
    tool: ["teeth"],
    daysWorked: 0,
    moneyEarned: 0
}

/*create function to determine how much money is earned while landscaping based on last tool added and keep track of
days worked (may later edit to a tool.contains evaluation if time permits and the functionality can be worked out) */
const keepLandscaping = () => {
    if (gamePlay.tool[gamePlay.tool.length-1] === "teeth"){
        gamePlay.daysWorked++; gamePlay.moneyEarned++;
    } else if(gamePlay.tool[gamePlay.tool.length-1] === "rusty scissors"){
        gamePlay.daysWorked++; gamePlay.moneyEarned+=5;
    } else if(gamePlay.tool[gamePlay.tool.length-1] === "push mower"){
        gamePlay.daysWorked++; gamePlay.moneyEarned+=50;
    } else if(gamePlay.tool[gamePlay.tool.length-1] === "battery powered mower"){
        gamePlay.daysWorked++; gamePlay.moneyEarned+=100;
    } else if(gamePlay.tool[gamePlay.tool.length-1] === "team of starving students"){
        gamePlay.daysWorked++; gamePlay.moneyEarned+=250;  
}
}


//create a function to add new tools and check for money earned
const addTools = () => {
    alert("Let's landscape!")
    while(gamePlay.moneyEarned <= 1000){
        keepLandscaping();
  if (gamePlay.moneyEarned === 5) {
      let purchase = prompt(" You've worked " + gamePlay.daysWorked +  " days and earned $" + gamePlay.moneyEarned + '! \n Do you want to buy rusty scissors for $' + scissorCost + 
      '? Enter yes or no.');
    if (purchase === "yes") { gamePlay.tool.push("rusty scissors"); gamePlay.moneyEarned -= scissorCost;
    alert("Thanks for your purchase! Your remaining money is $" + gamePlay.moneyEarned);
    keepLandscaping(); 
    }else if (purchase === "no") {
       keepLandscaping();
     } 
    }
    
    if (gamePlay.moneyEarned === 25) {
        let purchase = prompt(" You've worked " + gamePlay.daysWorked +  " days and earned $" + gamePlay.moneyEarned + 
        '! Do you want to buy \n rusty scissors for $' + scissorCost + '? \n a push mower for $' + pushMowerCost + '? \n or nothing?');
        if (purchase === "rusty scissors" && gamePlay.tool.includes("rusty scissors") === false) { gamePlay.tool.push("rusty scissors"); 
        gamePlay.moneyEarned -= scissorCost;
        alert("Thanks for your purchase! Your remaining money is $" + gamePlay.moneyEarned); keepLandscaping();
        } else if (purchase === "rusty scissors" && gamePlay.tool.includes("rusty scissors") === true){
            alert("You've already purchased rusty scissors, make another selection."); 
            purchase = prompt(" You've worked " + gamePlay.daysWorked +  " days and earned $" + gamePlay.moneyEarned + 
            '! Do you want to buy \n rusty scissors for $' + scissorCost + '? \n a push mower for $' + pushMowerCost + '? \n or nothing?');
        } else if (purchase === "push mower") { gamePlay.tool.push("push mower"); 
        gamePlay.moneyEarned -= pushMowerCost;
        alert("Thanks for your purchase! Your remaining money is $" + gamePlay.moneyEarned); keepLandscaping();
        } else if (purchase === "nothing") {
           keepLandscaping();
         } 
    }
    if (gamePlay.moneyEarned === 250) {
        let purchase = prompt(" You've worked " + gamePlay.daysWorked +  " days and earned $" + gamePlay.moneyEarned + 
        '! Do you want to buy \n rusty scissors for $' + scissorCost + '? \n a push mower for $' + pushMowerCost + '? \n a battery powered mower for $' + batteryMowerCost + 
        '? \n or nothing?');
        if (purchase === "rusty scissors" && gamePlay.tool.includes("rusty scissors") === false) { gamePlay.tool.push("rusty scissors"); 
        gamePlay.moneyEarned -= scissorCost;
        alert("Thanks for your purchase! Your remaining money is $" + gamePlay.moneyEarned); keepLandscaping();
        } else if (purchase === "rusty scissors" && gamePlay.tool.includes("rusty scissors") === true){
            alert("You've already purchased rusty scissors, make another selection."); purchase = prompt(" You've worked " + gamePlay.daysWorked +  " days and earned $" + gamePlay.moneyEarned + 
            '! Do you want to buy \n rusty scissors for $' + scissorCost + '? \n a push mower for $' + pushMowerCost + '? \n a battery powered mower for $' + batteryMowerCost + 
            '? \n or nothing?');
        } else if (purchase === "push mower" && gamePlay.tool.includes("push mower") === false) { gamePlay.tool.push("push mower"); 
        gamePlay.moneyEarned -= pushMowerCost;
        alert("Thanks for your purchase! Your remaining money is $" + gamePlay.moneyEarned); keepLandscaping();
        } else if (purchase === "push mower" && gamePlay.tool.includes("push mower") === true){
            alert("You've already purchased a push mower, make another selection."); purchase = prompt(" You've worked " + gamePlay.daysWorked +  " days and earned $" + gamePlay.moneyEarned + 
            '! Do you want to buy \n rusty scissors for $' + scissorCost + '? \n a push mower for $' + pushMowerCost + '? \n a battery powered mower for $' + batteryMowerCost + 
            '? \n or nothing?');
        } else if (purchase === "battery powered mower") { gamePlay.tool.push("battery powered mower");
        gamePlay.moneyEarned -= batteryMowerCost;
        alert("Thanks for your purchase! Your remaining money is $" + gamePlay.moneyEarned); keepLandscaping();
        } else if (purchase === "nothing") {
           keepLandscaping();
         } 
      } 
      if (gamePlay.moneyEarned === 500 && gamePlay.tool.includes("team of starving students") === false) {
        let purchase = prompt(" You've worked " + gamePlay.daysWorked +  " days and earned $" + gamePlay.moneyEarned + 
        '! Do you want to buy \n rusty scissors for $' + scissorCost + '? \n a push mower for $' + pushMowerCost + '? \n a battery powered mower for $' + batteryMowerCost + 
        '? \n a team of starving students for $' + studentsCost + ' (enter "team of starving students")? \n or nothing?');
        if (purchase === "rusty scissors" && gamePlay.tool.includes("rusty scissors") === false) { gamePlay.tool.push("rusty scissors"); 
        gamePlay.moneyEarned -= scissorCost;
        alert("Thanks for your purchase! Your remaining money is $" + gamePlay.moneyEarned); keepLandscaping();
        } else if (purchase === "rusty scissors" && gamePlay.tool.includes("rusty scissors") === true){
            alert("You've already purchased rusty scissors, make another selection."); purchase = prompt(" You've worked " + gamePlay.daysWorked +  " days and earned $" + gamePlay.moneyEarned + 
            '! Do you want to buy \n rusty scissors for $' + scissorCost + '? \n a push mower for $' + pushMowerCost + '? \n a battery powered mower for $' + batteryMowerCost + 
            '? \n a team of starving students for $' + studentsCost + ' (enter "team of starving students") \n or nothing?');
        } else if (purchase === "push mower" && gamePlay.tool.includes("push mower") === false) { gamePlay.tool.push("push mower"); 
        gamePlay.moneyEarned -= pushMowerCost;
        alert("Thanks for your purchase! Your remaining money is $" + gamePlay.moneyEarned); keepLandscaping();
        } else if (purchase === "push mower" && gamePlay.tool.includes("push mower") === true){
            alert("You've already purchased a push mower, make another selection."); purchase = prompt(" You've worked " + gamePlay.daysWorked +  " days and earned $" + gamePlay.moneyEarned + 
            '! Do you want to buy \n rusty scissors for $' + scissorCost + '? \n a push mower for $' + pushMowerCost + '? \n a battery powered mower for $' + batteryMowerCost + 
            '? \n a team of starving students for $' + studentsCost + ' (enter "team of starving students") \n or nothing?');
        } else if (purchase === "battery powered mower" && gamePlay.tool.includes("push mower") === false) { gamePlay.tool.push("battery powered mower");
        gamePlay.moneyEarned -= batteryMowerCost;
        alert("Thanks for your purchase! Your remaining money is $" + gamePlay.moneyEarned); keepLandscaping();
        } else if (purchase === "battery powered mower" && gamePlay.tool.includes("battery powered mower") === true){
            alert("You've already purchased a battery powered mower, make another selection."); purchase = prompt(" You've worked " + gamePlay.daysWorked +  " days and earned $" + gamePlay.moneyEarned + 
            '! Do you want to buy \n rusty scissors for $' + scissorCost + '? \n a push mower for $' + pushMowerCost + '? \n a battery powered mower for $' + batteryMowerCost + 
            '? \n a team of starving students for $' + studentsCost + ' (enter "team of starving students") \n or nothing?');
        } else if (purchase === "team of starving students" && gamePlay.tool.includes("team of starving students") === false) { gamePlay.tool.push("team of starving students");
        gamePlay.moneyEarned -= studentsCost;
        alert("Thanks for your purchase! Your remaining money is $" + gamePlay.moneyEarned); keepLandscaping();
        } else if (purchase === "team of starving students" && gamePlay.tool.includes("team of starving students") === true) {
            alert("You've already purchased a team of starving students, make another selection."); purchase = prompt(" You've worked " + gamePlay.daysWorked +  " days and earned $" + gamePlay.moneyEarned + 
            '! Do you want to buy \n rusty scissors for $' + scissorCost + '? \n a push mower for $' + pushMowerCost + '? \n a battery powered mower for $' + batteryMowerCost + 
            '? \n a team of starving students for $' + studentsCost + ' (enter "team of starving students") \n or nothing?');
        }else if (purchase === "nothing") {
           keepLandscaping();
         } 
      } 
      if (gamePlay.moneyEarned === 1000 && gamePlay.tool.includes("team of starving students") === true) {
        alert("Congratulations! You've earned $" + gamePlay.moneyEarned + "! You have won the game!");
        //break;
            } 
         } 
       } 
//addTools();



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
//continue above logic for battery powered mower and team of starving students



/* The ability to take user input (prompt)
The ability for the user to earn money (for loop/if...else)
The ability to buy tools and use the new tool (prompt)
The ability to win the game and end it (team of students and $1000)
Hint: Try setting the win amount to $10 frst, then $50, and etc. 
until you get to the end to allow for easier testing! */