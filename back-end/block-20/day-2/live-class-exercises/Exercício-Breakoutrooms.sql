-- 1. Eu quero somente os nomes dos livros cadastrados na biblioteca;
-- 2. Eu quero saber quantos livros temos cadastrados em nossa biblioteca;
-- 3. Eu quero uma lista com 2 livros e suas informações, mas eu não quero o livro 'Um livro do Ano' e 'A linugagem Javascript';
-- 4. Quero os livros mais recentes primeiro, e também em ordem alfabética;
-- 5. Eu quero todas as informações do livro com maior estoque na biblioteca. Somente o com o maior estoque;
-- 6. Eu quero criar uma lista com os livros em ordem decrescente de quantidade. Como poderia encontrar isso?

USE Faculdade;

SELECT * FROM biblioteca;

SELECT nome FROM biblioteca;

SELECT COUNT(nome) FROM biblioteca;

SELECT * FROM biblioteca LIMIT 2 OFFSET 2;

SELECT * FROM biblioteca ORDER BY `ano` DESC, `nome` ASC;

SELECT * FROM biblioteca ORDER BY `número de cópias` DESC LIMIT 1;

SELECT * FROM biblioteca ORDER BY `número de cópias` DESC; 