
   let idCount = 1;
 function addTodo(){
      const inputElm = document.querySelector('#input_todo');
      const inputlist = document.querySelector('todo_list');

      const todoItem = document.createElement('div')
      todoItem.setAttribute('class', "todo_item");
      todoItem.setAttribute('id', '${idCount}')

        todoItem.innerHTML+= `<p class="text">${inputElem.value}</p>
 
             <button class="del_btn" onclick="deleteTodo(${idCount})">Delete</button>
             <button class="edit_btn"  onclick="editTodo(${idCount})">Edit</button>`;

           todolist.appendChild(todoItem)
           inputElm.value =''
           idCount++;
}
    function editTodo(){
          const inputElm = document.querySelector('input_todo')
          const todo_item =document.getElementById(id);
            
          todo_item.innerHTML = `<p class="text">HEllo World</p>
 
             <button class="del_btn" onclick="deleteTodo(${id})">Delete</button>
             <button class="edit_btn"  onclick="editTodo(${id})">Edit</button>
            </div>`;
            inputElm.value = ''
    }
       function deleteTodo(id){
           const todo_item = document.getElementById(id)
           todoItem.remove()
       }
     