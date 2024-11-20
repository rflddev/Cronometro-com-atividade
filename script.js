const tarefaInput = document.getElementById("tarefa");
const adicionarBotao = document.getElementById("adicionar");
const listaTarefas = document.getElementById("tarefas");

adicionarBotao.addEventListener("click", adicionarTarefa);
tarefaInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
      adicionarTarefa();
  }
});

function adicionarTarefa() { 
  const tarefaTexto = tarefaInput.value;
  if (tarefaTexto.trim() !== "") {
      const novaTarefa = document.createElement("li");
      novaTarefa.innerHTML = `
          ${tarefaTexto} <button class="excluir">Excluir</button>
      `;
      listaTarefas.appendChild(novaTarefa);
      tarefaInput.value = "";
  }
}


listaTarefas.addEventListener("click", function (e) {
  if (e.target.classList.contains("excluir")) {
      e.target.parentElement.remove();
  }
});


//Conometro
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');
let timerDisplay = document.getElementById('timeDisplay');
let timerDiv = document.getElementById('timer');
let timer;
let seconds = 0;
let minutes = 0;

startBtn.addEventListener('click', function() {
  timerDiv.style.display = 'block'; // Exibe o cronômetro
  startBtn.style.display = 'none'; // Esconde o botão de iniciar
  stopBtn.style.display = 'inline-block'; // Exibe o botão de parar
  resetBtn.style.display = 'inline-block'; // Exibe o botão de reiniciar
  
  timer = setInterval(function() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    timerDisplay.textContent = formatTime(minutes, seconds);
  }, 1000);
});

stopBtn.addEventListener('click', function() {
  clearInterval(timer); // Para o cronômetro
  startBtn.style.display = 'inline-block'; // Exibe o botão de iniciar
  stopBtn.style.display = 'none'; // Esconde o botão de parar
});

resetBtn.addEventListener('click', function() {
  clearInterval(timer); // Para o cronômetro
  minutes = 0;
  seconds = 0;
  timerDisplay.textContent = '00:00'; // Reseta o tempo
  startBtn.style.display = 'inline-block'; // Exibe o botão de iniciar
  stopBtn.style.display = 'none'; // Esconde o botão de parar
  resetBtn.style.display = 'none'; // Esconde o botão de reiniciar
});

function formatTime(minutes, seconds) {
  return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
