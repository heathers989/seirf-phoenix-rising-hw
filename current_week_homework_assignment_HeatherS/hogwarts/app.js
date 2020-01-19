//opening $ function causes code to wait to execute until the document loads/is ready
$( () => {
  // if (typeof $ == 'undefined'){
  //   console.log('oops! I still have to link my jQuery properly!');
  // } else {console.log('I did it! I linked jQuery and this js file properly!')};
  
  // console.log($);

  //Year 1
  const $container = $('#container');
  console.log($container);

  const $h1 = $('<h1>').text("Hogwarts");
  console.log($h1)
  $container.append($h1);


//Year 2
  const $h2 = $('<h2>').text("Heather");
  console.log($h2)
  $container.append($h2);

  const $h3 = $('<h3>').text("Hufflepuff");
  console.log($h3)
  $container.append($h3);

  const $h4 = $('<h4>').text("Broady");
  $h4.addClass('toad')
  console.log($h4)
  $container.append($h4);

  const $wand = $('<h4>').text("Hornbeam Wand with Dragon Heartstring Core");
  console.log($wand)
  $container.append($wand);


  //Year 3

  const $trunk = $('<ul>');
  $trunk.attr('storage', 'trunk');
  $container.append($trunk);

  const $li1 = $('<li>').text("butter beer");
  const $li2 = $('<li>').text("invisibility cloak").attr('class', 'secret');
  const $li3 = $('<li>').text("magic map").attr('class', 'secret');
  const $li4 = $('<li>').text("time turner").attr('class', 'secret');
  const $li5 = $('<li>').text("leash").attr('class', 'toad');
  const $li6 = $('<li>').text("Bertie Bott's Every Flavor [Jelly] Beans");

  $trunk.append($li1, $li2, $li3, $li4, $li5, $li6)

//Year 4

const $table = $('<table>');
$container.append($table);

const $h5 = $('<h5>').text("Spring 2017");
$("table").before($h5);

const $thead = $('<thead>');
$table.append($thead);

const $th1 = $('<th>').text("Day");
const $th2 = $('<th>').text("Classes");

const $tr1 = $('<tr>');
$thead.prepend($tr1);
$tr1.append($th1, $th2);


const $tr2 = $('<tr>');
$table.append($tr2);

const $tdDay1 = $('<td>').text("Monday");
const $tdClass1 = $('<td>').text("Herbology, Divination");
$tr2.append($tdDay1, $tdClass1);


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

$($wand).remove();

$($li1).remove();

const $newWand = $('<h4>').text("Hawthorn Wand with Dragon Heartstring Core")

$h4.after($newWand);

$newWand.css('color', 'indigo');

$trunk.after($h4);

$h4.remove();

$h3.after($h4);

});

