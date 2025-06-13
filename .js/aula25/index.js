let div = document.getElementById('div')

div.addEventListener('mouseover', function() {
    div.style.width = '200px'
    div.style.height = '200px'
})

div.addEventListener('mouseout', function() {
    div.style.width = '100px'
    div.style.height = '100px'
})

document.addEventListener('mousedown', function() {
    div.style.backgroundColor = 'lightgrey'
})

document.addEventListener('mouseup', function() {
    div.style.backgroundColor = 'grey'
})