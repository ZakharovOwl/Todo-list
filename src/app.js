//Selectors 
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)


//Functions

function addTodo(event){
    //Prevent form from submitting 
    event.preventDefault();
    //create todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //CHECK MARK BUTTON


        /*Node.appendChild() добавляет узел в конец списка дочерних элементов указанного родительского узла. 
        Если данный дочерний элемент является ссылкой на существующий узел в документе, то функция 
        appendChild() перемещает его из текущей позиции в новую позицию (нет необходимости удалять узел из 
        родительского узла перед добавлением его к какому-либо другому узлу).
    
        Создаем новый элемент параграфа, и вставляем в конец document body
        var p = document.createElement("p");
        document.body.appendChild(p);*/

    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // CHECK trash BUTTON
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    
    //APPEND TI LIST
    todoList.appendChild(todoDiv)

    //Clear value
    todoInput.value =''
}

function deleteCheck(e){
    const item = e.target;
    if (item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall')
        //remove
        //transitionend срабатывает, когда CSS transition закончил свое выполнение.
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    //CHECK MARC
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }

}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
            }
        });
    
    }