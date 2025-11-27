import database


def insertFilms():
    cnx = database.connect_db()
    cursor = cnx.cursor()
    data = [["Episode VII", "El despertar de la fuerza"], ["Episode VIII", "Los ultimos jedis"], ["Episode IX", "El ascenso de Skywalker"]]

    query = "INSERT INTO films (episode, title) VALUES (%s, %s)"

    cursor.executemany(query, data)

    cnx.commit()

if __name__ == "__main__":
    insertFilms()
