const form = document.querySelector(".add-todo-form");
const todoList = document.querySelector(".todos-list");
const name = document.querySelector(".name input");
const content = document.querySelector(".content input");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (name.value.trim() && content.value.trim()) {
        const todo = document.createElement('div');
        todo.classList.add("gx-5");
        todo.classList.add("mb-3");
        todo.classList.add("card");
        todo.style.display = "flex";
        todo.style.flexFlow = "row nowrap";

        const texte = document.createElement('span');
        texte.textContent = `${name.value} : ${content.value}`;
        texte.style.flex = "1 0 auto";
        todo.appendChild(texte);

        const img = document.createElement('img');
        img.src = '/assets/delete_black_24dp.svg';
        img.setAttribute('width', '18em');
        img.alt = 'remove';
        img.style.flex = "0 1 auto";
        todo.appendChild(img);

        todoList.appendChild(todo);
    }
});

todoList.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'img')
        todoList.removeChild(e.target.parentNode);
});