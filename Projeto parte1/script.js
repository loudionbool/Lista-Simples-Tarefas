function adicionarTarefa() {
  const input = document.getElementById("tarefa");
  const lista = document.getElementById("lista");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = input.value;

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";
  botaoRemover.onclick = () => {
    li.remove();
    salvarTarefas();
  };

  li.appendChild(span);
  li.appendChild(botaoRemover);
  lista.appendChild(li);

  input.value = "";
  salvarTarefas();
}

function salvarTarefas() {
  const tarefas = [];
  document.querySelectorAll("#lista li span").forEach(span => {
    tarefas.push(span.textContent);
  });
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function carregarTarefas() {
  const tarefas = JSON.parse(localStorage.getItem("tarefas") || "[]");
  tarefas.forEach(tarefa => {
    document.getElementById("tarefa").value = tarefa;
    adicionarTarefa();
  });
}

function mostrarListasSalvas() {
  alert("Funcionalidade de ver listas salvas ainda será implementada!");
}

function mudarTema() {
  alert("Modo escuro já está ativo 😎 (ou você pode implementar o modo claro também!)");
}

window.onload = carregarTarefas;
