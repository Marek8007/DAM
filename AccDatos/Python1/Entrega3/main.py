import xml.etree.ElementTree

FICHERO = "agenda.xml"
CAMPOS = ["Nombre", "Apellidos", "Email", "Telefono1", "Telefono2", "Direccion"]


### FUNCIONES AUXILIARES ###

def crear_agenda_xml():
    import os
    if not os.path.exists(FICHERO):
        root = xml.etree.ElementTree.Element("agenda")
        tree = xml.etree.ElementTree.ElementTree(root)
        xml.etree.ElementTree.indent(tree, space="  ", level=0)
        tree.write(FICHERO, encoding="utf-8", xml_declaration=True)


def cargar_agenda():
    tree = xml.etree.ElementTree.parse(FICHERO)
    return tree, tree.getroot()


def guardar_agenda(tree):
    xml.etree.ElementTree.indent(tree, space="  ", level=0)
    tree.write(FICHERO, encoding="utf-8", xml_declaration=True)


def mostrar_contacto(contacto):
    for campo in CAMPOS:
        print(f"{campo}: {contacto.find(campo).text if contacto.find(campo) is not None else ''}")
    print("-" * 40)


### FUNCIONES PRINCIPALES ###

def agregar_contacto(tree, root):
    print("\n--- Añadir nuevo contacto ---")
    contacto = xml.etree.ElementTree.Element("contacto")
    for campo in CAMPOS:
        valor = input(f"{campo}: ").strip()
        elem = xml.etree.ElementTree.SubElement(contacto, campo)
        elem.text = valor
    root.append(contacto)
    guardar_agenda(tree)
    print("*Contacto guardado correctamente.*\n")


def modificar_contacto(tree, root):
    print("\n--- Modificar contacto ---")
    email = input("Introduce el email del contacto a modificar: ").strip()
    for contacto in root.findall("contacto"):
        if contacto.find("Email").text == email:
            print("Contacto encontrado. Deja en blanco para mantener el valor actual.\n")
            for campo in CAMPOS:
                actual = contacto.find(campo).text
                nuevo = input(f"{campo} ({actual}): ").strip()
                if nuevo:
                    contacto.find(campo).text = nuevo
            guardar_agenda(tree)
            print("*Contacto modificado correctamente.*\n")
            return
    print("*No se encontró un contacto con ese email.*\n")


def eliminar_contacto(tree, root):
    print("\n--- Eliminar contacto ---")
    email = input("Introduce el email del contacto a eliminar: ").strip()
    for contacto in root.findall("contacto"):
        if contacto.find("Email").text == email:
            mostrar_contacto(contacto)
            confirmar = input("¿Seguro que quieres eliminar este contacto? (s/n): ").lower()
            if confirmar == "s":
                root.remove(contacto)
                guardar_agenda(tree)
                print("*Contacto eliminado correctamente.*\n")
            return
    print("*No se encontró un contacto con ese email.*\n")


def buscar_contacto(root):
    print("\n--- Buscar contacto ---")
    criterio = input("Introduce nombre, apellidos o email: ").strip().lower()
    encontrados = []
    for contacto in root.findall("contacto"):
        if (criterio in contacto.find("Nombre").text.lower() or
            criterio in contacto.find("Apellidos").text.lower() or
            criterio in contacto.find("Email").text.lower()):
            encontrados.append(contacto)
    if encontrados:
        print(f"\nSe encontraron {len(encontrados)} contacto(s):\n")
        for c in encontrados:
            mostrar_contacto(c)
    else:
        print("*No se encontraron contactos que coincidan.*\n")


def listar_contactos(root):
    print("\n--- Lista de contactos ordenada ---")
    contactos = root.findall("contacto")
    if not contactos:
        print("No hay contactos guardados.\n")
        return

    contactos_ordenados = sorted(
        contactos,
        key=lambda c: (c.find("Apellidos").text.lower(), c.find("Nombre").text.lower())
    )

    for c in contactos_ordenados:
        mostrar_contacto(c)


### MENÚ PRINCIPAL ###

def menu():
    crear_agenda_xml()
    tree, root = cargar_agenda()

    while True:
        print("""
========= AGENDA XML =========
1. Guardar datos de un contacto
2. Modificar datos de un contacto
3. Dar de baja a un contacto (Eliminar)
4. Buscar un contacto
5. Mostrar la lista de contactos ordenada
6. Salir
==============================
""")
        opcion = input("Elige una opción (1-6): ").strip()

        if opcion == "1":
            agregar_contacto(tree, root)
        elif opcion == "2":
            modificar_contacto(tree, root)
        elif opcion == "3":
            eliminar_contacto(tree, root)
        elif opcion == "4":
            buscar_contacto(root)
        elif opcion == "5":
            listar_contactos(root)
        elif opcion == "6":
            print("*Saliendo de la agenda...*")
            break
        else:
            print("*Opción no válida. Inténtalo de nuevo.*\n")


### PROGRAMA PRINCIPAL ###
if __name__ == "__main__":
    menu()
