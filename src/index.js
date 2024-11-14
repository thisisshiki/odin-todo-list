// src/index.js
import './styles.css';
import { createSidebar } from './sidebar';
import { loadTodos } from './loadTodos';
import { addTitle } from './addTitle';
import { showTodoDetails } from './todoDetails';

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = createSidebar();
    document.body.appendChild(sidebar);

    const main = document.createElement('div');
    main.id = 'main';
    document.body.appendChild(main);

    addTitle('My Todo', main);
    loadTodos(main);

    // Add event delegation for todo items
    main.addEventListener('click', (e) => {
        const todoItem = e.target.closest('li');
        if (todoItem && !e.target.matches('input[type="checkbox"]')) {
            const todoId = Number(todoItem.dataset.todoId);
            showTodoDetails(todoId);
        }
    });
});

document.addEventListener('todosUpdated', () => {
    loadTodos(document.getElementById('main'));
});