let clickCount = 0;

document.body.addEventListener('click', () => {
    clickCount = clickCount + 1;
    document.getElementById('click-count').textContent = clickCount;
})

// the todolist code
document.getElementById('add-todo').addEventListener('click', () => {
    const input = document.getElementById('todo-input');
    const newValue = input.value.trim();

    const list = document.getElementById('todo-items');
    const li = document.createElement('li');

    li.textContent = newValue;
    list.appendChild(li);

    input.value = "";
})
