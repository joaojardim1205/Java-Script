/*
2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista
*/

let comidasPreferidas = ["arroz e feijao", "strogonoff", "xis", "churrasco", "risoto"]

console.log (comidasPreferidas)

console.log ("Essas são as minhas comidas preferidas: ")
for (let comida of comidasPreferidas) {
    console.log (comida)
}

let novaComidas = prompt ("insira aqui uma das suas comidas favoritas:")
comidasPreferidas [1] = novaComidas

console.log ("Nova lista de comidas preferidas:")
console.log (comidasPreferidas)