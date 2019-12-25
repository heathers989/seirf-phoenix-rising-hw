//Datatypes refresher

/*
1. datatype: boolean
   data structure example: let lightSwitch = true;

2. datatype: string
   data structure example: const userEmail = 'yourname@emaildomain.com'

3. datatype: object 
   data structure example: let spaceShip = {
                                            hull: '8m',
                                            laserBlasters: 'red',
                                            tractorBeam: '100m',
                                            warpDrive: '3sec'
                                        }
4. datatype: array
   data structure example: let classList = ['Mike', 'Chris', Tara];

5. datatype: array of objects
   data structure example: let classListLocations = [ 
                                    {
                                        Name: 'Jody',
                                        Location: 'Montana',
                                    },
                                    { 
                                        Name: 'Maxine',
                                        Location: 'Alaska',
                                    },
                                    { 
                                        Name: 'Sean',
                                        Location: 'New York'
                                     }
                                    ]

6. datatype: array of objects containing an array
   data structure example: let classInfo = [
                                            {
                                             name: 'Jody',
                                             location: 'Montana',
                                             faveShows: ['The Flash', 'Top Chef', 'Rocket Power']
                                             },
                                              {
                                             name: 'Maxine',
                                             location: 'Alaska',
                                             faveShows: ['Gilmore Girls', 'Game of Thrones', 'Hey Arnold']
                                             },

                                            ]


*/

//Take it Easy

//1.
let rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];

//2.
console.log(rainbowColors[4])

//3.
const aboutMe = {
    name: 'Heather',
    faveFood: 'sushi',
    hobby: 'photography',
    town: 'Harrison',
    faveDataType: 'string'
}

//4.
console.log(aboutMe.hobby)