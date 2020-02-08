$(() => {

    let count = 0;
    const $boxes = ($('.number'))

const checkWinX = () => {
    //check for all conditions where X could win
    //check for horizontal X win in first row
    if ($('#one').text() === 'X' && $('#two').text() === 'X' && $('#three').text() === 'X') {
        //setTimeout allows last move to load before alert window shows
        setTimeout(() => { alert('X is the winner!') 
        $('.number').empty() }, 200);
    }  //check for vertical X win in first column
     else if ($('#one').text() === 'X' && $('#four').text() === 'X' && $('#seven').text() === 'X') {
          //setTimeout allows last move to load before alert window shows
        setTimeout(() => { alert('X is the winner!')
        $('.number').empty() }, 200);
    } //check for horizontal X win in second row
     else if ($('#four').text() === 'X' && $('#five').text() === 'X' && $('#six').text() === 'X') {
        setTimeout(() => { alert('X is the winner!')
        $('.number').empty() }, 200);
     } //check for vertical X win in second column
      else if ($('#two').text() === 'X' && $('#five').text() === 'X' && $('#eight').text() === 'X') {
        setTimeout(() => { alert('X is the winner!')
        $('.number').empty() }, 200);
     } // check for horizontal X win in third row
      else if ($('#seven').text() === 'X' && $('#eight').text() === 'X' && $('#nine').text() === 'X') {
        setTimeout(() => { alert('X is the winner!')
        $('.number').empty() }, 200);
     } //check for vertical X win in third column
      else if ($('#three').text() === 'X' && $('#six').text() === 'X' && $('#nine').text() === 'X') {
           //setTimeout allows last move to load before alert window shows
        setTimeout(() => { alert('X is the winner!') 
        $('.number').empty() }, 200);
     } //check for diagonal 1, 5, 9 X win 
      else if ($('#one').text() === 'X' && $('#five').text() === 'X' && $('#nine').text() === 'X') {
           //setTimeout allows last move to load before alert window shows
           setTimeout(() => { alert('X is the winner!') 
           $('.number').empty() }, 200);
     } //check for diagonal 3, 5, 7 X win 
      else if ($('#three').text() === 'X' && $('#five').text() === 'X' && $('#seven').text() === 'X') {
          //setTimeout allows last move to load before alert window shows
        setTimeout(() => { alert('X is the winner!')
        $('.number').empty() }, 200);
      } else {
          return false
      }
}

const checkWinO = () => {
    //check for all conditions where O could win
    //check for horizontal O win in first row
    if ($('#one').text() === 'O' && $('#two').text() === 'O' && $('#three').text() === 'O') {
        //setTimeout allows last move to load before alert window shows
        setTimeout(() => { alert('O is the winner!')
        $('.number').empty() }, 200);
    } //check for vertical O win in first column
     else if ($('#one').text() === 'O' && $('#four').text() === 'O' && $('#seven').text() === 'O') {
        //setTimeout allows last move to load before alert window shows
        setTimeout(() => { alert('O is the winner!')
        $('.number').empty() }, 200);
    } //check for horizontal O win in second row
    else if ($('#four').text() === 'O' && $('#five').text() === 'O' && $('#six').text() === 'O') {
        //setTimeout allows last move to load before alert window shows
        setTimeout(() => { alert('O is the winner!') 
        $('.number').empty() }, 200);
     } //check for vertical O win in second column
     else if ($('#two').text() === 'O' && $('#five').text() === 'O' && $('#eight').text() === 'O') {
        //setTimeout allows last move to load before alert window shows
        setTimeout(() => { alert('O is the winner!') 
        $('.number').empty() }, 200);
     } // check for horizontal O win in third row
     else if ($('#seven').text() === 'O' && $('#eight').text() === 'O' && $('#nine').text() === 'O') {
        //setTimeout allows last move to load before alert window shows
        setTimeout(() => { alert('O is the winner!') 
        $('.number').empty() }, 200);
     } //check for vertical O win in third column
     else if ($('#three').text() === 'O' && $('#six').text() === 'O' && $('#nine').text() === 'O') {
        //setTimeout allows last move to load before alert window shows
        setTimeout(() => { alert('O is the winner!') 
        $('.number').empty() }, 200);
     } //check for diagonal 1, 5, 9 O win 
     else if ($('#one').text() === 'O' && $('#five').text() === 'O' && $('#nine').text() === 'O') {
       //setTimeout allows last move to load before alert window shows
       setTimeout(() => { alert('O is the winner!') 
       $('.number').empty() }, 200);
    } //check for diagonal 3, 5, 7 X win 
     else if ($('#three').text() === 'O' && $('#five').text() === 'O' && $('#seven').text() === 'O') {
     //setTimeout allows last move to load before alert window shows
     setTimeout(() => { alert('O is the winner!') 
     $('.number').empty() }, 200);
     } else {
         return false;
     }

}

const checkTie = () => {
  if ($('#one').text() !== '' 
      && $('#two').text() !== '' 
      && $('#three').text() !== ''
      && $('#four').text() !== ''
      && $('#five').text() !== ''
      && $('#six').text() !== ''
      && $('#seven').text() !== ''
      && $('#eight').text() !== ''
      && $('#nine').text() !== ''
      && checkWinO() === false 
      && checkWinX() === false ){
        setTimeout(() => { alert('it is a tie!') 
        $('.number').empty() }, 200);
      ;
  }

}

const altClick = function() {
    //use regular function to have access to 'this' keyword
    count++;

    //even odd click detect 
    const isEven = function(someNumber) {
        //if click number is even return true, else return false
        return (someNumber % 2 === 0) ? true : false;
    };
    // on odd clicks add X into div clicked and check win criteria
    if (isEven(count) === false && $(event.target).text() === '') {
        $(this).text('X');
        checkWinX();
        checkWinO();
        checkTie();
    }
    // on even clicks add O into div clicked and check for win criteria
    else if (isEven(count) === true && $(event.target).text() === '') {
        $(this).text('O');
        checkWinX();
        checkWinO();
        checkTie();
     }
  }



  $boxes.on('click', altClick)
});
