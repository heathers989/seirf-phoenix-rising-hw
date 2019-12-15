/*
//Easy Does It
let quotes = ["Big mistake. Big. Huge.", "I hate mysteries. They bug me.", 
"If you truly desire greatness, you must first know what makes you weak."];

//Random
let randomThings = [1, 10, "Hello", true];
//1
console.log(randomThings[0]);

//2
randomThings[2] = "World";

//3
console.log(randomThings);

//We've Got Class
let ourClass = ["Outrun", "Zoom", "Github", "Slack"];
//1
console.log(ourClass[2]);

//2
ourClass[2] = "Octocat";

//3
ourClass.push("Cloud City");

//Mix It Up
//4
let myArray = [5 , 10 , 500, 20];

//5
myArray.push("Egon");

//6
myArray.pop();

//7
myArray.unshift("Bob Marley");

//8
myArray.shift();

//9
myArray.reverse();

//Biggie Smalls



for (let i = 0; i < myArray.length; i ++) {
    if (myArray[i] < 100){
        console.log("little number");
    }
    else {
        console.log("big number");

        }
}
    
//Monkey in the Middle
for (let i = 0; i < myArray.length; i ++) {
    if (myArray[i] < 5) {
        console.log("little number");
    }
    else if (myArray[i] > 10) {
        console.log("big number");
        }
    else {
        console.log("monkey");
    }
}
*/
//What's in Your Closet

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  //1
  console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

  //2
  let kristynShoe = kristynsCloset.shift();
  console.log(kristynShoe);

  //3
  kristynsCloset.splice(5, 0, "raybans");
  
  //4
  kristynsCloset[5] = "stained knit hat";
 
  //5
  console.log(thomsCloset[0][0]);

  //6
  console.log(thomsCloset[1][1]);

  //7
  console.log(thomsCloset[2][2]);

  //8
  console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][2]}!`);

  //9
  thomsCloset[1][2] = "Footie Pajamas";
  console.log(thomsCloset);