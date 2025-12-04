def clonar():
    lista=["1", "2", "3"]

    #La manera más sencilla de clonar una lista es:
    lista_nueva1=lista.copy()

    #O también:
    lisa_nueva2=list(lista)

    #La diferencia entre shallow copy y deep copy es que al crear una copia shallow,
    #lo que estamos creando realmente es solo un enlace al objeto original, por lo que si cambiamos uno se cambiará el otro.
    #Con deep copy realmente estamos creando una lista rellenada con copias exactas de la lista original, no enlaces.

def anadir():
    lista=["1", "2", "3"]

    #Podemos añadir un objeto al final de la lista con append()
    lista.append("5")

    #O podemos añadirlo donde queramos con insert()
    lista.insert(3, "4")

def eliminar():
    lista=["1", "2", "3"]

    #Podemos eliminar el primer objeto de un tipo:
    lista.remove("1")

    #O podemos eliminar por index:
    lista.pop(1)

def lista_nueva():
    lista=["1","2","3","4","5","6","7","8","9"]

    lista_nueva=lista[-4:]

def cadena():
    cadena:str = "Hola mundo"
    letras = []
    for i in cadena:
        letras.append(i)

    print(letras)

#def comentarios:
    #Los comentarios se hacen con #
    #Y poniendo más se hacen multilínea

if __name__ == "__main__":
    clonar()
    anadir()
    eliminar()
    lista_nueva()
    cadena()
