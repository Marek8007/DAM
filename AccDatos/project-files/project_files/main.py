import database

if __name__ == '__main__':
    cnx = database.connect_db()


    # database.ej1(cnx)
    # database.ej2(cnx)
    # database.ej3(cnx)
    # database.ej4(cnx)
    # database.ej5(cnx)
    # database.ej6(cnx)
    # database.ej7(cnx)
    # database.ej8(cnx)
    database.ej9(cnx)
    # database.ej4(cnx)

    database.close_db(cnx)
