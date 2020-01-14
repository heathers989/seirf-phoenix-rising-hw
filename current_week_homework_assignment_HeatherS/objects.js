//creating classes


//Hamster class

class Hamster {
    constructor (name) {
        this.owner = '';
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log('squeak squeak')
    };
    eatFood() {
        console.log('nibble nibble')
    }
    getPrice() {
        return this.price
    }
}

//Person class

class Person {
    constructor (name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        return this.name
    };
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    greet() {
        console.log(`Hello ${this.name}!`)
    }
    eat() {
        this.weight++;
        this.mood++
    }
    exercise(){
        this.weight--
    }
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount+= 10;
    }
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood++;
        this.bankAccount -= hamster.getPrice(); 
    }
}

//create a story with Person class
//1.
let timmy = new Person('Timmy');

//2.
for (i=0; i<5; i++) {
    timmy.ageUp()
    
}
console.log(timmy.getAge())

//3.
for (i=0; i<5; i++) {
    timmy.eat()
}

//4.
for (i=0; i<5; i++) {
    timmy.exercise()
}

//5.
for (i=0; i<9; i++) {
    timmy.ageUp()
}
console.log(timmy.getAge())

console.log(timmy.bankAccount)
6.
let gus = new Hamster('Gus')

//7. 
gus.owner = 'Timmy';

//8.
timmy.buyHamster(gus);

console.log(timmy.hamsters);

//9.
for (i=0; i<15; i++) {
    timmy.ageUp()
};
console.log(`new age: ${timmy.getAge()}`);

//10.
timmy.eat();
timmy.eat();

//11.
console.log('current weight: ' + timmy.getWeight())
timmy.exercise();
timmy.exercise();
console.log('new weight: ' + timmy.getWeight())
