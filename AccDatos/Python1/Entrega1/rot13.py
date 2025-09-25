from soupsieve.util import lower

def main():
    rot = 13
    vocabulary_size = 26
    vocabulary_chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                        's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    with open ("fundacion.txt", "r") as file:
        with open ("encrypted_file", "w") as encrypted_fundacion:
            for line in file:
                for char in line:
                    if lower(char) not in vocabulary_chars:
                        encrypted_fundacion.write(char)
                    else:
                        encrypted_fundacion.write(vocabulary_chars.__getitem__((vocabulary_chars.index(lower(char)) + rot) % vocabulary_size))

if __name__ == "__main__":
    main()
