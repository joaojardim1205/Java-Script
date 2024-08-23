const filme = {
    diretor: "James Cameron",
    nome: "Titanic",
    anoLançamento: 1997,
    elenco: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    nomePersonagens: ["Jack Dawson", "Rose Dewitt", "Cal Hockley"]
}

console.log(filme.diretor);
console.log(filme.nome);
console.log(filme["anoLançamento"]);
console.log(filme["elenco"]);
console.log(filme.elenco[0], "é", filme.nomePersonagens[0], "\n", filme.elenco[1], "é", filme.nomePersonagens[1], "\n", filme.elenco[2], "é", filme.nomePersonagens[2]);


filme.elenco[0] = "Xuxa"

console.log(filme.elenco)