let botao = document.getElementById('botao')
let lista = document.getElementById("lista")

botao.addEventListener('click', function(){
    const Item = prompt("Digite aqui um item que você deseja adicionar à lista:");
        
    if (Item) {
            const item = document.createElement('li');

            item.textContent = novoItem;
            
            lista.appendChild(item);
        } else {
            alert("Você não digitou nenhum item.");
        }
})