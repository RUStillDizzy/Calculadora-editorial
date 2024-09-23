const campoCce = document.getElementById('campoCce');
const campoLauda = document.getElementById('campoLauda');
const campoTamanhoLauda = document.getElementById('campoTamanhoLauda');
const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');
const emailInput = document.getElementById('email');

// Adiciona o evento de clique ao botão
botao.addEventListener('click', (event) => {
  event.preventDefault();

  // Verifica se o e-mail foi preenchido
  if (emailInput.value === '') {
    alert('Por favor, insira seu e-mail para ver o resultado.');
    return;
  }

  const cce = parseFloat(campoCce.value);
  const lauda = parseFloat(campoLauda.value);
  const tamanhoLauda = parseFloat(campoTamanhoLauda.value);

  if (!isNaN(cce) && !isNaN(lauda) && !isNaN(tamanhoLauda)) {
    const total = (cce / tamanhoLauda) * lauda;
    resultado.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    // Limpa os campos
    campoCce.value = '';
    campoLauda.value = '';
    campoTamanhoLauda.value = '';
  } else {
    resultado.textContent = "Por favor, insira valores válidos.";
  }
});
