document.getElementById('admin-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Dados de login de administrador (substitua por suas credenciais)
    const adminEmail = 'laiza.hortencio@gmail.com'; // Seu e-mail
    const adminSenha = 'laiza314160'; // Sua senha
  
    // Coleta os valores do formulário
    const email = document.getElementById('admin-email').value;
    const senha = document.getElementById('admin-senha').value;
  
    // Valida o login
    if (email === adminEmail && senha === adminSenha) {
      alert('Login bem-sucedido!');
      window.location.href = 'admin-dashboard.html'; // Redireciona para o painel administrativo
    } else {
      alert('E-mail ou senha incorretos!');
    }
  });
  