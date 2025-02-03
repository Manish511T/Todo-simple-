
let ctr = 1;
function addTodo(){
    const inputElem = document.querySelector('input');
    const value = inputElem.value;

    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', ctr);
    newDiv.setAttribute('class',"todo-box")
    newDiv.innerHTML = `<div>${value}</div><button onclick="deleteTodo(${ctr})">Delete</button>`;
    document.querySelector("#Todo-list-container").appendChild(newDiv);
    ctr++;
    document.querySelector('input').value ='';

}

function deleteTodo(index){
    const elem = document.getElementById(index);
    elem.parentNode.removeChild(elem);
}


