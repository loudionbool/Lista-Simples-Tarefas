// Adiciona uma nova tarefa à lista
function adicionarTarefa() {
  const input = document.getElementById("tarefa");
  const texto = input.value.trim();

  if (texto === "") return;

  const li = criarItemDeLista(texto);
  document.getElementById("lista").appendChild(li);

  input.value = "";
}

// Cria o elemento visual da tarefa (li + botão Remover)
function criarItemDeLista(texto) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";
  botaoRemover.onclick = () => {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(botaoRemover);
  return li;
}

// Salva a lista atual no localStorage com um nome dado pelo usuário
function salvarTarefas() {
  const nomeLista = prompt("Digite um nome para esta lista:");

  if (!nomeLista) return;

  const spans = document.querySelectorAll("#lista li span");
  const tarefas = Array.from(spans).map(span => span.textContent);

  const todasListas = JSON.parse(localStorage.getItem("MinhasListas") || "{}");
  todasListas[nomeLista] = tarefas;

  localStorage.setItem("MinhasListas", JSON.stringify(todasListas));

  alert("Lista salva como: " + nomeLista);
}

// Carrega automaticamente uma lista padrão se houver (última usada, opcional)
function carregarListaTemporaria() {
  const listaTemporaria = JSON.parse(localStorage.getItem("ListaTemporaria") || "[]");

  listaTemporaria.forEach(tarefa => {
    const li = criarItemDeLista(tarefa);
    document.getElementById("lista").appendChild(li);
  });
}

// Muda o tema visual da página
function mudarTema() {
  const corpo = document.body;
  const atual = corpo.style.backgroundColor;

  corpo.style.backgroundColor = (atual === "white" || atual === "") ? "#1e1e1e" : "white";
  corpo.style.color = (corpo.style.backgroundColor === "white") ? "black" : "white";
}

// Chamada inicial ao abrir a página
window.onload = () => {
  carregarListaTemporaria();
};
