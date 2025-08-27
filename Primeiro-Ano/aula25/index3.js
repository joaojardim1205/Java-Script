let botao = document.getElementById('botao')

setInterval(temporizador, 1000)

function temporizador() {
    const date = new date()
    botao.innerHTML = date.toLocateTimeString()
}
