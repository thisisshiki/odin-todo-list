// addTitle.js
export function addTitle(title, parentElement) {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = title;
    header.appendChild(h1);
    parentElement.appendChild(header);
}