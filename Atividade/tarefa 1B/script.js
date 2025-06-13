let transacoes = [];

function criarTransacao(descricao, valor, tipo) {
    return { descricao, valor, tipo };
}

function salvar() {
    localStorage.setItem('transacoes', JSON.stringify(transacoes));
}

function atualizar() {
    const lista = document.getElementById('lista');
    const saldoEl = document.getElementById('saldo');
    lista.innerHTML = '';
    let saldo = 0;

    transacoes.forEach((t, i) => {
        saldo += t.tipo === 'entrada' ? t.valor : -t.valor;
        const div = document.createElement('div');
        div.className = 'transacao';
        div.innerHTML = `<span>${t.descricao} - R$ ${t.valor}</span> <button class="remove" onclick="remover(${i})">X</button>`;
        lista.appendChild(div);
    });

    saldoEl.textContent = `Saldo: R$${saldo}`;
}

function adicionar() {
    const desc = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const tipo = document.getElementById('tipo').value;
    const erro = document.getElementById('erro');

    if (!desc || isNaN(valor) || valor <= 0) {
        erro.textContent = 'Preencha descrição e valor válido.';
        return;
    }

    transacoes.push(criarTransacao(desc, valor, tipo));
    salvar();
    atualizar();

    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = '';
    erro.textContent = '';
}

function alternarTema() {
    document.body.classList.toggle('dark');
}

function remover(i) {
    transacoes.splice(i, 1);
    salvar();
    atualizar();
}

atualizar();
