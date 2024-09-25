const campoCce = document.getElementById('campoCce');
const campoLauda = document.getElementById('campoLauda');
const campoTamanhoLauda = document.getElementById('campoTamanhoLauda');  // Tamanho da lauda (ex.: 2100, 2000 ou 2200)
const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');

// Adiciona o evento de clique ao botão, prevenindo o comportamento padrão do formulário
botao.addEventListener('click', (event) => {
  event.preventDefault();  // Impede o envio do formulário

  const cce = parseFloat(campoCce.value);
  const lauda = parseFloat(campoLauda.value);
  const tamanhoLauda = parseFloat(campoTamanhoLauda.value);  // Tamanho da lauda (2100, 2000, etc.)

  // Verifica se os campos estão preenchidos corretamente
  if (!isNaN(cce) && !isNaN(lauda) && !isNaN(tamanhoLauda)) {
    const total = (cce / tamanhoLauda) * lauda;
    
    // Exibe o resultado formatado em reais (R$) com separadores de milhar e casas decimais
    resultado.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Limpa os campos de entrada após o cálculo, mas o resultado permanece visível
    campoCce.value = '';
    campoLauda.value = '';
    campoTamanhoLauda.value = '';
  } else {
    resultado.textContent = "Por favor, insira valores válidos.";  // Mensagem de erro
  }
});

// Abrindo o modal de login quando o botão for clicado
const loginButton = document.getElementById('login-button');
const loginModal = document.getElementById('login-modal');

loginButton.addEventListener('click', () => {
    loginModal.classList.toggle('hidden');  // Alterna entre exibir e esconder o modal
});

// Simulação de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se o usuário existe
    const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === password);

    if (usuarioEncontrado) {
        alert('Login bem-sucedido!');
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));  // Salva o usuário logado no localStorage
        loginModal.classList.add('hidden');  // Fecha o modal de login
    } else {
        alert('Email ou senha incorretos.');
    }
});

