document.getElementById('metodo-pagamento').addEventListener('change', function() {
  const metodoPagamento = this.value;
  const dadosCartao = document.getElementById('dados-cartao');

  // Exibe os campos do cartão apenas se o usuário escolher "cartão de crédito"
  if (metodoPagamento === 'cartao') {
    dadosCartao.style.display = 'block';
  } else {
    dadosCartao.style.display = 'none';
  }
});

document.getElementById('pagamento-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Verifica o período gratuito
  const dataAssinatura = localStorage.getItem('dataAssinatura');
  const dataAtual = new Date();

  if (dataAssinatura) {
    const diasUsados = Math.floor((dataAtual - new Date(dataAssinatura)) / (1000 * 60 * 60 * 24));

    if (diasUsados > 30) {
      // O período gratuito acabou, o usuário deve pagar
      alert('Período gratuito expirado. Processando pagamento...');
    } else {
      alert(`Você ainda tem ${30 - diasUsados} dias gratuitos.`);
      return;
    }
  } else {
    // Define a data de início do período gratuito
    localStorage.setItem('dataAssinatura', dataAtual);
    alert('Você tem 30 dias gratuitos para usar a plataforma!');
    return;
  }

  // Processamento de pagamento simulado
  alert('Pagamento confirmado! Obrigado por assinar.');
});
