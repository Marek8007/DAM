import copy


def suma(num1:int, num2:int):
    return num1+num2

def lista_referencia(lista):
    for i in range(len(lista)):
        lista[i] *= 2

def lista_copia(lista):
    for i in range(len(lista)):
        lista[i] *= 2
    return lista
if __name__ == "__main__":
    print(suma(6, 15))

    lista = [1, 2, 3, 4]
    lista_referencia(lista)
    print(lista)

    print(lista_copia(copy.deepcopy(lista)))

    print(lista)
