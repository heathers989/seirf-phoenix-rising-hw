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
    
