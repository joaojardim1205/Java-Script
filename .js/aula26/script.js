const container = document.getElementById('container')
const movable = document.getElementById('movable')
const target = document.getElementById('target')

let posX = 0
let posY = 0
const movimento = 10
const velocidadeProjetil = 10

document.addEventListener('keydown', (event) => {
    if(event.key === 'w'){
        posY -= movimento
        if(posY < 0){
            posY = 0
        }
    } else if(event.key === 's'){
        posY += movimento
        if(posY > 350){
            posY = 350
        }
    } else if(event.key === 'a'){
        posX -= movimento
        if(posX < 0){
            posX = 0
        }
    } else if(event.key === 'd'){
        posX += movimento
        if(posX > 550){
            posX = 550
        }
    } else if(event.key === 'e') { 
        dispararProjetil();
    }

    movable.style.top = posY + 'px'
    movable.style.left = posX + 'px'

    azul.style.top = posY + 'px'
    azul.style.left = posX + 'px'

    if(colisaoDetectada(azul, vermelho)) {
        alert('Colisão detectada!')
    }
});

function colisaoDetectada(a, b) {
    const azul = a.getBoundingClientRect()
    const vermelho = b.getBoundingClientRect()
        
    if(azul.top > vermelho.bottom) {
        return false;
    }

    if(azul.bottom < vermelho.top) {
        return false;
    }

    if(azul.left > vermelho.right) {
        return false;
    }

    if(azul.right < vermelho.left) {
        return false;
    }

    return true;
}

function dispararProjetil() {
    const projetil = document.createElement('div')
    projetil.classList.add('projetil')

    const movableRect = movable.getBoundingClientRect();

    projetil.style.left = (movableRect.right + 5) + 'px';
    projetil.style.top = (movableRect.top + movableRect.height / 2 - 5) + 'px';
    document.body.appendChild(projetil)

    const interval = setInterval(() => {
        let posXProjetil = parseInt(projetil.style.left)
        
        posXProjetil += velocidadeProjetil
        projetil.style.left = posXProjetil + 'px'

        if (posXProjetil > container.offsetWidth) {
            projetil.remove()
            clearInterval(interval)
        }

        if (colisaoDetectada(projetil, target)) {
            alert('O projétil acertou o alvo!')
            projetil.remove()
            clearInterval(interval)
        }
    }, 20)
}