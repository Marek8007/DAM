import csv

def main():
    delimiter = ";"
    input_line = ""



    rows = []
    with open ("listado-codigos-postales.csv" ,"r") as file:
        reader = csv.DictReader(file, delimiter=delimiter)
        available_rows= reader.fieldnames
        print(f"Campos disponibles a imprimir: {available_rows}")


        for i in reader:
            if input_line == 0:
                print("Mostrando campo...")
            elif input_line not in available_rows:
                print("Campo no existente")
            elif input_line in rows:
                print("Campo ya introducido")
            else:
                rows.append(input_line)
                print(f"Se imprimirán los campos: {rows}")
            while input_line!= "0":
                input_line=input("Escriba el campo que quiera imprimir (0 para salir): ")
            for j in rows:
                print(f"{i[j]} ", end=" ")
            print()

if __name__ == "__main__":
    main()
