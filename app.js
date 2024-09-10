const campoCce = document.getElementById('campoCce');
const campoLauda = document.getElementById('campoLauda');
const campoTamanhoLauda = document.getElementById('campoTamanhoLauda');  // Tamanho da lauda (ex.: 2100, 2000 ou 2200)
const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');

// Adiciona o evento de clique ao botão, prevenindo o comportamento padrão do formulário
botao.addEventListener('click', (event) => {
  event.preventDefault(); // Impede o envio do formulário
  
  const cce = parseFloat(campoCce.value);
  const lauda = parseFloat(campoLauda.value);
  const tamanhoLauda = parseFloat(campoTamanhoLauda.value);  // Tamanho da lauda (2100, 2000, etc.)

  // Verifica se os campos estão preenchidos corretamente
  if (!isNaN(cce) && !isNaN(lauda)) {
    const total = (cce / tamanhoLauda) * lauda;
    // Formata o valor em reais (R$) com separadores de milhar e casas decimais
    resultado.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  } else {
    resultado.textContent = "Por favor, insira valores válidos."; // Mensagem de erro
  }
});
