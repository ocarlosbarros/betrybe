-- 1. Insira um novo funcionário na tabela sakila.staff .
-- Para saber quais campos são obrigatórios, clique com o botão direito 
-- na tabela sakila.staff e selecione "Table Inspector". 
-- Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. 
-- Lembre-se de que valores que são gerados automaticamente 
-- não precisam ser inseridos manualmente. Boa explorada!

INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, `active`, username, last_update )
VALUES ('Peter', 'Parker', 1, 1, 1, 'parker', '2022-03-23');

SELECT * FROM sakila.staff;


-- 2.	Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, `active`, username, `password`, last_update )
	VALUES 
		('Bruce', 'Wayne', 2, 'wayne_bruce@email.com', 2, 0, 'Wbruce', 'bat5678', now()),
		('Diana', 'Prince', 2, 'prince_diana@email.com', 1, 1, 'Wdiana', 'Wwoman356', now());
        
-- 3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer
-- e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO sakila.actor (first_name, last_name, last_update)
SELECT first_name, last_name, last_update
	FROM sakila.customer LIMIT 5;

SELECT * FROM sakila.actor; 
   
-- 4.	Cadastre três categorias de uma vez só na tabela sakila.category .
SELECT * FROM sakila.category;

INSERT INTO sakila.category (name, last_update)
	VALUES
		('Romance', now()),
        ('Mistery', now()),
        ('Fantasy', now());

-- 5.	Cadastre uma nova loja na tabela sakila.store .
SELECT * FROM sakila.store;

INSERT INTO sakila.store(manager_staff_id, address_id, last_update)
	VALUE (11, 1, now());