package ud1;

public class Programa {
    public static void main(String[] args) throws Exception {
        switch (Integer.parseInt(args[0])) {
            case 1:
                System.out.println("hola soy tu proceso");
                break;
            case 2:
                System.out.println("Me gustan los trenes");
                break;
            default:
                throw new Exception("ERROR: Entrada invalida");
        }
    }
}
