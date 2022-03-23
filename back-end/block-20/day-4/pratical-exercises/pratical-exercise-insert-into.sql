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
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name 
	FROM sakila.customer 
    ORDER BY customer_id
    LIMIT 5;
   
-- 4.	Cadastre três categorias de uma vez só na tabela sakila.category .

INSERT INTO sakila.category (name)
	VALUES
		('Romance'),
        ('Mistery'),
        ('Fantasy');

-- 5.	Cadastre uma nova loja na tabela sakila.store .

INSERT INTO sakila.store(manager_staff_id, address_id)
	VALUE (11, 1);