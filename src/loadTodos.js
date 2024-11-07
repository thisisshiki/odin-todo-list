import todos from './todos.json';

export function loadTodos() {
    const ul = document.createElement('ul');
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}