CREATE DATABASE IF NOT EXISTS Faculdade;

USE Faculdade;

CREATE TABLE IF NOT EXISTS biblioteca(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    emprestado boolean,
    `número de cópias` INT,
    `gênero` VARCHAR(50),
    ano INT
);

INSERT INTO 
Faculdade.biblioteca(`nome`, `emprestado`, `número de cópias`, `gênero`,`ano`)
VALUES 
('Um livro do Ano', false, 5, 'Terror', 2019),
('A linugagem Javascript', true, 10, 'Tech', 2020),
('O retorno de Jedi', false, 6, 'Ficção', 1979),
('Biscoito ou bolacha? O guia definitivo', false, 20, 'Auto ajuda', 2021);     
    