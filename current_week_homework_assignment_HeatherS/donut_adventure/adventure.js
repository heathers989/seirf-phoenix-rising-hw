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

const dougie = new Hero('Dougie the donut')

//Our Enemy

class Enemy {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10
        }
        this.catchPhrases = ['I\'m YouTube famous', 'I\'m more dangerous than an uncovered sewer']
    }
    talkSmack() {
        console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)])
    }
    announceHealth() {
        console.log(`current HP is: ${this.health}`)
    }
    fight() {
        console.log('I\'m gonna flatten you like a slice of pepperoni!')
    }
}

const pizzaRat = new Enemy('Pizza Rat')

console.log(pizzaRat)
