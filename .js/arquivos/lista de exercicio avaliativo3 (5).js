/*
Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. 
*/

function teoremaPitagoras (cateto1, cateto2){
    const somaCateto = cateto1*cateto1 + cateto2*cateto2
    const somaHipotenusa = Math.sqrt(somaCateto)

    return somaHipotenusa
}

console.log(teoremaPitagoras(3,4))
