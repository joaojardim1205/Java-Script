let quadrado1 = document.getElementById('quadrado1')
let quadrado2 = document.getElementById('quadrado2')
let quadrado3 = document.getElementById('quadrado3')

quadrado1.addEventListener('click', function() {
    quadrado1.style.backgroundColor = 'red'

    if(quadrado1.style.backgroundColor == 'red') {
        quadrado1.addEventListener('click', function() {
            quadrado1.style.backgroundColor = 'orange'
        });
    }
});

quadrado2.addEventListener('click', function() {
    quadrado2.style.backgroundColor = 'blue'

    if(quadrado2.style.backgroundColor == 'blue') {
        quadrado2.addEventListener('click', function() {
            quadrado2.style.backgroundColor = 'brown'
        });
    }
});

quadrado3.addEventListener('click', function() {
    quadrado3.style.backgroundColor = 'yellow'

    if(quadrado3.style.backgroundColor == 'yellow') {
        quadrado3.addEventListener('click', function() {
            quadrado3.style.backgroundColor = 'green'
        });
    }
});