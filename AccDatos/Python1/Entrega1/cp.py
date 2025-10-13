def main():
    with open ("fundacion.txt" ,"r") as origin_file:
        content = origin_file.read()
    with open ("copied_file.txt" ,"w") as dest_file:
        dest_file.write(content)

if __name__ == "__main__":
    main()
