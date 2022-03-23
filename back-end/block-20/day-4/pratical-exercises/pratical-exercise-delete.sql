SET SQL_SAFE_UPDATES = 0;

-- 1.	Exclua do banco de dados o ator com o nome de "KARL".
  
DELETE FROM sakila.film_actor
    WHERE actor_id = 12;

DELETE FROM sakila.actor
    WHERE first_name = 'KARL';

-- 2.	Exclua do banco de dados os atores com o nome de "MATTHEW".
    
DELETE FROM sakila.film_actor
    WHERE actor_id IN (8, 103, 181)
    ORDER BY actor_id;
    
DELETE FROM sakila.actor
    WHERE first_name = 'MATTHEW';

-- 3.	Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
    
DELETE FROM sakila.film_text
    WHERE `description` LIKE '%Saga%'; 

-- 4.	Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

-- 5.	Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE 
-- 	foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
-- 	Exclua o banco de dados e o recrie (use as instruções no início desta aula).

-- Tabela actor - sem restrições ON DELETE

-- Tabela address - ON DELETE RESTRICT ON UPDATE CASCADE

-- Tabela category - sem restrições ON DELETE

-- Tabela city - ON DELETE RESTRICT ON UPDATE CASCADE

-- Tabela country - sem restrições ON DELETE

-- Tabela customer -	CONSTRAINT `fk_customer_address` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
-- 					CONSTRAINT `fk_customer_store` FOREIGN KEY (`store_id`) REFERENCES `store` (`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE

-- Tabela film			CONSTRAINT `fk_film_language` FOREIGN KEY (`language_id`) REFERENCES `language` (`language_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
-- 					CONSTRAINT `fk_film_language_original` FOREIGN KEY (`original_language_id`) REFERENCES `language` (`language_id`) ON DELETE RESTRICT ON UPDATE CASCADE

-- Tabela film_actor	CONSTRAINT `fk_film_actor_actor` FOREIGN KEY (`actor_id`) REFERENCES `actor` (`actor_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
-- 					CONSTRAINT `fk_film_actor_film` FOREIGN KEY (`film_id`) REFERENCES `film` (`film_id`) ON DELETE RESTRICT ON UPDATE CASCADE

-- Tabela film_category	CONSTRAINT `fk_film_category_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
-- 						CONSTRAINT `fk_film_category_film` FOREIGN KEY (`film_id`) REFERENCES `film` (`film_id`) ON DELETE RESTRICT ON UPDATE CASCADE

-- Tabela film_text	sem restrições ON DELETE

-- Tabela inventory	CONSTRAINT `fk_inventory_film` FOREIGN KEY (`film_id`) REFERENCES `film` (`film_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
-- 					CONSTRAINT `fk_inventory_store` FOREIGN KEY (`store_id`) REFERENCES `store` (`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE

-- Tabela language	sem restrições ON DELETE

-- Tabela payment	CONSTRAINT `fk_payment_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
-- 				CONSTRAINT `fk_payment_rental` FOREIGN KEY (`rental_id`) REFERENCES `rental` (`rental_id`) ON DELETE SET NULL ON UPDATE CASCADE,
-- 				CONSTRAINT `fk_payment_staff` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`staff_id`) ON DELETE RESTRICT ON UPDATE CASCADE

-- Tabela rental	CONSTRAINT `fk_rental_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
-- 				CONSTRAINT `fk_rental_inventory` FOREIGN KEY (`inventory_id`) REFERENCES `inventory` (`inventory_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
-- 				CONSTRAINT `fk_rental_staff` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`staff_id`) ON DELETE RESTRICT ON UPDATE CASCADE

-- Tabela staff	CONSTRAINT `fk_staff_address` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
-- 				CONSTRAINT `fk_staff_store` FOREIGN KEY (`store_id`) REFERENCES `store` (`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE

-- Tabela store	CONSTRAINT `fk_store_address` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
-- 				CONSTRAINT `fk_store_staff` FOREIGN KEY (`manager_staff_id`) REFERENCES `staff` (`staff_id`) ON DELETE RESTRICT ON UPDATE CASCADE