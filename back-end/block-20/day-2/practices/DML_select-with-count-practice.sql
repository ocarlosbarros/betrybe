SELECT COUNT(*) FROM sakila.actor;

SELECT COUNT(first_name) FROM sakila.actor;

SELECT COUNT(DISTINCT first_name) FROM sakila.actor;

SELECT COUNT(DISTINCT first_name, last_name) FROM sakila.actor;

SELECT COUNT(*) FROM sakila.address;

SELECT COUNT(address2) FROM sakila.address;

SELECT COUNT(district) FROM sakila.address
WHERE district = 'Alberta';

SELECT COUNT(address2) FROM sakila.address
WHERE address2 = '';


-- 1.	Quantas senhas temos cadastradas nessa tabela? Resposta: 1

SELECT COUNT(password) FROM sakila.staff;

-- 2.	Quantas pessoas temos no total trabalhando para nossa empresa? Resposta: 2

SELECT COUNT(*) FROM sakila.staff;

-- 3.	Quantos emails temos cadastrados nessa tabela? Resposta: 2

SELECT COUNT(email) FROM sakila.staff;


