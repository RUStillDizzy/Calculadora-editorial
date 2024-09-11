// Inicializando o Quill editor
var quill = new Quill('#editor-container', {
    theme: 'snow' // Tema básico com barra de ferramentas
  });
  
  // Salvando o conteúdo quando o botão for clicado
  document.getElementById('save-button').addEventListener('click', function() {
    var editorContent = quill.root.innerHTML;
    document.getElementById('output').innerHTML = "<h3>Conteúdo Salvo:</h3>" + editorContent;
  });
  