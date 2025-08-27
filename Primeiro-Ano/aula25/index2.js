let botao = document.getElementById('botao')
const tempo = setTimeout(alerta, 5000)

function alerta() {
    botao.innerHTML = 'Explodiu!!'
}