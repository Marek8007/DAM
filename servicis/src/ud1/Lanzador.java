package ud1;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;

public class Lanzador {
    public static void main(String[] args) {

        ProcessBuilder pb = new ProcessBuilder("java", "Programa.java", "1");

        pb.directory(new File(System.getProperty("user.dir")+"/src"));


        try {

            Process p = pb.start();

            BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()));

            BufferedReader brError = new BufferedReader(new InputStreamReader(p.getErrorStream()));

            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }

            while ((line = brError.readLine()) != null) {
                System.out.println(line);
            }


        } catch (Exception e){
            System.out.println(e);
        }
    }
}
