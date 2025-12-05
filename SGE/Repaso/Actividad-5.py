import sys
def main():

    # sys.argv es una lista con los argumentos pasados por consola
    # sys.argv[0] es el nombre del script
    # sys.argv[1:] son los argumentos que pasamos

    print("Nombre del script:", sys.argv[0])
    print("Argumentos recibidos:", sys.argv[1:])

    # Ejemplo: imprimir cada argumento
    for i, arg in enumerate(sys.argv[1:], start=1):
        print(f"Argumento {i}: {arg}")

# función que suma cualquier cantidad de números
def sumar(*args):
    total = sum(args)
    print(f"Suma de {args} = {total}")
    return total

if __name__ == "__main__":
    main()



