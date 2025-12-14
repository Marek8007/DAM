import csv
import mysql.connector
import database

def read_file():
    cnx = database.connect_db()
    data = []
    with open("data/affiliations.csv", "r", newline='') as f:
        reader = csv.DictReader(f, delimiter=";")

        cursor = cnx.cursor()
        query = "INSERT INTO affiliations (affiliation) VALUES (%s);"


        for line in reader:
            data.append(line['affiliation'])


        print(data)

        cursor.executemany(query, data)

        cnx.commit()



if __name__ == '__main__':
    read_file()







