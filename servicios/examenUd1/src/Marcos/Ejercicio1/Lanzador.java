package Marcos.Ejercicio1;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;


//Alumno: Marcos Miquel Lisarde
//Ejercicio: Calculadora

public class Lanzador {
    public static void main(String[] args) {

        File directory = new File(System.getProperty("user.dir")+"/src/Marcos/Ejercicio1");

        ProcessBuilder pb = new ProcessBuilder("java", "Calculadora.java", "5", "3", "S");
        pb.directory(directory);

        try {
            Process p = pb.start();

            BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()));
            BufferedReader brError = new BufferedReader(new InputStreamReader(p.getErrorStream()));

            String line;

            while ((line = br.readLine()) != null ){
                System.out.println(line);
            }

            while ((line = brError.readLine()) != null ){
                System.out.println(line);
            }

        } catch (Exception e) {
            System.out.println(e);
        }




    }
}
