/*
Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
*/

let horario = prompt ("insira aqui o turno do dia que voce estuda \nM (matutino) ou V (Vespertino) ou N (Noturno)")

switch (horario){
    case "M":
        console.log ("Bom dia!")
        break
    case "V":
        console.log ("Boa tarde!")
        break
    case "N":
        console.log ("Boa noite!")
        break
}