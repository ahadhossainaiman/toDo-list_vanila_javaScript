let newTask = document.querySelector('#new-task');

let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

// function

let createTask = (task)=>{
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');
    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label)

    return listItem;
}

let addTask = (event) =>{
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
    console.log(listItem);

    // bind the new list item to the incomplete list
   
        bindIncompleteItem(listItem, completeTask);
   
}





let bindIncompleteItem = (taskItem,checkboxClick) =>{
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}



let completeTask = function() {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItem(listItem, deleteTask);
}


let bindCompleteItem = (taskItem, deleteButtonClick)  => { 
    let deleteButton =  taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}




let deleteTask = function (){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}


for(let i=0; i< todoUl.children.length; i++){
    bindIncompleteItem(todoUl.children[i],completeTask);
}

for(let i=0; i< completeUl.children.length; i++){
    bindCompleteItem(completeUl.children[i],deleteTask);
}


form.addEventListener('submit',addTask);