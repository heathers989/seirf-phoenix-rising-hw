//Combine objects, arrays and functions

//1.

let crayonBox = {
    crayonCount: 25,
    crayonSize: 'jumbo',
    crayonColor: ['red', 'yellow', 'sky blue']
}
console.log(crayonBox.crayonColor[1])


//2.

let bottle = {
    brand: 'Poland Spring',
    cap: { material: 'plastic',
           color: 'white'
    },
    labelColor: 'green'
}

console.log(bottle.cap.material)


//3.
let receipt = [
    hairColor = {
        color: 'red',
        type: 'semi-permanent',
        brand: 'arctic fox'}, 
    'gloves', 'brush']

    console.log(receipt[0].brand)

    //4. 
    let apartmentBuilding = [
        'stairs', 'elevator', 'garbage shoot', 'laundry room', 
        tenantNames = ['Joe', 'Karen', 'Aaron'], 'fitness center'
    ]
    console.log(apartmentBuilding[4][1])

    //Combine objects, arrays, and functions more than one level deep

    //1.
    const knit = () => {
        return {
            item: 'scarf',
            length: '6 ft',
            color: 'blue'
        }
    }
    console.log(knit().length)

    //2.
    const crayonSelector = () => {
        return {
                crayonCount: 25,
                crayonSize: 'jumbo',
                crayonColor: ['red', 'yellow', 'sky blue']    
            }
        }    

    console.log(crayonSelector().crayonColor[2])

    //3.

    const powerButton = () => {
        return options = () => {
                console.log("Select a song")
            }
        }
    console.log(powerButton()())

    //Model a vending machine

    let vendingMachine = {
        snacks: [{ name: 'doritos', price: 1}, 
        {name: '3 musketeers', price: 2}, 
        {name:'white cheddar popcorn', price: 3}],
        vend: (position) => {
            console.log(vendingMachine.snacks[position]) 
            }

        }
            vendingMachine.vend(2)

//Callbacks

//1.
const add = (num1, num2) => {
    return num2+num1;
}

//2.
const subtract = (firstNum, secondNum) => {
    return firstNum - secondNum;
}

//3. 
const multiply = (numOne, numTwo) => {
    return numOne * numTwo;
}

//4.
const divide = (aNum, nextNum) => {
    return aNum / nextNum;
}

//5.
const calculate = (firstNumber, secondNumber, operates) => {
    return operates(firstNumber, secondNumber)
}
//6 and 7.
console.log(calculate(3, 4, add))
console.log(calculate(10, 7, subtract))
console.log(calculate(3, 6, multiply))
console.log(calculate(12, 2, divide))

//function definition placement

//fixed code below - functions cannot be called before being initialized
const bar = () => {
    console.log('bar here');
}

const foo = () => {
    console.log('foo here');
}
bar();
foo();

//error reading
//the error says "SyntaxError: Missing initializer in const declaration" - because there's no '=' after foo the function doesn't get intialized or receive the assignment from the function


//Section 3 Array Methods with Callbacks

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]

  //Every

  //1.
  const zeroCheck = (checkNums) => {
      return checkNums >= 0;
  }
  console.log(nums.every(zeroCheck));

  //2.
  const wordLength = (checkWords) => {
    return checkWords.length < 8;
}
console.log(panagrams.every(wordLength));

//Filter
//1.
const lessThan4 = (checkFor4) => {
    return checkFor4 < 4;
}
console.log(nums.filter(lessThan4))

//2.
const evenWords = (checkEvens) => {
    return checkEvens.length % 2 === 0;
}
console.log(panagrams.filter(evenWords))

//Find
//1.
const divideByFive = (divFive) => {
    return divFive % 5 === 0;
}
console.log(nums.find(divideByFive))

//2.
const moreThan3 = (threeChar) => {
    return threeChar.length > 3;
}
console.log(panagrams.find(moreThan3))

//Find Index

//1.
const divByThree = (divThree) => {
    return divThree % 3 === 0;
}
console.log('the index of the first item divisible by three is ' + nums.findIndex(divByThree))

//2.
const lessThan2 = (underTwo) => {
    return underTwo.length < 2;
}
console.log('the index of the first word less than two characters long is ' + panagrams.findIndex(lessThan2))
//(None of the words meet the criteria of this request)

//For Each

//1. 
nums.forEach((item) => {
    console.log(item * 3)
  })

//2.
panagrams.forEach((word) => {
    console.log(word + '!')
  })

//Map

//1. 
const numsTimes100 = nums.map((numbers) => {
    return numbers * 100;
})
console.log(numsTimes100)

//2.
const allUppercase = panagrams.map((allUpper) => {
    return allUpper.toUpperCase();
})
console.log(allUppercase)


//Some

//1.
const divBy7 = (sevenDivide) => {
    return sevenDivide % 7 === 0;
}
console.log(nums.some(divBy7))

//2.
const containsA = (wordsWithA) => {
    return wordsWithA.match('a')
}
console.log(panagrams.some(containsA))
