def main():
    total = 0
    expresion = input("Escriba una expresión para buscarla en el archivo: ")

    with open ("fundacion.txt", "r") as file:
        for line in file:
            if expresion in line:
                print(line)
                total += 1
        print(f"Total lines: {total}")

if __name__ == "__main__":
    main()
