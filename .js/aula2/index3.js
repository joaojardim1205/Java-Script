/*
Agora faça um programa que verifica que turno do dia um aluno estuda. 
Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
*/

let horario = prompt ("insira aqui o turno do dia que voce estuda \nM (matutino) ou V (Vespertino) ou N (Noturno)")

if(horario == "M"){
    console.log ("Bom dia!")
} else if (horario == "V"){
    console.log ("Boa tarde!")
} else if (horario == "N"){
    console.log ("Boa noite!")
}