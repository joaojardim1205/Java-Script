/*
Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:
O primeiro filme foi lançado antes do segundo? false
O primeiro filme foi lançado no mesmo ano do segundo? true
*/

const Titanic = {
    nome: 'titanic',
    lancamento: 1998   
}

const Avatar = {
    nome: 'Avatar',
    lancamento: 2009
}

function filmes (filme1, filme2) {
    console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.lancamento < filme2.lancamento}`);
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.lancamento === filme2.lancamento}`);
}
  
filmes(Titanic, Avatar); 



    