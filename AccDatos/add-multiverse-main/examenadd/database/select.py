import database


def consulta1():
    cnx = database.connect_db()


    cursor = cnx.cursor()
    cursor.execute("""SELECT characters.name, planets.name, films.title
                      FROM characters
                      JOIN planets 
                      ON characters.planet_id = planets.id
                      JOIN character_films
                      ON characters.id = character_films.id_character
                      JOIN films
                      ON character_films.id_film = films.id
                      """)

    result = cursor.fetchall()

    for x in result:
        print(x)

if __name__ == "__main__":
    consulta1()


