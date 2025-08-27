let quadrado = document.getElementById('quadrado')
let botaoExibir = document.getElementById('exibir')
let botaoExcluir = document.getElementById('excluir')

botaoExcluir.addEventListener('click', function() {
    quadrado.style.display = 'none'
});

botaoExibir.addEventListener('click', function() {
    quadrado.style.display = 'block'
});