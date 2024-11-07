import './styles.css';
import { createSidebar } from './sidebar';
import { loadTodos } from './loadTodos';
import { addTitle } from './addTitle'; // 导入 addPageTitle 函数

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = createSidebar();
    document.body.appendChild(sidebar);

    const main = document.createElement('div');
    main.id = 'main';
    document.body.appendChild(main);

    addTitle('Todo List', main);
    loadTodos(main);
});