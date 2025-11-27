import database


def update1():
    cnx = database.connect_db()

    cursor = cnx.cursor()

    sql = ("""UPDATE character_affiliations SET id_affiliation =
            (SELECT id
             FROM affiliations 
             WHERE affiliation = 'Sith')

            WHERE id_character =
            (SELECT id
             FROM characters 
             WHERE name = 'Anakin Skywalker');""")

    cursor.execute(sql)

    cnx.commit()

def update2():
    cnx = database.connect_db()

    cursor = cnx.cursor()

    sql = ("""UPDATE characters SET planet_id =
            (SELECT id
             FROM planets 
             WHERE name = 'Alderaan')
            WHERE name = 'Leia Organa';""")

    cursor.execute(sql)

    cnx.commit()

if __name__ == "__main__":
    update1()
    update2()
