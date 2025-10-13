def main(n):
    with open("fundacion.txt" ,"r") as file:
        for i in range(n):
            print(file.readline())

if __name__ == "__main__":
    main(5)
