function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Adiciona um botão de exclusão
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Adiciona um botão de edição
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = function() {
            const newText = prompt('Digite o novo texto:');
            if (newText) {
                li.textContent = newText;
                li.appendChild(deleteButton);
                li.appendChild(editButton);
            }
        }

        li.appendChild(deleteButton);
        li.appendChild(editButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
};

const inputField = document.getElementById('taskInput');
        inputField.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });