const movable = document.getElementById('movable')
const target = document.getElementById('target')

let posX = 0
let posY = 0
const movimento = 10

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
    }

    movable.style.top = posY + 'px'
    movable.style.left = posX + 'px'
})