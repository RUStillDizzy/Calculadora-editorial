document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Captura os valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    // Cria um objeto com os dados do usuário
    const usuario = {
      nome,
      email,
      senha
    };
  
    // Salva os dados no localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));
  
    alert('Cadastro realizado com sucesso!');
    document.getElementById('cadastro-form').reset(); // Limpa o formulário
  });
  