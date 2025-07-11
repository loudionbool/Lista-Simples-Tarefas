function adicionarTarefa() {
  const input = document.getElementById("tarefa");
  const texto = input.value.trim();

  if (texto === "") return;

  const li = criarItemDeLista(texto);
  document.getElementById("lista").appendChild(li);

  input.value = "";
}

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

function mudarTema() {
  const corpo = document.body;
  const atual = corpo.style.backgroundColor;

  corpo.style.backgroundColor = (atual === "white" || atual === "") ? "#1e1e1e" : "white";
  corpo.style.color = (corpo.style.backgroundColor === "white") ? "black" : "white";
}

function mostrarListasSalvas() {
  window.location.href = "listas.html";
}
