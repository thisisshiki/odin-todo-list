import todos from './todos.json';
import { format, parseISO } from 'date-fns';

function initializeTodosInLocalStorage() {
    if (!localStorage.getItem('todos')) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}

function saveTodosToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodosFromLocalStorage() {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : todos;
}

export function loadTodos(parentElement, category = null) {
    initializeTodosInLocalStorage();

    const ul = document.createElement('ul');
    let todos = loadTodosFromLocalStorage();

    if (category) {
        todos = todos.filter(todo => todo.category === category);
    }

    todos.forEach(todo => {
        const li = document.createElement('li');
        const formattedDate = format(parseISO(todo.dueDate), 'yyyy-MM-dd');
        
        const dateSpan = document.createElement('span');
        dateSpan.textContent = formattedDate;
        dateSpan.className = 'due-date';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.isCompleted;

        if (todo.isCompleted) {
            li.classList.add('completed');
        }

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                li.classList.add('completed');
                todo.isCompleted = true;
            } else {
                li.classList.remove('completed');
                todo.isCompleted = false;
            }

            saveTodosToLocalStorage(todos);
        });

        const prioritySpan = document.createElement('span');
        prioritySpan.textContent = todo.priority;
        prioritySpan.className = `priority ${todo.priority}`;
        if (todo.isCompleted) {
            prioritySpan.classList.add('completed');
        }

        li.appendChild(checkbox);
        li.appendChild(dateSpan);
        li.appendChild(document.createTextNode(todo.title));
        li.appendChild(prioritySpan);
        ul.appendChild(li);
    });

    let ulElement = parentElement.querySelector('ul');
    if (ulElement) {
        ulElement.replaceWith(ul);
    } else {
        parentElement.appendChild(ul);
    }
}

export function filterTodosByCategory(category) {
    const main = document.getElementById('main');
    loadTodos(main, category);
}
