import database
import consultas

def menu():
    while True:
        print("""
    [1] >> Extracción de datos
    [2] >> Insert
    [3] >> Actualizar
    [4] >> Borrar cliente
    [5] >> Borrar categoría
    [0] >> Salir
        """)

        opcion = input("Seleccione una opción: ")

        match opcion:
            case "1":
                print("""
        [1] >> Consulta 1
        [2] >> Consulta 2
        [3] >> Consulta 3
        [4] >> Consulta 4
        [5] >> Consulta 5
        [6] >> Consulta 6
        [0] >> Volver al menú
                """)

                opcion2 = input("Seleccione una opción: ")

                match opcion2:
                    case "1":
                        consultas.peliculas_y_categorias(cnx)
                    case "2":
                        consultas.clientes_y_direcciones(cnx)
                    case "3":
                        consultas.direcciones_con_ciudad(cnx)
                    case "4":
                        consultas.peliculas_idiomas(cnx)
                    case "5":
                        consultas.inventario_tienda(cnx)
                    case "6":
                        consultas.pagos_por_cliente(cnx)
                    case "0":
                        print("Volviendo al menú principal...")
                    case _:
                        print("Opción no válida. Intente de nuevo.")

            case "2":
                consultas.insertar_valencialand(cnx)
            case "3":
                consultas.actualizar_ciudad(cnx)
            case "4":
                consultas.borrar_cliente_1(cnx)
            case "5":
                consultas.borrar_categoria_action(cnx)
            case "0":
                print("Saliendo del programa...")
                break
            case _:
                print("Opción no válida. Intente de nuevo.")

    return 0


if __name__ == '__main__':
    cnx = database.connect_db()
    menu()
