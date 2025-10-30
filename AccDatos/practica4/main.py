import database
import consultasExtraccion

def menu():
    print("""
    [1] >> Extracción de datos
    """)


if __name__ == '__main__':
    cnx = database.connect_db()
    menu()
    # consultasExtraccion.consulta1()
    consultasExtraccion.consulta2()

