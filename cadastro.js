document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Captura os valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    const senhaFeedback = document.getElementById('senha-feedback');
    if (senha.length < 8) {
      senhaFeedback.textContent = 'A senha deve ter pelo menos 8 caracteres.';
      return;
    } else if (!/[A-Z]/.test(senha) || !/[0-9]/.test(senha)) {
      senhaFeedback.textContent = 'A senha deve conter pelo menos uma letra maiúscula e um número.';
      return;
    } else {
      senhaFeedback.textContent = '';
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
  
    // Cria um objeto com os dados do usuário
    const usuario = {
      nome,
      email,
      senha
    };
  
    // Salva os dados no localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));
  
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'index.html'; // Redireciona para a página principal
  });
  