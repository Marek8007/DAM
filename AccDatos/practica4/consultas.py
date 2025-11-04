# CONSULTAS #

def peliculas_y_categorias(cnx):
    cursor = cnx.cursor()

    query = """
        SELECT f.title, c.name
        FROM film f, film_category fc, category c
        WHERE f.film_id = fc.film_id
        AND fc.category_id = c.category_id;
    """

    cursor.execute(query)

    for (title, category) in cursor:
        print(f"{title} — {category}")

    cursor.close()
    return 0



def clientes_y_direcciones(cnx):
    cursor = cnx.cursor()

    query = """
        SELECT CONCAT(c.first_name,' ',c.last_name), a.address
        FROM customer c, address a
        WHERE c.address_id = a.address_id;
    """

    cursor.execute(query)

    for (name, address) in cursor:
        print(f"{name} — {address}")

    cursor.close()
    return 0



def direcciones_con_ciudad(cnx):
    cursor = cnx.cursor()

    query = """
        SELECT a.address, ct.city
        FROM address a, city ct
        WHERE a.city_id = ct.city_id;
    """

    cursor.execute(query)

    for (address, city) in cursor:
        print(f"{address} — {city}")

    cursor.close()
    return 0



def peliculas_idiomas(cnx):
    cursor = cnx.cursor()

    query = """
        SELECT f.title, l.name
        FROM film f, language l
        WHERE f.language_id = l.language_id;
    """

    cursor.execute(query)

    for (title, language) in cursor:
        print(f"{title} — {language}")

    cursor.close()
    return 0



def inventario_tienda(cnx):
    cursor = cnx.cursor()

    query = """
        SELECT i.inventory_id, f.title, s.store_id
        FROM inventory i, film f, store s
        WHERE i.film_id = f.film_id
        AND i.store_id = s.store_id;
    """

    cursor.execute(query)

    for (inv_id, title, store) in cursor:
        print(f"{inv_id} — {title} — Store {store}")

    cursor.close()
    return 0



def pagos_por_cliente(cnx):
    cursor = cnx.cursor()

    query = """
        SELECT CONCAT(c.first_name,' ',c.last_name), p.amount, r.rental_id
        FROM payment p, rental r, customer c
        WHERE p.rental_id = r.rental_id
        AND p.customer_id = c.customer_id;
    """

    cursor.execute(query)

    for (name, amount, rental) in cursor:
        print(f"{name}: {amount}€ — Rental {rental}")

    cursor.close()
    return 0



# INSERCIÓN DE DATOS #
def insertar_valencialand(cnx):
    cursor = cnx.cursor()

    cursor.execute("INSERT INTO country (country) VALUES ('ValenciaLand');")
    cursor.execute("SELECT LAST_INSERT_ID();")
    country_id = cursor.fetchone()[0]

    cursor.execute(f"INSERT INTO city (city, country_id) VALUES ('Ciudad del Abanico', {country_id});")
    cursor.execute("SELECT LAST_INSERT_ID();")
    city_id = cursor.fetchone()[0]

    cursor.execute(f"""
        INSERT INTO address (address, address2, district, city_id, postal_code, phone)
        VALUES ('Calle de los Colibrís, 23', NULL, 'Centro', {city_id}, '46000', '600123456');
    """)

    cnx.commit()
    cursor.close()
    return 0



# ACUALIZACIÓN #
def actualizar_ciudad(cnx):
    cursor = cnx.cursor()

    query = """
        UPDATE city
        SET city = 'Ciudad del Abanico Renombrada'
        WHERE city = 'Ciudad del Abanico';
    """

    cursor.execute(query)
    cnx.commit()

    cursor.close()
    return 0


# BORRADOS #
def borrar_cliente_1(cnx):
    cursor = cnx.cursor()

    cursor.execute("DELETE FROM payment WHERE customer_id = 1;")
    cursor.execute("DELETE FROM rental WHERE customer_id = 1;")
    cursor.execute("DELETE FROM customer WHERE customer_id = 1;")

    cnx.commit()
    cursor.close()
    return 0



def borrar_categoria_action(cnx):
    cursor = cnx.cursor()

    cursor.execute("SELECT category_id FROM category WHERE name = 'Action';")
    cat_id = cursor.fetchone()[0]

    cursor.execute(f"DELETE FROM film_category WHERE category_id = {cat_id};")
    cursor.execute(f"DELETE FROM category WHERE category_id = {cat_id};")

    cnx.commit()
    cursor.close()
    return 0

