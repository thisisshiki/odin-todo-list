import todos from './todos.json';
import { format, parseISO } from 'date-fns';

export function loadTodos(parentElement) {
    const ul = document.createElement('ul');

    todos.forEach(todo => {
        const li = document.createElement('li');
        const formattedDate = format(parseISO(todo.dueDate), 'yyyy-MM-dd');
        
        const dateSpan = document.createElement('span');
        dateSpan.textContent = formattedDate;
        dateSpan.className = 'due-date';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        li.appendChild(checkbox);
        li.appendChild(dateSpan);
        li.appendChild(document.createTextNode(todo.title));
        ul.appendChild(li);
    });

    parentElement.appendChild(ul);
}