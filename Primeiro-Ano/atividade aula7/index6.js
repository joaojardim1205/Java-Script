let botao = document.getElementById('botao')
let div = document.getElementById('div')
let candidatoEscolhido
let confirmar

const candidatos = {
    '13': {nome: 'FUFA', voto: 0},
    '11': {nome: 'GUSTAVO FINCK', voto: 0},
    '45': {nome: 'RAIZER FERREIRA', voto: 0},
    '15': {nome: 'TÂNIA DA SILVA', voto: 0},
    '12': {nome: 'TARCÍSIO ZIMMERMANN', voto: 0}
}

botao.addEventListener('click', function(){
    const candidato = prompt('Escolha um numero de candidato para votar: \nFUFA PT 13 \nGUSTAVO FINCK PP 11 \nRAIZER FERREIRA PSDB 45 \nTÂNIA DA SILVA MDB	15 \nTARCÍSIO ZIMMERMANN PDT 12');

    switch(candidato) {
        case '13':
            candidatoEscolhido = candidatos[candidato]

            document.getElementById('div').innerHTML = `
            <h2>${candidatoEscolhido.nome}</h2>
            <img src='img/whatsapp_image_2023_08_29_at_15_21_59__1_-21165326.webp'>
            `;

            confirmar = prompt('Você deseja confirmar?')
            
            if(confirmar) {
                candidatoEscolhido.voto++
                alert(`Você votou em ${candidatoEscolhido.nome}: ${candidatoEscolhido.voto}`)
            } else {
                alert('Voto nulo')
                document.getElementById('div').innerText = ''
            }
            break
        case '11':
            candidatoEscolhido = candidatos[candidato]

            document.getElementById('div').innerHTML = `
            <h2>${candidatoEscolhido.nome}</h2>
            <img src='img/OIP.jpeg'>
            `;

            confirmar = prompt('Você deseja confirmar?')
            
            if(confirmar) {
                candidatoEscolhido.voto++
                alert(`Você votou em ${candidatoEscolhido.nome}: ${candidatoEscolhido.voto}`)
            } else {
                alert('Voto nulo')
                document.getElementById('div').innerText = ''
            }
            break
        case '45':
            candidatoEscolhido = candidatos[candidato]

            document.getElementById('div').innerHTML = `
            <h2>${candidatoEscolhido.nome}</h2>
            <img src='img/OIP (1).jpeg'>
            `;

            confirmar = prompt('Você deseja confirmar?')
            
            if(confirmar) {
                candidatoEscolhido.voto++
                alert(`Você votou em ${candidatoEscolhido.nome}: ${candidatoEscolhido.voto}`)
            } else {
                alert('Voto nulo')
                document.getElementById('div').innerText = ''
            }
            break
        case '15':
            candidatoEscolhido = candidatos[candidato]

            document.getElementById('div').innerHTML = `
            <h2>${candidatoEscolhido.nome}</h2>
            <img src='img/Tani-da-Silva_foto-Lu-Freitas_PMNH-450x307.png'>
            `;

            confirmar = prompt('Você deseja confirmar?')
            
            if(confirmar) {
                candidatoEscolhido.voto++
                alert(`Você votou em ${candidatoEscolhido.nome}: ${candidatoEscolhido.voto}`)
            } else {
                alert('Voto nulo')
                document.getElementById('div').innerText = ''
            }
            break
        case '12':
            candidatoEscolhido = candidatos[candidato]

            document.getElementById('div').innerHTML = `
            <h2>${candidatoEscolhido.nome}</h2>
            <img src='img/tarcisio.jpg'>
            `;

            confirmar = prompt('Você deseja confirmar?')
            
            if(confirmar) {
                candidatoEscolhido.voto++
                alert(`Você votou em ${candidatoEscolhido.nome}: ${candidatoEscolhido.voto}`)
            } else {
                alert('Voto nulo')
                document.getElementById('div').innerText = ''
            }
            break
    }
})