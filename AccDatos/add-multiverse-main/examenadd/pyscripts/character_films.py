import csv
import mysql.connector
import database

def read_file():
    cnx = database.connect_db()
    data = []
    with open("data/character_film.csv", "r", newline='') as f:
        reader = csv.DictReader(f, delimiter=";")

        cursor = cnx.cursor()
        query = "INSERT INTO character_films (id_character, id_film) VALUES (%s, %s)"

        for line in reader:
            data.append([line['id_character'], line['id_film']])

        print(data)

        cursor.executemany(query, data)

        cnx.commit()



if __name__ == '__main__':
    read_file()
