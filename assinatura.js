document.getElementById('pagamento-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const metodoPagamento = document.getElementById('metodo-pagamento').value;
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado')); // Assumindo que você tem um sistema de login

  if (!usuarioLogado) {
    alert('Nenhum usuário logado.');
    return;
  }

  // Encontra o usuário logado e atualiza o status da assinatura
  const usuario = usuarios.find(u => u.email === usuarioLogado.email);
  if (usuario) {
    if (metodoPagamento === 'boleto' || metodoPagamento === 'paypal' || metodoPagamento === 'cartao') {
      usuario.statusAssinatura = true; // Marca como pago
      usuario.dataAssinatura = new Date().toISOString(); // Atualiza a data da assinatura
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      alert('Pagamento confirmado! Assinatura ativada.');
    } else {
      alert('Método de pagamento inválido.');
    }
  } else {
    alert('Usuário não encontrado.');
  }
});
