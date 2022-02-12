SELECT DISTINCT first_name, last_name FROM sakila.actor;

SELECT first_name FROM sakila.actor;

SELECT DISTINCT first_name FROM sakila.actor;


CREATE DATABASE `School`;

CREATE TABLE IF NOT EXISTS School.Students(
	`Name` VARCHAR(7) CHARACTER SET utf8,
    `Age` INT
);

INSERT INTO School.Students
	VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
    
-- 1.Monte uma query para encontrar pares únicos de nomes e idades .

SELECT DISTINCT Name, Age FROM School.Students;

-- 2.Quantas linhas você encontraria na query anterior?

SELECT '5 linhas';
    
-- 3.Monte uma query para encontrar somente os nomes únicos.

SELECT DISTINCT Name FROM School.Students;
	
-- 4.Quantas linhas você encontraria na query anterior?

SELECT '4 linhas';

-- 5.Monte uma query para encontrar somente as idades únicas.

SELECT DISTINCT Age FROM School.Students;

-- 6.Quantas linhas você encontraria na query anterior?

SELECT '4 linhas';