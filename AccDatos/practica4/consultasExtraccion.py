import database
import __main__
import datetime
import mysql.connector

def consulta1():
    cnx = __main__.cnx
    cursor = cnx.cursor()

    query = ("""
                SELECT FIL.title, CAT.name
                FROM category CAT
                INNER JOIN film_category FC ON CAT.category_id = FC.category_id
                INNER JOIN film FIL ON FC.film_id = FIL.film_id
            """)
    
    cursor.execute(query)

    for (title, name) in cursor:
        print("{}, {}"
            .format(title, name))

    cursor.close()

def consulta1():
    cnx = __main__.cnx
    cursor = cnx.cursor()

    query = ("""
                SELECT FIL.title, CAT.name
                FROM category CAT
                INNER JOIN film_category FC ON CAT.category_id = FC.category_id
                INNER JOIN film FIL ON FC.film_id = FIL.film_id
            """)
    
    cursor.execute(query)

    for (title, name) in cursor:
        print("{}, {}"
            .format(title, name))

    cursor.close()    