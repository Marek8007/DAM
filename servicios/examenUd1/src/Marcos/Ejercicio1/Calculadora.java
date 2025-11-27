package Marcos.Ejercicio1;



//Alumno: Marcos Miquel Lisarde
//Ejercicio: Calculadora


public class Calculadora {

    public static void main(String[] args) throws Exception {
        int num1 = Integer.parseInt(args[0]);
        int num2 = Integer.parseInt(args[1]);
        String operation = args[2];

        switch (operation) {
            case "S":
                System.out.println(num1+num2);
                break;
            case "R":
                System.out.println(num1-num2);
                break;
            default:
                throw new Exception("ERROR: Entrada invalida");
        }

    }
}
