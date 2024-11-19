const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');
const resetButton = document.querySelector('.reset');

let placarX = 0;
let placarO = 0;
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;
let tempoRestante = 30; 
let timer;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const handleCellClick = (event) => {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== '' || !isGameActive) {
        return;
    }

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    checkResult();
};

const checkResult = () => {
    for (let condicao of winningConditions) {
        const [a, b, c] = condicao;
        if (board[a] && board[a] == board[b] && board[a] == board[c]) {
            message.textContent = (`Jogador ${currentPlayer} venceu a rodada!!`);
            isGameActive = false;
            updatePlacar(currentPlayer);
            clearInterval(timer);
            highlightWinningCells(a, b, c); 
            return;
        }
    }

    if (!board.includes('')) {
        message.textContent = 'Empate!';
        isGameActive = false;
        clearInterval(timer);
        return;
    }

    currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    resetTempo();
};

const highlightWinningCells = (a, b, c) => {
    cells[a].classList.add('vencedor');
    cells[b].classList.add('vencedor');
    cells[c].classList.add('vencedor');
};

const updatePlacar = (vencedor) => {
    if (vencedor === 'X') {
        placarX++;
        document.getElementById('placarX').textContent = placarX;
    } else {
        placarO++;
        document.getElementById('placarO').textContent = placarO;
    }
};

const resetGame = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    currentPlayer = 'X';
    message.textContent = '';
    cells.forEach(cell => {
        cell.textContent = '';
    });
    resetTempo();
};

const resetTempo = () => {
    clearInterval(timer);
    tempoRestante = 15; 
    document.getElementById('tempoRestante').textContent = tempoRestante;
    timer = setInterval(() => {
        tempoRestante--;
        document.getElementById('tempoRestante').textContent = tempoRestante;
        if (tempoRestante <= 0) {
            alert(`Tempo esgotado! A vez foi passada para ${currentPlayer === 'X' ? 'O' : 'X'}.`);
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; 
            resetTempo(); 
        }
    }, 1000);
};


cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);
resetTempo();