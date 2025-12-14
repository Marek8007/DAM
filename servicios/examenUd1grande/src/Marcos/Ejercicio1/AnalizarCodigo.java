package Ejercicio1;

//Alumno: Marcos
//Ejercicio: Check de códigos

public class AnalizarCodigo {

    public static void main(String[] args) {

        int number = Integer.parseInt(args[0]);

        if (number==0) {
            System.out.println("PROTOCOLO_FINALIZADO");
        } else if ((number%2)==0) {
            System.out.println("CODIGO_OK");
        } else {
            System.out.println("ALERTA_FALSA");
        }

    }

}
