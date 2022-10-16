function selecionarBebida(bebida) {
  const bebidaJaSelecionada = document.querySelector(".bebidas .selected");
  if (bebidaJaSelecionada != null) {
    toggleSelected(bebidaJaSelecionada);
  }
  if (bebidaJaSelecionada !== bebida) {
    toggleSelected(bebida);
  }
  verificaSeEstaCompleto();
}

function selecionarDoce(doce) {
  const doceJaSelecionada = document.querySelector(".doces .selected");
  if (doceJaSelecionada != null) {
    toggleSelected(doceJaSelecionada);
  }
  if (doceJaSelecionada !== doce) {
    toggleSelected(doce);
  }
  verificaSeEstaCompleto();
}

function selecionarPrato(prato) {
  const pratoJaSelecionada = document.querySelector(".pratos .selected");
  if (pratoJaSelecionada != null) {
    toggleSelected(pratoJaSelecionada);
  }
  if (pratoJaSelecionada !== prato) {
    toggleSelected(prato);
  }
  verificaSeEstaCompleto();
}

function toggleSelected(alvo) {
  alvo.classList.toggle("selected");
}

function verificaSeEstaCompleto() {
  const pratoSelecionado = document.querySelector(".pratos .selected");
  const bebidaSelecionado = document.querySelector(".bebidas .selected");
  const doceSelecionado = document.querySelector(".doces .selected");
  const botaoFinalizar = document.querySelector(".rodape-button");
  if (
    pratoSelecionado != null &&
    bebidaSelecionado != null &&
    doceSelecionado != null
  ) {
    botaoFinalizar.classList.add("ready");
    botaoFinalizar.classList.remove("not-ready");
    botaoFinalizar.innerHTML = "Fechar pedido";
  } else {
    botaoFinalizar.classList.remove("ready");
    botaoFinalizar.classList.add("not-ready");
    botaoFinalizar.innerHTML = "Selecione os 3 itens para fechar o pedido";
  }
}
