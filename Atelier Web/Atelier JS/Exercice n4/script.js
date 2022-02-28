const list = document.querySelector("ol");

list.addEventListener('click', (e) => {
    e.target.style.color = '#' + Math.floor(Math.random() * 999999).toString();
});