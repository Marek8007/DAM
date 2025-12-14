import csv

import database


def read_file():
    cnx = database.connect_db()
    data = []
    with open("data/planets.csv", "r", newline='') as f:
        reader = csv.DictReader(f, delimiter=";")

        cursor = cnx.cursor()
        query = "INSERT INTO planets (name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, created_date, updated_date, url) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"

        for line in reader:
            data.append([line['name'], line['rotation_period'], line['orbital_period'], line['diameter'], line['climate'], line['gravity'], line['terrain'], line['surface_water'], line['population'], line['created_date'], line['updated_date'], line['url']])

        print(data)
        cursor.executemany(query, data)

        cnx.commit()


if __name__ == "__main__":
    read_file()
