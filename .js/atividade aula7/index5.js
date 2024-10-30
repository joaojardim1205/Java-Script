let texto = document.getElementById('texto')

texto.addEventListener('keydown', (event) => {
    const teclaPressionada = event.key
    texto.innerText = `Você pressionou: ${teclaPressionada}`
});