let botao1 = document.getElementById('botao1')
let botao2 = document.getElementById('botao2')

let contador = 0

botao1.addEventListener('click', function() {
    contador ++
    console.log('Vezes Clicadas: ' + contador)
})

botao2.addEventListener('click', function() {
    contador = 0
    console.log('Contador Resetado')
})