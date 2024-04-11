const dados = {
  d100: Math.floor(Math.random() * 101),
  d20: Math.floor(Math.random() * 21),
  d12: Math.floor(Math.random() * 13),
  d10: Math.floor(Math.random() * 11),
  d8: Math.floor(Math.random() * 9),
  d6: Math.floor(Math.random() * 7),
  d4: Math.floor(Math.random() * 5),
};

const historico = [];

const rolarDado = () => {
  const dadoSelecionado = document.getElementById("dado").value;
  const valorUsuario = parseInt(document.getElementById("valor").value) || 0;
  const resultado = dados[dadoSelecionado] + valorUsuario;
  historico.push({
    dado: dadoSelecionado,
    valorUsuario,
    resultado,
  });
  atualizarHistorico();
};

const atualizarHistorico = () => {
  const ulHistorico = document.getElementById("historico");
  ulHistorico.innerHTML = "";
  historico.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `Rolagem: ${item.dado} + ${item.valorUsuario} = ${item.resultado}`;
    ulHistorico.appendChild(li);
  });
};

document.getElementById("rolar").addEventListener("click", rolarDado);