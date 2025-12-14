import csv
import mysql.connector
import database

def read_file():
    cnx = database.connect_db()
    data = []
    with open("data/deaths.csv", "r", newline='') as f:
        reader = csv.DictReader(f, delimiter=";")

        cursor = cnx.cursor()
        query = "INSERT INTO deaths (id_character, id_killer, id_film) VALUES (%s, %s, %s)"

        for line in reader:
            data.append([line['id_character'], line['id_killer'], line['id_film']])

        print(data)

        cursor.executemany(query, data)

        cnx.commit()



if __name__ == '__main__':
    read_file()
