document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtém os valores do formulário
    const emailLogin = document.getElementById('email-login').value;
    const senhaLogin = document.getElementById('senha-login').value;
  
    // Verifica se o usuário está cadastrado
    const usuario = JSON.parse(localStorage.getItem('usuario'));
  
    if (usuario && usuario.email === emailLogin && usuario.senha === senhaLogin) {
      alert('Login bem-sucedido!');
      window.location.href = 'usuario.html'; // Redireciona para a página do usuário
    } else {
      alert('E-mail ou senha incorretos!');
    }
  });
  