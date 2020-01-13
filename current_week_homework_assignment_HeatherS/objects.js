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
