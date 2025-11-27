package ud1;

import java.io.IOException;
import java.io.InputStream;
import java.util.Scanner;

public class pngs {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Introduce ruta absoluta: ");
        String ruta = sc.nextLine();

        String comando= "ls "+ruta+"*.png | wc -l";

        ProcessBuilder pb = new ProcessBuilder("bash", "-c", comando);

        try {
          Process p = pb.start();

            InputStream is = p.getInputStream();

            int c;

            while ((c= is.read())!=-1){
                System.out.println((char)c);
            }

            is.close();
        }
        catch (IOException e) {
            System.out.println(e);
        }
    }
}
