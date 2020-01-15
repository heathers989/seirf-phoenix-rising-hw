//Daring Adventure

//Our Hero

class Hero {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.weapons = [{
            name: 'sprinkleSpray',
            hp: 5 },
            { name: 'sugarShock',
            hp: 10
        }]
        this.catchPhrases = ['I\'m fresher than day old pizza', 'You can\'t count my calories']
    }
    talkSass() {
        console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)])
    }
    announceHealth() {
        console.log(`${this.name} current HP is: ${this.health}`)
    }
    fight(enemy) {
        let weapon = this.weapons[Math.floor(Math.random() * this.weapons.length)];
        enemy.health -= weapon.hp;
        console.log(`${enemy.name} got hit by ${weapon.name} for ${weapon.hp}! New health value for ${enemy.name} is ${enemy.health}`)
    }
}

const dougie = new Hero('Dougie the donut')

//Our Enemy

class Enemy {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.weapons = [{
            name: 'pepperoniStars',
            hp: 5},
            {
            name: 'cheeseGrease',
            hp: 10
        }]
        this.catchPhrases = ['I\'m YouTube famous', 'I\'m more dangerous than an uncovered sewer']
    }
    talkSmack() {
        console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)])
    }
    announceHealth() {
        console.log(`${this.name} current HP is: ${this.health}`)
    }
    fight(enemy) {
        let weapon = this.weapons[Math.floor(Math.random() * this.weapons.length)];
        enemy.health -= weapon.hp;
        console.log(`${enemy.name} got hit by ${weapon.name} for ${weapon.hp}! New health value for ${enemy.name} is ${enemy.health}`)
    }
}

const pizzaRat = new Enemy('Pizza Rat');


//Walking Down the Street

//1.
dougie.talkSass();

//2.
pizzaRat.talkSmack();

//3.
dougie.announceHealth();

//4.
pizzaRat.announceHealth();


//Fight!

//1. 2. and 3. - Edited fight methods
// dougie.fight(pizzaRat);
// pizzaRat.fight(dougie);
dougie.announceHealth();
pizzaRat.announceHealth();

//Hungry for More
while (dougie.health > 0 || pizzaRat.health > 0) {
    dougie.fight(pizzaRat);
    pizzaRat.fight(dougie);
    if (dougie.health <= 0 ) {
        console.log(dougie.name + ' is down! ' + pizzaRat.name + ' is the victor!' )
        break;
    } else if (pizzaRat.health <= 0) {
        console.log(pizzaRat.name + ' is down! ' + dougie.name + ' is the victor!' )
        break;
    }
}
