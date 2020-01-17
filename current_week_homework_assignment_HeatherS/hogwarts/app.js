//opening $ function causes code to wait to execute until the document loads/is ready
$( () => {
  if (typeof $ == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file properly!')};
  
  console.log($);


});

