import csv

import database


def read_file():
    cnx = database.connect_db()
    data = []
    with open("data/planets.csv", "r", newline='') as f:
        reader = csv.DictReader(f, delimiter=";")

        cursor = cnx.cursor()
        query = "INSERT INTO characters (name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, planet_id, created_date, update_date, url) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, )"

        for line in reader:
            data.append([line['name'], line['height'], line['mass'], line['hair_color'], line['skin_color'], line['eye_color'], line['birth_year'], line['gender'], line['planet_id'], line['created_date'], line['update_date'], line['url']])

        print(data)
        cursor.executemany(query, data)

        cnx.commit()


if __name__ == "__main__":
    read_file()
