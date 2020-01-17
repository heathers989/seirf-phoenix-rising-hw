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


});

