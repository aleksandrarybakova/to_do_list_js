let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let toDoList = [];
let toDoUl = document.querySelector('.todo');
let newTodo = {};

if (localStorage.getItem('todo')){
    toDoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

addButton.addEventListener('click', function(){
    newTodo = {
        todo: addMessage.value,
        cheked: false,
        iportant: false
    }

    toDoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(toDoList));      
});

function displayMessages(){
    let displayMessage = '';
    toDoList.forEach(function(item, i){
        displayMessage +=`
        <li>
            <input type='checkbox' id='item_${i}' ${item.cheked ? 'checked': ''}>
            <label for='item_${i}'>${item.todo}</label>
        </li>`;
        toDoUl.innerHTML = displayMessage; 
        
    })
}

toDoUl.addEventListener('change', function(event){
    let idInput = event.target.getAttribute('id');
    let forLabel = toDoUl.querySelector('[for='+ idInput +']');
    let valueLabel = forLabel.innerHTML;
    toDoList.forEach(function (item){
        if(item.todo === valueLabel){
            item.cheked =!item.cheked;
            localStorage.setItem('todo', JSON.stringify(toDoList)); 
        }
    })
}) 

