SELECT * FROM actor;

SELECT * FROM actor WHERE actor_id = 101;

SELECT * FROM film;

SELECT * FROM film WHERE length > 50;

SELECT * FROM film WHERE length > 50 ORDER BY title;

SELECT COUNT(*) FROM film WHERE length > 50;

SELECT * FROM film WHERE length < 50 ORDER BY length;

SELECT * FROM film WHERE title <> 'ALIEN CENTER';

SELECT * FROM film WHERE title <> 'ALIEN CENTER' AND replacement_cost > 20;

SELECT * FROM film WHERE title <> 'ALIEN CENTER' AND replacement_cost > 20;

SELECT * FROM film WHERE rating = 'G' OR rating = 'PG' OR rating = 'PG-13';

SELECT * FROM rental WHERE return_date IS NULL;

SELECT * FROM staff WHERE active IS TRUE;

SELECT * FROM staff WHERE active IS FALSE;

SELECT * FROM staff WHERE active IS NULL;

SELECT * FROM staff WHERE active IS NOT TRUE;

SELECT * FROM address;

SELECT * FROM address WHERE address2 IS NOT NULL;

SELECT * FROM address WHERE address2 IS NULL;

SELECT * FROM film WHERE title NOT LIKE 'academy%';