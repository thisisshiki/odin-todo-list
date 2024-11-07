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

    addTitle('Todo List', main); // 将标题添加到 main div 中
    loadTodos(main); // 将待办事项列表添加到 main div 中
});