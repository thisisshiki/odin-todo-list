import { loadTodosFromLocalStorage } from './loadTodos';

export function showTodoDetails(todoId) {
    const todos = loadTodosFromLocalStorage();
    const todo = todos.find(t => t.id === todoId);
    
    let modal = document.getElementById('todo-modal');
    if (!modal) {
        modal = createModal();
    }
    
    populateModal(modal, todo);
    modal.style.display = 'block';
}

function createModal() {
    const modal = document.createElement('div');
    modal.id = 'todo-modal';
    modal.className = 'modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 class="todo-title"></h2>
            <div class="todo-details">
                <p><strong>Description: </strong><span class="todo-description"></span></p>
                <p><strong>Due Date: </strong><span class="todo-date"></span></p>
                <p><strong>Priority: </strong><span class="todo-priority"></span></p>
                <p><strong>Category: </strong><span class="todo-category"></span></p>
                <p><strong>Notes: </strong><span class="todo-notes"></span></p>
            </div>
        </div>
    `;

    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => modal.style.display = 'none';

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    document.body.appendChild(modal);
    return modal;
}

function populateModal(modal, todo) {
    modal.querySelector('.todo-title').textContent = todo.title;
    modal.querySelector('.todo-description').textContent = todo.description;
    modal.querySelector('.todo-date').textContent = todo.dueDate;
    modal.querySelector('.todo-priority').textContent = todo.priority;
    modal.querySelector('.todo-category').textContent = todo.category;
    modal.querySelector('.todo-notes').textContent = todo.notes;
}