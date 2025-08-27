/*
3. Biblioteca Digital

- Descrição: Crie um objeto `livroDigital` com as propriedades `titulo`, `autor`, e `paginasLidas`. Crie uma função `lerMaisPaginas` que recebe o objeto `livroDigital` e um número de páginas a serem lidas, e **incrementa** a propriedade `paginasLidas`.
*/

const  livroDigital = {
    titulo: 'O diario de um banana2',
    autor: 'Jeff Kinney',
    paginasLidas: 20
}

function lerMaisPaginas() {
    let paginasMais = Number(prompt("Digite aqui a quantidade de paginas que você quer ler:"));
    livroDigital.paginasLidas += paginasMais;

    console.log(livroDigital)
}

lerMaisPaginas();