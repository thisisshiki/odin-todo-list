import './styles.css';
import { createSidebar } from './sidebar';
import { loadTodos } from './loadTodos';

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = createSidebar();
    document.body.appendChild(sidebar);
});

document.addEventListener('DOMContentLoaded', loadTodos);

