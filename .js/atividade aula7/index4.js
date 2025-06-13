let botao = document.getElementById('botao')
let texto = document.getElementById('texto')

botao.addEventListener('click', function() {
    let novoTexto = prompt('Digite um novo texto')
    texto.innerText = novoTexto
})