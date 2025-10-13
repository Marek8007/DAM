def main():
    lines = 0
    words = 0
    chars = 0

    with open ("fundacion.txt" ,"r") as file:
        for line in file:
            lines += 1
            words += len(line.split())
            chars += len(line)

    print(f"Líneas: {lines}, palabras: {words}, letras: {chars}")

if __name__ == "__main__":
    main()
