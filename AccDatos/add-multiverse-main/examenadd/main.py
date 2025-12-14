import database

def main():
    cnx = database.connect_db()
    print(cnx)


if __name__ == "__main__":
    main()
