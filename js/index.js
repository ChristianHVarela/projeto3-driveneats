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
    document.getElementById("button-finalizar").disabled = false;
  } else {
    botaoFinalizar.classList.remove("ready");
    botaoFinalizar.classList.add("not-ready");
    botaoFinalizar.innerHTML = "Selecione os 3 itens para fechar o pedido";
    document.getElementById("button-finalizar").disabled = true;
  }
}

function finalizarPedido() {
  const prato = document.querySelector(
    ".pratos .selected .subcaixa-pedido .pedido-titulo"
  ).innerHTML;
  const bebida = document.querySelector(
    ".bebidas .selected .subcaixa-pedido .pedido-titulo"
  ).innerHTML;
  const doce = document.querySelector(
    ".doces .selected .subcaixa-pedido .pedido-titulo"
  ).innerHTML;
  const pratoValor = desmaskaraValor(
    document.querySelector(".pratos .selected .subcaixa-pedido .pedido-valor")
      .innerHTML
  );
  const bebidaValor = desmaskaraValor(
    document.querySelector(".bebidas .selected .subcaixa-pedido .pedido-valor")
      .innerHTML
  );
  const doceValor = desmaskaraValor(
    document.querySelector(".doces .selected .subcaixa-pedido .pedido-valor")
      .innerHTML
  );
  const valorTotal = somaValores(pratoValor, bebidaValor, doceValor);
  const url = `https://wa.me/5549991019012?text=`;
  const urlParameters = encodeURIComponent(`Olá, gostaria de fazer o pedido:
  - Prato: ${prato}
  - Bebida: ${bebida}
  - Sobremesa: ${doce}
  Total: R$ ${valorTotal}`);
  window.location.href = url + urlParameters;
}

function desmaskaraValor(valor) {
  valor = valor.replace("R$ ", "");
  valor = valor.replace(",", ".");
  return valor;
}

function somaValores(pratoValor, bebidaValor, doceValor) {
  const somatotal =
    Number(pratoValor) + Number(bebidaValor) + Number(doceValor);
  return somatotal.toFixed(2);
}
