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