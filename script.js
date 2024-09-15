const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Digite uma tarefa!');
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.addEventListener('click', () => {
        taskList.removeChild(newTask);
    });

    newTask.addEventListener('click', () => {
        newTask.classList.toggle('completed');
    });

    newTask.appendChild(removeBtn);
    taskList.appendChild(newTask);

    taskInput.value = '';
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
