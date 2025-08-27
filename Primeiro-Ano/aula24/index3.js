let botao = document.getElementById('botao')
let body = document.body

botao.addEventListener('click', function() {
    let nome = prompt('Qual o seu nome?')
    let idade = prompt('Qual a sua idade?')

    if(idade >= 18) {
        body.style.backgroundColor = 'green'
        alert('Pode entrar')
    } else {
        body.style.backgroundColor = 'red'
        alert('Não pode entrar')
    }
})