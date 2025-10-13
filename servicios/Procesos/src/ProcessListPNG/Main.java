package ProcessListPNG;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String dir = System.getProperty("user.dir");
        String ruta;

        do {

            System.out.println("Escriba una ruta para buscar cuantos PNG's contiene. Debe ser relativa. Tu directorio actual es: "+dir);
            ruta = sc.nextLine();

        } while (!ruta.matches("^(\\.{1,2}/)?([^/\0]+(/[^/\0]+)*/?)?$"));

        try {

            ProcessBuilder pb = new ProcessBuilder("bash", "-c", "ls -1 *.PNG 2>/dev/null | wc -l");
            Process p = pb.start();

            InputStream is = p.getInputStream();
            BufferedReader reader = new BufferedReader(new InputStreamReader(is));

            String line = reader.readLine();
            int pngNumber = Integer.parseInt(line.trim());

            System.out.println("Número de PNG's: "+pngNumber);

        } catch (IOException e) {
            System.out.println("Error: "+e);
        }
    }
}
