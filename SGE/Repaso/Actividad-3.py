import hashlib

def lista():
    lista = []

    user:str
    password:str

    for i in range(5):
        user = input(f"User {i+1}: ")
        password = input("Password: ")
        print("")

        encrypted_pass = hashlib.sha256(password.encode()).hexdigest()
        lista.append([user, encrypted_pass])

    print("Usuarios guardados exitosamente*\n")
    for i in range(2):
        consulta:int = int(input("Que usuario quiere consultar (1-5): "))
        print(f"User: {lista[consulta-1][0]}\nPassword: {lista[consulta-1][1]}\n")


def dict():
    dict = {}

    user:str
    password:str

    for i in range(5):
        user = input(f"User {i+1}: ")
        password = input("Password: ")
        print("")

        encrypted_pass = hashlib.sha256(password.encode()).hexdigest()
        dict.update({user: encrypted_pass})

    print("Usuarios guardados exitosamente*\n")
    for i in range(2):
        consulta = input(f"Que usuario quiere consultar?\n{dict.keys()}: ")
        print(f"User: {consulta}\nPassword: {dict[consulta]}\n")

if __name__ == "__main__":
    lista()
    dict()
