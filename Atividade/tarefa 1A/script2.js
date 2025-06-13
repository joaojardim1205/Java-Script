// Criando o array de frutas
let frutas = ['Maçã', 'Banana', 'Laranja'];

// Exibir frutas na lista HTML
function exibirFrutas() {
  const ul = document.getElementById('lista-frutas');
  ul.innerHTML = ''; // Limpa a lista antes de atualizar
  frutas.forEach(fruta => {
    const li = document.createElement('li');
    li.textContent = fruta;
    ul.appendChild(li);
  });
}

// Adiciona evento ao botão de adicionar
document.getElementById('btn-adicionar').addEventListener('click', () => {
  const novaFruta = document.querySelector('input').value;
  if (novaFruta) {
    frutas.push(novaFruta);
    exibirFrutas();
    document.querySelector('nova-fruta').value = '';
  }
});

// Adiciona evento ao botão de remover
document.getElementById('btn-remover').addEventListener('click', () => {
  frutas.pop(); // Remove o último item do array
  exibirFrutas();
});

// Adiciona evento para mudar a cor de fundo
document.getElementById('btn-mudar-cor').addEventListener('click', () => {
  // Gera uma cor aleatória
  const corAleatoria = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
  document.body.style.backgroundColor = corAleatoria;
});

// Exibe a lista inicialmente
exibirFrutas();
