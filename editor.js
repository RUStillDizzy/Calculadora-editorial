// Inicializando o Quill com as opções de toolbar e funcionalidades
var quill = new Quill('#editor-container', {
  modules: {
    toolbar: '#toolbar'  // Conecta a toolbar ao editor
  },
  theme: 'snow'  // Usa o tema "snow" do Quill
});

// Função para adicionar funcionalidade de arrastar à régua
function makeDraggable(tabId, property) {
  var tab = document.getElementById(tabId);
  var dragging = false;

  tab.addEventListener('mousedown', function(e) {
    dragging = true;
    document.body.style.cursor = 'grabbing';
  });

  document.addEventListener('mouseup', function(e) {
    dragging = false;
    document.body.style.cursor = 'default';
  });

  document.addEventListener('mousemove', function(e) {
    if (dragging) {
      var position = e.clientX - tab.offsetWidth / 2;
      if (position < 0) position = 0;
      if (position > document.getElementById('ruler').offsetWidth - tab.offsetWidth) {
        position = document.getElementById('ruler').offsetWidth - tab.offsetWidth;
      }
      tab.style.left = position + 'px';

      // Ajuste da margem no editor
      var editor = document.getElementById('editor-container').firstChild;
      editor.style[property] = position + 'px';
    }
  });
}

// Adicionando módulos personalizados para espaçamento de linha e letras
var Parchment = Quill.import('parchment');
var lineHeightConfig = {
  scope: Parchment.Scope.BLOCK,
  whitelist: ['1.0', '1.5', '2.0', '2.5', '3.0']
};
var lineHeightStyle = new Parchment.Attributor.Style('line-height', 'line-height', lineHeightConfig);
Quill.register(lineHeightStyle, true);

var letterSpacingConfig = {
  scope: Parchment.Scope.INLINE,
  whitelist: ['normal', '0.1em', '0.2em', '0.3em', '0.4em']
};
var letterSpacingStyle = new Parchment.Attributor.Style('letter-spacing', 'letter-spacing', letterSpacingConfig);
Quill.register(letterSpacingStyle, true);

// Aplicar funcionalidade de arrastar aos marcadores
makeDraggable('left-tab', 'marginLeft');
makeDraggable('right-tab', 'marginRight');

// Contador de Palavras
quill.on('text-change', function() {
  var text = quill.getText().trim();
  var wordCount = text.length ? text.split(/\s+/).length : 0;
  document.getElementById('word-count').innerText = wordCount + ' palavras';
});

// Função para adicionar comentário
document.getElementById('add-comment').addEventListener('click', function() {
  var comment = prompt("Adicione seu comentário:");
  if (comment) {
    quill.format('background', '#ffeb3b');  // Destaque o texto comentado
    quill.insertText(quill.getSelection(), ' [' + comment + '] ', 'italic', true);  // Adicione o comentário
  }
});

// Salvando o conteúdo quando o botão for clicado
document.getElementById('save-button').addEventListener('click', function() {
  var editorContent = quill.root.innerHTML;
  document.getElementById('output').innerHTML = "<h3>Conteúdo Salvo:</h3>" + editorContent;

  // Salvando o conteúdo no localStorage
  localStorage.setItem('savedContent', editorContent);
  alert('Conteúdo salvo com sucesso!');
});

// Carregar conteúdo salvo, se houver
window.onload = function() {
  var savedContent = localStorage.getItem('savedContent');
  if (savedContent) {
    quill.root.innerHTML = savedContent;
  }

  // Gera a lista de capítulos
  generateChapterList();

  // Gera a lista de personagens
  generatePersonagemList();
};

// Função para gerar a lista de capítulos
function generateChapterList() {
  var editor = document.querySelector('#editor-container .ql-editor');
  var chapterList = document.getElementById('chapter-items');
  chapterList.innerHTML = '';  // Limpa a lista de capítulos anterior

  var headers = editor.querySelectorAll('h1, h2, h3');  // Seleciona todos os cabeçalhos

  headers.forEach(function(header, index) {
    var chapterItem = document.createElement('li');
    chapterItem.textContent = header.textContent;
    chapterItem.setAttribute('data-index', index);
    chapterList.appendChild(chapterItem);

    // Função para rolar até o cabeçalho quando clicado
    chapterItem.addEventListener('click', function() {
      header.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Função para gerar a lista de personagens
function generatePersonagemList() {
  const personagemList = document.getElementById('personagem-items');
  personagemList.innerHTML = '';  // Limpa a lista de personagens anterior

  // Obtém os personagens do localStorage
  const personagens = JSON.parse(localStorage.getItem('personagens')) || [];

  if (personagens.length === 0) {
    personagemList.innerHTML = '<li>Nenhum personagem salvo ainda.</li>';
  } else {
    personagens.forEach(function(personagem, index) {
      const personagemItem = document.createElement('li');
      personagemItem.textContent = personagem.nome; // Exibe o nome do personagem
      personagemItem.setAttribute('data-index', index);

      personagemList.appendChild(personagemItem);

      // Exibe os detalhes do personagem ao clicar
      personagemItem.addEventListener('click', function() {
        alert(`Nome: ${personagem.nome}\nProjeto: ${personagem.projeto}\nIdade: ${personagem.idade}\nObjetivo: ${personagem.objetivo}`);
      });
    });
  }
}

// Exibir/ocultar ficha de personagem
document.getElementById('toggle-personagem').addEventListener('click', function() {
  var modalPersonagem = document.getElementById('modal-personagem');
  modalPersonagem.classList.toggle('hidden');
});

// Exibir/ocultar escaleta
document.getElementById('toggle-escaleta').addEventListener('click', function() {
  var modalEscaleta = document.getElementById('modal-escaleta');
  modalEscaleta.classList.toggle('hidden');
});

// Monitora mudanças no editor e atualiza a lista de capítulos
quill.on('text-change', function() {
  generateChapterList();
  generatePersonagemList();  // Atualiza também a lista de personagens
});
