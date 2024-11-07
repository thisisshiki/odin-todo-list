import './styles.css';
import { createSidebar } from './sidebar';

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = createSidebar();
    document.body.appendChild(sidebar);
});

