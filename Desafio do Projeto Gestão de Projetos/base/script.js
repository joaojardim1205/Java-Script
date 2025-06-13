
let usuarioCadastrado = 'admin';
let senhaCadastrada = '1234';


document.getElementById('botao-logar').addEventListener('click', () => {
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;
  const mensagem = document.getElementById('mensagem');

  if (usuario === usuarioCadastrado && senha === senhaCadastrada) {
    window.location.href = '../index-sistema.html'
  } else {
    mensagem.style.color = 'red';
    mensagem.textContent = 'Usuário ou senha incorretos.';
  }
});


document.getElementById('botao-alterar-senha').addEventListener('click', () => {
  const novoUsuario = prompt('Digite seu nome de usuário:');
  const novaSenha = prompt('Digite sua nova senha:');

  if (novoUsuario && novaSenha) {
    usuarioCadastrado = novoUsuario;
    senhaCadastrada = novaSenha;
    alert('Usuário e senha atualizados com sucesso!');
    document.getElementById('mensagem').textContent = '';
  } else {
    alert('Preencha corretamente usuário e nova senha.');
  }
});
