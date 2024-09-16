document.getElementById('cadastro-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmar-senha').value;

  // Valida a senha
  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Verifica se o e-mail já está cadastrado
  if (usuarios.find(usuario => usuario.email === email)) {
    alert('Este e-mail já está cadastrado!');
    return;
  }

  // Cria o objeto do novo usuário
  const novoUsuario = {
    nome,
    email,
    senha,
    statusAssinatura: false, // Começa no período gratuito
    dataAssinatura: new Date().toISOString() // Data de início da assinatura
  };

  usuarios.push(novoUsuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  alert('Cadastro realizado com sucesso!');
  window.location.href = 'index.html'; // Redireciona para a página principal
});
