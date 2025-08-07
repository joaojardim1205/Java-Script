CREATE DATABASE torneio_esports;
USE torneio_esports;

CREATE TABLE jogadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    turma VARCHAR(20) NOT NULL
);

CREATE TABLE jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    plataforma VARCHAR(30) NOT NULL
);

CREATE TABLE partidas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jogador_id INT NOT NULL,
    jogo_id INT NOT NULL,
    pontuacao INT NOT NULL,
    data_partida DATE NOT NULL,
    FOREIGN KEY (jogador_id) REFERENCES jogadores(id) ON DELETE CASCADE,
    FOREIGN KEY (jogo_id) REFERENCES jogos(id) ON DELETE CASCADE
);

INSERT INTO jogos (titulo, genero, plataforma) VALUES
('Valorant', 'FPS', 'PC'),
('League of Legends', 'MOBA', 'PC'),
('FIFA 23', 'Esporte', 'PS5');

INSERT INTO jogadores (nome, turma) VALUES
('João Silva', '2°A'),
('Maria Santos', '2°B'),
('Pedro Oliveira', '3°A'),
('Ana Costa', '2°A');

INSERT INTO partidas (jogador_id, jogo_id, pontuacao, data_partida) VALUES
(1, 1, 2500, '2024-01-15'),
(2, 2, 1800, '2024-01-16'),
(3, 1, 3200, '2024-01-17'),
(4, 3, 1500, '2024-01-18'),
(1, 2, 2100, '2024-01-19');

UPDATE jogos SET plataforma = 'PC' WHERE titulo = 'Valorant';
UPDATE jogadores SET turma = '3°B' WHERE nome = 'João Silva';
DELETE FROM partidas WHERE id = 3;

SELECT j.nome AS jogador, g.titulo AS jogo, p.pontuacao
FROM partidas p
JOIN jogadores j ON p.jogador_id = j.id
JOIN jogos g ON p.jogo_id = g.id
ORDER BY j.nome;

SELECT j.nome AS jogador, SUM(p.pontuacao) AS pontuacao_total
FROM partidas p
JOIN jogadores j ON p.jogador_id = j.id
GROUP BY j.nome
ORDER BY pontuacao_total DESC;

SELECT g.titulo AS jogo, COUNT(p.id) AS total_partidas
FROM jogos g
LEFT JOIN partidas p ON g.id = p.jogo_id
GROUP BY g.titulo
ORDER BY total_partidas DESC;

SELECT j.nome AS jogador, COUNT(p.id) AS total_partidas
FROM jogadores j
JOIN partidas p ON j.id = p.jogador_id
GROUP BY j.nome
HAVING COUNT(p.id) > 1
ORDER BY total_partidas DESC;

SELECT g.titulo AS jogo, g.genero, g.plataforma
FROM jogos g
LEFT JOIN partidas p ON g.id = p.jogo_id
WHERE p.jogo_id IS NULL;

SELECT j.turma, AVG(p.pontuacao) AS media_pontuacao
FROM jogadores j
JOIN partidas p ON j.id = p.jogador_id
GROUP BY j.turma
ORDER BY media_pontuacao DESC;

SELECT j.nome AS jogador, SUM(p.pontuacao) AS pontuacao_total
FROM partidas p
JOIN jogadores j ON p.jogador_id = j.id
GROUP BY j.nome
ORDER BY pontuacao_total DESC
LIMIT 3;

SELECT g.titulo AS jogo, AVG(p.pontuacao) AS media_pontuacao
FROM jogos g
JOIN partidas p ON g.id = p.jogo_id
GROUP BY g.titulo
ORDER BY media_pontuacao DESC;

SELECT j.nome AS jogador, g.titulo AS jogo, p.pontuacao, p.data_partida
FROM partidas p
JOIN jogadores j ON p.jogador_id = j.id
JOIN jogos g ON p.jogo_id = g.id
WHERE p.data_partida BETWEEN '2024-01-15' AND '2024-01-22'
ORDER BY p.data_partida DESC;

SELECT turma, COUNT(*) AS total_jogadores
FROM jogadores
GROUP BY turma
ORDER BY total_jogadores DESC;

SELECT 'Total de jogadores' AS estatistica, COUNT(*) AS valor FROM jogadores
UNION ALL
SELECT 'Total de jogos' AS estatistica, COUNT(*) AS valor FROM jogos
UNION ALL
SELECT 'Total de partidas' AS estatistica, COUNT(*) AS valor FROM partidas
UNION ALL
SELECT 'Pontuação total do torneio' AS estatistica, SUM(pontuacao) AS valor FROM partidas;

SELECT ROW_NUMBER() OVER (ORDER BY SUM(p.pontuacao) DESC) AS posicao,
       j.nome AS jogador,
       j.turma,
       SUM(p.pontuacao) AS pontuacao_total,
       COUNT(p.id) AS partidas_jogadas,
       ROUND(AVG(p.pontuacao), 2) AS media_pontuacao

FROM jogadores j
JOIN partidas p ON j.id = p.jogador_id
GROUP BY j.id, j.nome, j.turma
ORDER BY pontuacao_total DESC;