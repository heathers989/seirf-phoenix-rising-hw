//opening $ function causes code to wait to execute until the document loads/is ready

//enter JQuery in here
$( () => {
  // if (typeof $ == 'undefined'){
  //   console.log('oops! I still have to link my jQuery properly!');
  // } else {console.log('I did it! I linked jQuery and this js file properly!')};
  
  // console.log($);

  //Year 1
  //Query for your div with the id of container and set it to a variable named $container
  const $container = $('#container');

  //console.log $container
  console.log($container);

  //Create an <h1> element and set it to a variable called $h1 and console log it
  //Add some text inside the h1 element. Example text: 'Hogwarts'
  const $h1 = $('<h1>').text("Hogwarts");
  console.log($h1)

  //append to make $h1 appear on page
  $container.append($h1);


//Year 2
//Add h2 element with name
  const $h2 = $('<h2>').text("Heather");
  console.log($h2)
  $container.append($h2);

  //Add h3 element with house
  const $h3 = $('<h3>').text("Hufflepuff");
  console.log($h3)
  $container.append($h3);

  //Add h4 element with pet's name with a class of pet type
  const $h4 = $('<h4>').text("Broady");
  $h4.addClass('toad')
  console.log($h4)
  $container.append($h4);

  //add h4 element with wand
  const $wand = $('<h4>').text("Hornbeam Wand with Dragon Heartstring Core");
  console.log($wand)
  $container.append($wand);


  //Year 3

  //create ul with attribute storage and value of trunk
  const $trunk = $('<ul>');
  $trunk.attr('storage', 'trunk');
  $container.append($trunk);

  //list items of
// butter beer
// invisibility cloak (add a class of secret)
// magic map (add a class of secret)
// time turner (add a class of secret)
// leash (for your pet, be sure to give this list element the same class as you gave your pet)
// Bertie Bott's Every Flavor [Jelly] Beans.
// append the unordered list to your container div
  const $li1 = $('<li>').text("butter beer");
  const $li2 = $('<li>').text("invisibility cloak").attr('class', 'secret');
  const $li3 = $('<li>').text("magic map").attr('class', 'secret');
  const $li4 = $('<li>').text("time turner").attr('class', 'secret');
  const $li5 = $('<li>').text("leash").attr('class', 'toad');
  const $li6 = $('<li>').text("Bertie Bott's Every Flavor [Jelly] Beans");

  $trunk.append($li1, $li2, $li3, $li4, $li5, $li6)

//Year 4

//make a table
const $table = $('<table>');
$container.append($table);

//add h5 that says Spring 2017 above table
let $h5 = $('<h5>').text("Spring 2017");
$("table").before($h5);

//Inside the table add a thead element
const $thead = $('<thead>');
$table.append($thead);

//Inside the thead element add two th elements
// in the first th add the text Day
// in the second th add the text Classes
const $th1 = $('<th>').text("Day");
const $th2 = $('<th>').text("Classes");

//create a tr element to house theads
const $tr1 = $('<tr>');
$thead.prepend($tr1);
$tr1.append($th1, $th2);

//create another tr element 
const $tr2 = $('<tr>');
$table.append($tr2);

// add two tds inside tr2
const $tdDay1 = $('<td>').text("Monday");
const $tdClass1 = $('<td>').text("Herbology, Divination");
$tr2.append($tdDay1, $tdClass1);

//add additional trs with tds inside for tuesday-friday and classes for those days
const $tr3 = $('<tr>');
$table.append($tr3);

const $tdDay2 = $('<td>').text("Tuesday");
const $tdClass2 = $('<td>').text("Potions");
$tr3.append($tdDay2, $tdClass2);


const $tr4 = $('<tr>');
$table.append($tr4);

const $tdDay3 = $('<td>').text("Wednesday");
const $tdClass3 = $('<td>').text("Charms");
$tr4.append($tdDay3, $tdClass3);


const $tr5 = $('<tr>');
$table.append($tr5);

const $tdDay4 = $('<td>').text("Thursday");
const $tdClass4 = $('<td>').text("History of Magic");
$tr5.append($tdDay4, $tdClass4);


const $tr6 = $('<tr>');
$table.append($tr6);

const $tdDay5 = $('<td>').text("Friday");
const $tdClass5 = $('<td>').text("Transfiguration");
$tr6.append($tdDay5, $tdClass5);


//Year 5

//remove wand
$($wand).remove();

//remove butter beer from list
$($li1).remove();

//get a new wand and insert after pet in the DOM
const $newWand = $('<h4>').text("Hawthorn Wand with Dragon Heartstring Core")

$h4.after($newWand);

//add color of indigo to new wand using jQuery
$newWand.css('color', 'indigo');

//move pet to another location in the DOM
$trunk.after($h4);

//remove pet from the DOM
$h4.remove();

//put pet back in original location
$h3.after($h4);



//Year 6

//use hide method to hide belongings with secret class
//chain delay method on hide method
$('.secret').delay(2000).hide("slow");

//use show method to reveal belongings with secret class
$('.secret').show("slow");

//transmogrified pet's leash into half cabbage
$li5.addClass("cabbage")

//remove class of cabbage to fix
$li5.removeClass("cabbage")


//Year 7

//update class schedule to read fall 2018
$('h5').text('Fall 2018');

//buy more butter beer and make first list item in ul
let $liNew = $('<li>').text("Butter beer");

$trunk.prepend($liNew);

//replace ul's trunk property with new property of chest
$('ul.trunk').replaceWith('ul.chest');

//add css

const colors = () =>{
  $li6.css("color", randColorRGB())
}

const randColorRGB = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return "rgb(" + red + "," + green + "," + blue + ")";
}

$(()=>{
  colors()
})

});




