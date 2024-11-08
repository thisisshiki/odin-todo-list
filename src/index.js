import './styles.css';
import { createSidebar } from './sidebar';
import { loadTodos } from './loadTodos';
import { addTitle } from './addTitle';

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = createSidebar();
    document.body.appendChild(sidebar);

    const main = document.createElement('div');
    main.id = 'main';
    document.body.appendChild(main);

    addTitle('My Todo', main);
    loadTodos(main);
});
