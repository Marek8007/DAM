package ud1;

import java.io.File;
import java.io.InputStream;
import java.util.Scanner;

public class lanzaSuma {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Arg1");

        int n1 = sc.nextInt();
        System.out.println("Arg2");

        int n2 = sc.nextInt();

        String currentDir = System.getProperty("user.dir");

        ProcessBuilder pb = new ProcessBuilder("java", "suma.java", ""+n1, ""+n2);

        File directorio = new File(currentDir+"/src");

        pb.directory(directorio);

        try {
            Process p = pb.start();

            InputStream is = p.getInputStream();

            int c;
            while ((c = is.read())!=-1){
                System.out.print((char)c);
            }


            is.close();
        } catch (Exception e) {
            System.out.println(e);
        }


    }
}
