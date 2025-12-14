package ud1;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.util.Scanner;

public class mayusLanzar {
    public static void main(String[] args) {

        String currentDir = System.getProperty("user.dir");
        File directory = new File(currentDir+"/src");


        Scanner sc = new Scanner(System.in);

        System.out.print("texto: ");
        String text = sc.nextLine();



        ProcessBuilder pb = new ProcessBuilder("java", "mayus.java", text);
        pb.directory(directory);
        try {
            Process p = pb.start();


            BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()));

            String line;

            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }



        } catch (Exception e){
            System.out.println(e);
        }
    }
}
