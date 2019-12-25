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

//Crazy Object!

const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }

  //1.
  console.log(crazyObject.taco[1].salsa[5]);

  //2.
  console.log(crazyObject.larry.quotes[0]);

  //3.
  console.log(crazyObject.larry.characters[2].favourtieHobby)

  //4.
  console.log(crazyObject.larry.nicknames[1])

  //5.
  console.log(crazyObject.larry.characters[1])

  //6.
  crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk")
  console.log(crazyObject.larry.quotes)
  