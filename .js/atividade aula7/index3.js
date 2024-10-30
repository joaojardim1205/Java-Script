let botao = document.getElementById('botao')
let texto = document.getElementById('texto')


botao.addEventListener('click', function() {
    texto.style.display = 'block'

    if(texto.style.display = 'block') {
        botao.addEventListener('click', function() {
            texto.style.display = 'none'
        });
    }
});