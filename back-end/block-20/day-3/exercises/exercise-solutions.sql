-- 1.Escreva uma query para exibir todas as peças que começam com GR .
	
    SELECT * 
		FROM PecasFornecedores.Pecas
        WHERE name LIKE 'Gr%';
        
-- 2.Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2 . 
-- Organize o resultado por ordem alfabética de fornecedor.
	
    SELECT *
		FROM PecasFornecedores.Fornecimentos
        WHERE peca = 2
        ORDER BY Fornecedor;
        
-- 3.Escreva uma query para exibir as peças, preço e fornecedor de todos
--  os fornecimentos em que o código do fornecedor tenha a letra N .

	SELECT peca, preco, Fornecedor
		FROM PecasFornecedores.Fornecimentos
        WHERE Fornecedor LIKE '%N%';

-- 4.Escreva uma query para exibir todas as informações dos fornecedores
--  que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.
	
    SELECT *
		FROM PecasFornecedores.Fornecedores
        WHERE name LIKE '%LTDA'
        ORDER BY name DESC;
    
-- 5.Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.

	SELECT COUNT(*) quantidade_fornecedores
		FROM PecasFornecedores.Fornecedores
        WHERE name LIKE '%F%';

-- 6.Escreva uma query para exibir os fornecimentos onde as peças 
-- custam mais de R$15,00 e menos de $40,00 . Ordene os resultados por ordem crescente.

	SELECT *
		FROM PecasFornecedores.Fornecimentos
        WHERE preco BETWEEN 15.00 AND 40.00
        ORDER BY preco;

-- 7.Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019 

	SELECT COUNT(*) AS Vendas
		FROM PecasFornecedores.Vendas
		WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30'  