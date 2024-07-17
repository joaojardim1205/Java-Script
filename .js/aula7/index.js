const numero = [1, 5, 10, 100, 12, 14]
let verificação = "0"

for(let i = 0; i  < numero.length; i ++){
    if (numero[i] > verificação){
        verificação = numero[i]
    }
}

console.log("O maior número é " + verificação)