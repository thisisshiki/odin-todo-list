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

export function loadTodos(parentElement) {
    initializeTodosInLocalStorage(); // 初始化 localStorage 中的 todos

    const ul = document.createElement('ul');
    const todos = loadTodosFromLocalStorage();

    todos.forEach(todo => {
        const li = document.createElement('li');
        const formattedDate = format(parseISO(todo.dueDate), 'yyyy-MM-dd');
        
        const dateSpan = document.createElement('span');
        dateSpan.textContent = formattedDate;
        dateSpan.className = 'due-date';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.isCompleted; // 设置复选框的初始状态

        // 根据 isCompleted 属性设置条目的样式
        if (todo.isCompleted) {
            li.classList.add('completed');
        }

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                li.classList.add('completed');
                todo.isCompleted = true; // 更新 JSON 中的 isCompleted 状态
            } else {
                li.classList.remove('completed');
                todo.isCompleted = false; // 更新 JSON 中的 isCompleted 状态
            }

            // 保存更新后的 todos 到 localStorage
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

    parentElement.appendChild(ul);
}