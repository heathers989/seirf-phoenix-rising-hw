console.log("Come in gold leader")

const ussHeather = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack: (currentShip) => {
        console.log("attacking");
      
        if (Math.random() < ussHeather.accuracy) {
                 console.log('A hit, a fine hit!');
                 currentShip.hull -= ussHeather.firepower;
                 if (alienShipsArr[0].hull > 0){
                    console.log(`your enemy's ship has ${alienShipsArr[0].hull} points remaining`)
                 }
             } else {
                 console.log("Attack missed!");
             }
             console.log(currentShip)
    }
}

class AlienShip {

    constructor () {
        this.hull = Math.floor((Math.random() * 4) + 3);
        this.firepower = Math.floor((Math.random() * 3) + 2);
        this.accuracy = (Math.floor(Math.random() * 3) + 6) * .1;
    }
    attack(){
        console.log("Alien Ship attacking")
        if (Math.random() < this.accuracy) {
            console.log('You have been hit!');
            ussHeather.hull -= this.firepower;
            console.log(`Your ship has ${ussHeather.hull} points remaining`)
        } else {
            console.log("Alien attack missed!");
        }
        
        
    }
}

//set up turn by turn logic

let gameState = {
    playerIsAlive: () => {
      // return true if player is alive
      return ussHeather.hull > 0;
    },
    checkWin: () => {
      // return true if player has won the game
      return alienShipsArr.length <= 0;
    }
  };

//Start the game
//old code:
// const alien = new AlienShip();
// console.log(alien);

// to upgrade to six ships
let alienShipsArr = [];
for (let i = 0; i < 6; i++){
    alienShipsArr.push(new AlienShip());
}

console.log(alienShipsArr)


//player ship attacks:
while (gameState.playerIsAlive){
    ussHeather.attack(alienShipsArr[0]);
    //check if enemy ship is destroyed
    if (alienShipsArr[0].hull <= 0) {
        alienShipsArr.shift();
        console.log(`Alien ship destroyed! There are ${alienShipsArr.length} ships remaining!`)
        gameState.checkWin();
        if (gameState.checkWin()){
            alert("You won the game!")
            break;
        }
        let attackChoice = prompt("Ship destroyed, attack or retreat?")
        if (attackChoice === "attack") { 
            console.log("Continuing to attack")
        } else if (attackChoice === "retreat") {
            console.log("You've left the universe to it's fate and must live or die with your choices.")
            break;
        } 
    } else {
        alienShipsArr[0].attack();
    }
}


console.log("Game over, you lost or retreated.")