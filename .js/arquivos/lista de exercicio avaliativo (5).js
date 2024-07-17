/*
3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console
*/

const listaDeTarefas = []

listaDeTarefas [0] = prompt ("insira aqui uma tarefa que você precisa realizar hoje")
listaDeTarefas [1] = prompt ("insira aqui outra tarefa que você precisa realizar hoje")
listaDeTarefas [2] = prompt ("insira aqui mais uma tarefa que você precisa realizar hoje")

console.log ("Lista de tarefas:", listaDeTarefas)

const indice = prompt ("Digite o índice da tarefa que você já realizou: 0, 1 ou 2")
if (indice >= 0 && indice < listaDeTarefas.length) {
    listaDeTarefas.splice(indice, 1)
    console.log("Lista de tarefas atualizada:", listaDeTarefas)
} else {
    console.log("Índice inválido. Nenhuma tarefa foi removida.")
}
