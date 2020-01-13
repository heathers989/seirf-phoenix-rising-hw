// class Person {
//     constructor () {
//       this.legs = 2;
//       this.arms = 2;
//       this.eyes = 'blue';
//       this.hair = 'blonde';
//     }
//     greet (otherPerson) {
//       console.log('hi ' + otherPerson + '!');
//     }
//     walk () {
//       console.log('I hate when my Segway is in the shop.');
//     }
//   }
//   const me = new Person();
//   console.log(me);

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
        this.bankAccount+=10;
    }
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood++;
        this.bankAccount -= hamster.getPrice; 
    }
}
