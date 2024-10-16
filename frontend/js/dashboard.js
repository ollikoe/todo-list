document.getElementById('addTodoBtn').addEventListener('click', addTodo);

// Function to add a new to-do item
function addTodo() {
    const todoList = document.querySelector('.todo-list');

    // Create a new to-do item
    const newTodo = document.createElement('div');
    newTodo.classList.add('todo-item');
    newTodo.innerHTML = `
        <input type="checkbox">
        <span class="todo-text">New Task</span>
        <span class="todo-due">Due in 7 days</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    // Append to the list
    todoList.appendChild(newTodo);

    // Add event listeners to the edit and delete buttons
    newTodo.querySelector('.edit-btn').addEventListener('click', editTodo);
    newTodo.querySelector('.delete-btn').addEventListener('click', deleteTodo);
}

// Function to edit a to-do item
function editTodo() {
    const todoText = this.parentElement.querySelector('.todo-text');
    const newText = prompt('Edit To-Do:', todoText.innerText);
    if (newText) {
        todoText.innerText = newText;
    }
}

// Function to delete a to-do item
function deleteTodo() {
    const todoItem = this.parentElement;
    todoItem.remove();
}
