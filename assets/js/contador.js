var setDuracao = 60 * 25; // converte para segundos
var duracao;
var timerON;

//BOTÕES MENU
var bttPomodoro = document.querySelector("#btt-pomodoro");
var bttDescanso = document.querySelector("#btt-descanso");
var bttDescansoL = document.querySelector("#btt-descansoL");
//BOTÕES DE START E STOP
var display = document.querySelector("#relogio"); //selecionando o timer
var borda = document.querySelector(".relogioo"); // selecionando borda
var bttStart = document.querySelector("#btt-start");
var bttStop = document.querySelector("#btt-stop");

//START TIMER FUNCTION
function startTimer(duracao, display) {
    bttStop.classList.remove("hide");
    bttStart.classList.add("hide");
    borda.classList.add("piscando");
    var timer = duracao, minutos, segundos;

    if (!timerON) {
        timerON = setInterval(function () {

            minutos = parseInt(timer / 60, 10);
            segundos = parseInt(timer % 60, 10);

            minutos = minutos < 10 ? "0" + minutos : minutos;
            segundos = segundos < 10 ? "0" + segundos : segundos;

            display.textContent = minutos + ":" + segundos;


            if (--timer < 0) {
                timer = duracao;

            }
            if (segundos == 0) {
                clearInterval(timerON);
                timerON = null;
                duracao = setDuracao;

                display.textContent = minutos + ":" + segundos;
                bttStart.classList.remove("hide");
                bttStop.classList.add("hide");
            }
        }, 1000);

    }
}

//STOP TIMER FUNCTION
function stopTimer(duracao, display) {

    clearInterval(timerON);
    timerON = null;
    bttStop.classList.add("hide");
    bttStart.classList.remove("hide");
    borda.classList.remove("piscando");
    var timer = duracao, minutos, segundos;

    minutos = parseInt(timer / 60, 10);
    segundos = parseInt(timer % 60, 10);

    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    display.textContent = minutos + ":" + segundos;

}

window.onload = function () {
    duracao = setDuracao;
    stopTimer(duracao, display);
}

//BOTÕES EVENT
bttStart.addEventListener('click', (event) => {
    event.preventDefault();
    duracao = setDuracao;
    duracao--
    startTimer(duracao, display);
});

bttStop.addEventListener('click', (event) => {
    event.preventDefault();
    clearInterval(timerON);
    timerON = null;
    duracao = setDuracao;
    stopTimer(duracao, display);
});

// POMODORO BUTTON
bttPomodoro.addEventListener('click', (event) => {
    event.preventDefault();

    if (bttDescanso.classList.contains('active')) {
        bttDescanso.classList.remove("active");
    }

    if (bttDescansoL.classList.contains("active")) {
        bttDescansoL.classList.remove("active");
    }

    if (!bttPomodoro.classList.contains("active")) {
        bttPomodoro.classList.add("active");
    }

    setDuracao = 60 * 20; // converte para segundos
    duracao = setDuracao;
    stopTimer(duracao, display);
});

// DESCANSO BUTTON
bttDescanso.addEventListener('click', (event) => {
    event.preventDefault();

    if (bttPomodoro.classList.contains('active')) {
        bttPomodoro.classList.remove("active");
    }

    if (bttDescansoL.classList.contains("active")) {
        bttDescansoL.classList.remove("active");
    }

    if (!bttDescanso.classList.contains("active")) {
        !bttDescanso.classList.add("active");
    }

    setDuracao = 60 * 5; // converte para segundos
    duracao = setDuracao;
    stopTimer(duracao, display);
});

// DESCANSO LONGO BUTTON
bttDescansoL.addEventListener('click', (event) => {
    event.preventDefault();

    if (bttPomodoro.classList.contains('active')) {
        bttPomodoro.classList.remove("active");
    }

    if (bttDescanso.classList.contains("active")) {
        bttDescanso.classList.remove("active");
    }

    if (!bttDescansoL.classList.contains("active")) {
        !bttDescansoL.classList.add("active");
    }

    setDuracao = 60 * 15; // converte para segundos
    duracao = setDuracao;
    stopTimer(duracao, display);
});