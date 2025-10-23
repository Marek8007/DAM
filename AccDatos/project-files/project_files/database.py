import mysql.connector
from mysql.connector import errorcode


def connect_db():
    try:
        cnx = mysql.connector.connect(user='root', password='dbrootpass',
                                  host='127.0.0.1', database='sakila', port=33006,
                                  auth_plugin="mysql_native_password")
        
        print(cnx)
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)

    return cnx


def close_db(cnx):
    cnx.close()

    return 0

    cursor.close()

def ej1(cnx):
    cursor = cnx.cursor()

    query = """SELECT first_name, last_name 
               FROM actor;"""

    cursor.execute(query)

    for (first_name, last_name) in cursor:
        print("{} {}".format(first_name, last_name))

    cursor.close
    
    return 0


def ej2(cnx):
    cursor = cnx.cursor()

    query = """SELECT first_name, last_name
               FROM actor
               LIMIT 10;"""

    cursor.execute(query)

    for (first_name, last_name) in cursor:
        print("{} {}".format(first_name, last_name))

    cursor.close
    
    return 0


def ej3(cnx):
    cursor = cnx.cursor()

    query = """SELECT title, rating
               FROM film
               WHERE rating = 'PG';"""

    cursor.execute(query)

    for (title, rating) in cursor:
        print("{} {}".format(title, rating))

    cursor.close
    
    return 0


def ej4(cnx):
    cursor = cnx.cursor()

    query = """SELECT name
               FROM language;"""

    cursor.execute(query)

    for (name) in cursor:
        print("{}".format(name))

    cursor.close
    
    return 0


def ej5(cnx):
    cursor = cnx.cursor()

    query = """SELECT name
               FROM category;"""

    cursor.execute(query)

    for (name) in cursor:
        print("{}".format(name))

    cursor.close
    
    return 0


def ej6(cnx):
    cursor = cnx.cursor()

    query = """SELECT FIL.title, LAN.name
               FROM film FIL, language LAN
               WHERE FIL.language_id = LAN.language_id ;"""

    cursor.execute(query)

    for (title, name) in cursor:
        print("{} {}".format(title, name))

    cursor.close
    
    return 0


def ej7(cnx):
    cursor = cnx.cursor()

    query = """SELECT STO.store_id, count(CUS.first_name)
               FROM customer CUS, store STO
               WHERE CUS.store_id = STO.store_id
               AND CUS.active = 1
               GROUP BY STO.store_id ;"""

    cursor.execute(query)

    for (store_id, first_name) in cursor:
        print("{} {}".format(store_id, first_name))

    cursor.close
    
    return 0


def ej8(cnx):
    cursor = cnx.cursor()

    query = """SELECT ACT.first_name, count(FACT.actor_id)
               FROM actor ACT, film_actor FACT
               WHERE ACT.actor_id = FACT.actor_id
               AND count(FACT.actor_id) > 20
               GROUP BY ACT.actor_id;"""

    cursor.execute(query)

    for (first_name, actor_id) in cursor:
        print("{} {}".format(first_name, actor_id))

    cursor.close
    
    return 0


def ej9(cnx):
    cursor = cnx.cursor()

    query = """SELECT CUS.first_name, count(PAY.payment_id)
               FROM customer CUS, payment PAY
               WHERE CUS.customer_id = PAY.customer_id
               GROUP BY CUS.first_name
               ORDER BY count(PAY.payment_id) DESC
               LIMIT 5;"""

    cursor.execute(query)

    for (store_id, first_name) in cursor:
        print("{} {}".format(store_id, first_name))

    cursor.close
    
    return 0


def ej9(cnx):
    cursor = cnx.cursor()

    query = """SELECT CUS.first_name, count(REN.rental_id)
               FROM customer CUS, rental REN
               WHERE CUS.customer_id = REN.customer_id
               GROUP BY CUS.first_name
               ORDER BY count(REN.rental_id) DESC
               LIMIT 5;"""

    cursor.execute(query)

    for (store_id, first_name) in cursor:
        print("{} {}".format(store_id, first_name))

    cursor.close
    
    return 0