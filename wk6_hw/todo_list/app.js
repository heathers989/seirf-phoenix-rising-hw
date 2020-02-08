$(()=>{
    const toDoList = [];
    const doneList = [];
    let $ulToDo = $('<ul>').attr('id', 'to-do');
    $('#to-do-list').append($ulToDo);
    const $ulDoneList = $('<ul>');
    $('#completed').append($ulDoneList);
    const $inputBox = $('#input-box');
    const $inputButton = $('#submit');

    addListItem = () => {

        console.log("To do list: ", toDoList)
        $('#to-do').empty();
        toDoList.forEach((item)=>{
        $ulToDo.append(`<li id = '${item}'>` + item + "</li>");
        $ulToDo.children().attr('class', 'to-do-item');
        })  
        let $completedButton = $('<button>').text('COMPLETED').addClass('completed-button');
        $('.to-do-item').append($completedButton);       
    }

    const removeItem = (event) =>{
            $(event.target).parent('li').remove();
            event.stopPropagation();
         }   


    const submitHandle = (event) => {
        const inputBoxValue = $inputBox.val()
        console.log(inputBoxValue);
        toDoList.push(inputBoxValue);
        event.preventDefault();
        $inputBox.val('');
        addListItem();
        $('.completed-button').on('click', (event) => {
            //move to things that are done list
            $ulDoneList.append($(event.target).parent());
            $ulDoneList.children().removeClass().addClass('done-item');
            $('.done-item').children().text('REMOVE').removeClass().addClass('remove-button');

            //remove item from todo list array
            let index = $(event.target).parent('li').attr('id');
            console.log(index);
            let arrayPos = toDoList.indexOf(index);
            if (arrayPos > -1) {
                toDoList.splice(arrayPos, 1);
                console.log(toDoList)
                event.stopPropagation();
            }

            $('.remove-button').on('click', removeItem);

        });
    }

    $inputButton.on('click', submitHandle);

    


   
   

})

