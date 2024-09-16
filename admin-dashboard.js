document.addEventListener('DOMContentLoaded', function() {
    const tabelaUsuarios = document.querySelector('#tabela-usuarios tbody');
    const usuario = JSON.parse(localStorage.getItem('usuario')); // Coleta o único usuário
  
    if (usuario) {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${usuario.nome}</td><td>${usuario.email}</td>`;
      tabelaUsuarios.appendChild(row);
    } else {
      const row = document.createElement('tr');
      row.innerHTML = `<td colspan="2">Nenhum usuário cadastrado</td>`;
      tabelaUsuarios.appendChild(row);
    }
  });
  
  // Função para exportar os dados para CSV
  function exportarParaCSV() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
  
    if (!usuario) {
      alert('Nenhum dado encontrado para exportar.');
      return;
    }
  
    const csvContent = "data:text/csv;charset=utf-8,"
      + "Nome,Email\n"
      + `${usuario.nome},${usuario.email}`;
  
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "usuarios.csv");
    document.body.appendChild(link); // Requerido para Firefox
    link.click();
  }
  