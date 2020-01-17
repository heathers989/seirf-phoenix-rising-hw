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




});

