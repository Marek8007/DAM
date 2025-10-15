import csv
import os

FICHERO = "agenda.csv"
CAMPOS = ["Nombre", "Apellidos", "Email", "Telefono1", "Telefono2", "Direccion"]


def cargar_ejemplos(): #ejemplos
    contactos_ejemplo = [
        {"Nombre": "Ana", "Apellidos": "Martínez López", "Email": "ana.martinez@example.com",
         "Telefono1": "600123456", "Telefono2": "910123456", "Direccion": "Calle Mayor 12, Madrid"},
        {"Nombre": "Luis", "Apellidos": "García Pérez", "Email": "luis.garcia@example.com",
         "Telefono1": "600654321", "Telefono2": "910654321", "Direccion": "Av. del Sol 34, Sevilla"},
        {"Nombre": "Marta", "Apellidos": "Sánchez Ruiz", "Email": "marta.sanchez@example.com",
         "Telefono1": "622334455", "Telefono2": "915667788", "Direccion": "C/ Luna 7, Valencia"},
        {"Nombre": "Carlos", "Apellidos": "Hernández Gómez", "Email": "carlos.hernandez@example.com",
         "Telefono1": "633778899", "Telefono2": "914223344", "Direccion": "Paseo del Prado 56, Madrid"},
        {"Nombre": "Elena", "Apellidos": "Torres Díaz", "Email": "elena.torres@example.com",
         "Telefono1": "644112233", "Telefono2": "917889900", "Direccion": "C/ Sol 23, Málaga"},
        {"Nombre": "Javier", "Apellidos": "Romero Cano", "Email": "javier.romero@example.com",
         "Telefono1": "655998877", "Telefono2": "913224466", "Direccion": "Av. del Mar 45, Barcelona"},
        {"Nombre": "Lucía", "Apellidos": "Moreno Vega", "Email": "lucia.moreno@example.com",
         "Telefono1": "666445566", "Telefono2": "912334455", "Direccion": "C/ Olmo 8, Bilbao"},
        {"Nombre": "Diego", "Apellidos": "Jiménez Navarro", "Email": "diego.jimenez@example.com",
         "Telefono1": "677223344", "Telefono2": "916554433", "Direccion": "C/ Río 15, Zaragoza"},
        {"Nombre": "Sofía", "Apellidos": "Pérez Castillo", "Email": "sofia.perez@example.com",
         "Telefono1": "688334455", "Telefono2": "919887766", "Direccion": "Av. de la Paz 2, Granada"},
        {"Nombre": "Pablo", "Apellidos": "López Serrano", "Email": "pablo.lopez@example.com",
         "Telefono1": "699556677", "Telefono2": "910998877", "Direccion": "C/ Jardín 3, Valladolid"}
    ]

    with open(FICHERO, 'w', newline='') as f:
        escritor = csv.DictWriter(f, fieldnames=CAMPOS, delimiter=';')
        escritor.writeheader()
        escritor.writerows(contactos_ejemplo)


###FUNCIONES SECUNDARIAS###
def cargar_contactos():#Carga los contactos desde el fichero CSV si existe
    contactos = []
    if os.path.exists(FICHERO):
        with open(FICHERO, newline='') as f:
            lector = csv.DictReader(f, delimiter=';')
            contactos = list(lector)
    return contactos


def guardar_contactos(contactos): #Guarda todos los contactos en el csv
    with open(FICHERO, 'w', newline='') as f:
        escritor = csv.DictWriter(f, fieldnames=CAMPOS, delimiter=';')
        escritor.writeheader()
        escritor.writerows(contactos)


def mostrar_contacto(contacto): #Muestra un contacto
    print(f"Nombre: {contacto['Nombre']}")
    print(f"Apellidos: {contacto['Apellidos']}")
    print(f"Email: {contacto['Email']}")
    print(f"Teléfono 1: {contacto['Telefono1']}")
    print(f"Teléfono 2: {contacto['Telefono2']}")
    print(f"Dirección: {contacto['Direccion']}")
    print("-" * 40)


###FUNCIONES PRINCIPALES###
def agregar_contacto(contactos):
    print("\n--- Añadir nuevo contacto ---")
    nuevo = {}
    for campo in CAMPOS:
        nuevo[campo] = input(f"{campo}: ").strip()
    contactos.append(nuevo)
    guardar_contactos(contactos)
    print("*Contacto guardado correctamente.*\n")


def modificar_contacto(contactos):
    print("\n--- Modificar contacto ---")
    email = input("Introduce el email del contacto a modificar: ").strip()
    for contacto in contactos:
        if contacto["Email"] == email:
            print("Contacto encontrado. Deja en blanco para mantener el valor actual.\n")
            for campo in CAMPOS:
                nuevo_valor = input(f"{campo} ({contacto[campo]}): ").strip()
                if nuevo_valor:
                    contacto[campo] = nuevo_valor
            guardar_contactos(contactos)
            print("*Contacto modificado correctamente.*\n")
            return
    print("*No se encontró un contacto con ese email.*\n")


def eliminar_contacto(contactos):
    print("\n--- Eliminar contacto ---")
    email = input("Introduce el email del contacto a eliminar: ").strip()
    for i, contacto in enumerate(contactos):
        if contacto["Email"] == email:
            mostrar_contacto(contacto)
            confirmar = input("¿Seguro que quieres eliminar este contacto? (s/n): ").lower()
            if confirmar == "s":
                contactos.pop(i)
                guardar_contactos(contactos)
                print("*Contacto eliminado correctamente.*\n")
            return
    print("*No se encontró un contacto con ese email.*\n")


def buscar_contacto(contactos):
    print("\n--- Buscar contacto ---")
    criterio = input("Introduce nombre, apellidos o email: ").strip().lower()
    encontrados = [c for c in contactos if
                   criterio in c["Nombre"].lower() or
                   criterio in c["Apellidos"].lower() or
                   criterio in c["Email"].lower()]
    if encontrados:
        print(f"\nSe encontraron {len(encontrados)} contacto(s):\n")
        for c in encontrados:
            mostrar_contacto(c)
    else:
        print("*No se encontraron contactos que coincidan.*\n")


def listar_contactos(contactos):
    print("\n--- Lista de contactos ---")
    if not contactos:
        print("No hay contactos guardados.\n")
        return
    contactos_ordenados = sorted(contactos, key=lambda x: (x["Apellidos"], x["Nombre"]))
    for c in contactos_ordenados:
        mostrar_contacto(c)


###MENU###
def menu():
    contactos = cargar_contactos()
    while True:
        print("""
========= AGENDA DE CONTACTOS ===========
1. Guardar datos de un contacto
2. Modificar datos de un contacto
3. Dar de baja a un contacto (Eliminar)
4. Buscar un contacto
5. Mostrar la lista de contactos ordenada
6. Salir
=========================================
""")
        opcion = input("Elige una opción (1-6): ").strip()

        if opcion == "1":
            agregar_contacto(contactos)
        elif opcion == "2":
            modificar_contacto(contactos)
        elif opcion == "3":
            eliminar_contacto(contactos)
        elif opcion == "4":
            buscar_contacto(contactos)
        elif opcion == "5":
            listar_contactos(contactos)
        elif opcion == "6":
            print("*Saliendo de la agenda...*")
            break
        else:
            print("*Opción no válida. Inténtalo de nuevo.*\n")




if __name__ == "__main__":
    menu()
