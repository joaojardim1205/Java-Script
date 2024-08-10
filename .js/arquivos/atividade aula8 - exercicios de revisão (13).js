//Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar: A mensagem "Aprovado", se a média alcançada for maior ou igual a sete; A mensagem "Reprovado", se a média for menor do que sete; A mensagem "Aprovado com Distinção", se a média for igual a dez.

let NotaAluno = parseFloat (prompt ("insira aqui a primeira nota que voce recebeu"))

let NotaAluno2 = parseFloat (prompt ("insira aqui a segunda nota que voce recebeu"))

let NotaAlunoSoma = NotaAluno + NotaAluno2
let NotaAlunoMedia = NotaAlunoSoma / 2

if (NotaAlunoMedia === 10){
    console.log ("Você foi aprovado com distinção, parabens!!") 
} else if (NotaAlunoMedia >= 7) {
    console.log ("Você foi aprovado!!")
} else {
    console.log ("Você foi reprovado!")
}