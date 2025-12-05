def main():
    # EJEMPLO DE USO DE LOS OPERADORES "is", "not", "in" EN PYTHON


    # 1. OPERADOR 'is'
    # Compara si dos variables apuntan al mismo objeto en memoria

    a = [1, 2, 3]
    b = a  # b apunta al mismo objeto que a

    print("a is b:", a is b)  # True, mismo objeto

    c = [1, 2, 3]  # mismo contenido que a, pero diferente objeto
    print("a == c:", a == c)  # True, mismo contenido
    print("a is c:", a is c)  # False, distinto objeto



    # 2. OPERADOR 'not'
    # Niega una condición o valor booleano

    x = True
    print("not x:", not x)  # False

    edad = 15
    print("not (edad >= 18):", not (edad >= 18))  # True, porque 15 < 18

    usuario = ""
    if not usuario:  # True si usuario es vacío o False
        print("El nombre de usuario está vacío")




    # 3. OPERADOR 'in'
    # Verifica si un elemento está dentro de una secuencia (lista, tupla, cadena, diccionario)


    frutas = ["manzana", "pera", "uva"]
    print("'pera' in frutas:", "pera" in frutas)  # True
    print("'kiwi' in frutas:", "kiwi" in frutas)  # False

    texto = "Hola mundo"
    print("'mundo' in texto:", "mundo" in texto)  # True
    print("'hola' in texto:", "hola" in texto)  # False (mayúsculas importan)

    persona = {"nombre": "Ana", "edad": 20}
    print("'nombre' in persona:", "nombre" in persona)  # True (busca clave)
    print("'Ana' in persona:", "Ana" in persona)  # False (valor, no clave)


if __name__ == "__main__":
    main()
