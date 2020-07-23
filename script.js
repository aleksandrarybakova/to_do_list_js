let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let toDoList = [];
let toDoUl = document.querySelector('.todo');
let newTodo = {};

addButton.addEventListener('click', function(){
    newTodo = {
        todo: addMessage.value,
        cheked: false,
        iportant: false
    }

    toDoList.push(newTodo);
    displayMessages();
    return newTodo;        
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