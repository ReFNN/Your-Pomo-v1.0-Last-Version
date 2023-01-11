var inputTask = document.querySelector(".txtInpt");
var bttTask = document.querySelector(".bttADD");
var countTasks = document.querySelector('.counter');
var ulBox = document.querySelector(".box-task");


var cli = document.createElement("li");
var tasks = [];

//BOTÕES EVENT
inputTask.addEventListener('keypress', e => {
    if (e.keyCode == 13) {
        e.preventDefault();
    }
    if (e.key == 'Enter') {
        if (inputTask.value == "" || inputTask.value == " ") {
            inputTask.value = "";
        } else {
            insertTask(inputTask.value, '');
            inputTask.value = "";
            inputTask.setAttribute('rows', '1');
        }
    }
});

bttTask.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputTask.value == "" || inputTask.value == " ") {
        inputTask.value = "";
    } else {
        insertTask(inputTask.value, '');
        inputTask.value = "";
        inputTask.setAttribute('rows', '1');
    }
});


var bttClose = document.querySelector("#bttclosee");

function closeTasks() {
    var rightContainer = document.querySelector(".container-right");
    if (rightContainer.classList.contains('hide')) {
        rightContainer.classList.remove('hide');
    } else {
        rightContainer.classList.add('hide');
    }
};

var bttOpen = document.querySelector("#bttopenn");

function openTasks() {
    var rightContainer = document.querySelector(".container-right");
    if (rightContainer.classList.contains('hide')) {
        rightContainer.classList.remove('hide');
    } else {
        rightContainer.classList.add('hide');
    }
};

/*FUNÇÕES*/


function insertTask(conteudo, status) {
    tasks.push({ conteudo, status });
    updateTasks();
}

function updateTasks() {
    localStorage.setItem("tasklist", JSON.stringify(tasks));
    loadTasks();
}

function loadTasks() {
    if (tasks.length == 0) {
        ulBox.innerHTML = '<div class="task"><p>Você ainda não adicionou nenhuma tarefa. 😢</p></div><div class="task"><p>You haven' + "'" + 't added any tasks yet. 😢</p></div><div class="task"><p>Vous n' + "'" + 'avez pas encore ajouté de tâches. 😢</p></div>';
    } else {
        ulBox.innerHTML = "";
        tasks = JSON.parse(localStorage.getItem("tasklist")) ?? [];
        tasks.forEach((task, i) => {
            insertTela(task.conteudo, task.status, i)
        })
    }
    countTasks.textContent = tasks.length;
}

function insertTela(txtTask, sttsTask, i) {
    var cli = document.createElement("li");
    cli.innerHTML = '<div class="task" data=' + i + '> <input type="checkbox" ' + sttsTask + ' data-i=' + i + ' onchange="checar(this, ' + i + ')";> <p data-si=' + i + '>' + txtTask + '</p> <button onclick="removeTask(' + i + ')" data-i=' + i + ' class="bttRemoveTask"><span class="material-symbols-outlined e">delete</span></button></div>';
    ulBox.appendChild(cli);

    if (sttsTask) {
        document.querySelector('[data="' + i + '"]').classList.add('checado');
        document.querySelector('[data="' + i + '"]').setAttribute('checked', '');
    } else {
        document.querySelector('[data="' + i + '"]').classList.remove('checado');
    };
}

function removeTask(i) {
    tasks.splice(i, 1);
    updateTasks();
}

// insertTask("teste", true);
function checar(c, i) {
    if (c.checked) {
        tasks[i].status = 'checked';
    } else {
        tasks[i].status = '';
    }
    updateTasks();
}


loadTasks();