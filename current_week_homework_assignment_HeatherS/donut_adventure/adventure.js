//Daring Adventure

//Our Hero

class Hero {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        }
        this.catchPhrases = ['I\'m fresher than day old pizza', 'You can\'t count my calories']
    }
    talkSass() {
        console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)])
    }
    announceHealth() {
        console.log(`current HP is: ${this.health}`)
    }
}

let dougie = new Hero('Dougie the donut')

