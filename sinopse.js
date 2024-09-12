document.getElementById('sinopse-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obtém os valores do formulário
    const titulo = document.getElementById('titulo').value;
    const tipoSinopse = document.getElementById('tipo-sinopse').value;
    const sinopse = document.getElementById('sinopse').value;
  
    // Cria um objeto com os dados da sinopse
    const dadosSinopse = {
      titulo,
      tipoSinopse,
      sinopse
    };
  
    // Salva os dados no localStorage
    localStorage.setItem('dadosSinopse', JSON.stringify(dadosSinopse));
  
    alert('Sinopse enviada com sucesso!');
    document.getElementById('sinopse-form').reset(); // Limpa o formulário
  });
  