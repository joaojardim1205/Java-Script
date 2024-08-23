/*
4. Resolva os passos a seguir: 
    
    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
    c) Adicione cada uma das frutas no array `carrinho`

    2. Crie uma função a mais pro exercício 4 de escrita de código. Deve ser uma função que lista os itens presentes no carrinho.
    3. Crie uma função a mais pro exercício 4 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade `disponibilidade` com o valor invertido.
*/

let carrinho = []

const  fruta1 = {
    nome: 'Maçã', 
    disponibilidade: true
};

const  fruta2 = {
    nome: 'Banana', 
    disponibilidade: true
};

const  fruta3 = {
    nome: 'Laranja', 
    disponibilidade: true
};

carrinho.push(fruta1)
carrinho.push(fruta2)
carrinho.push(fruta3)

function  listarCarrinho(){
    console.log(carrinho)
}

function ControleFrutas (fruta) {
    console.log("Disponibilidade: " +  fruta.disponibilidade);
    fruta.disponibilidade = false
}

listarCarrinho()
ControleFrutas(fruta1)