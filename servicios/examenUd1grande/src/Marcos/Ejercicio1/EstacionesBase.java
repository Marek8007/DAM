package Ejercicio1;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

//Alumno: Marcos
//Ejercicio: Check de códigos

public class EstacionesBase {
    public static void main(String[] args) throws IOException {
        String[] numbersList = {"17", "24", "13", "88", "0", "9"};

        File directory = new File(System.getProperty("user.dir")+"/Marcos/Ejercicio1/");

        ProcessBuilder pb;
        Process p;
        String line;
        BufferedReader br;

        boolean finished = false;

        for (int i=0; i<numbersList.length&&!finished; i++) {
            pb = new ProcessBuilder("java", "AnalizarCodigo.java", numbersList[i]).directory(directory);
            p = pb.start();
            br = new BufferedReader(new InputStreamReader(p.getInputStream()));

            while ((line = br.readLine())!=null) {

                switch (line) {
                    case "CODIGO_OK":
                        System.out.println("CÓDIGO: "+numbersList[i]+" MENSAJE VÁLIDO");
                        break;
                    case "ALERTA_FALSA":
                        System.out.println("CÓDIGO: "+numbersList[i]+" ADVERTENCIA");
                        break;
                    case "PROTOCOLO_FINALIZADO":
                        System.out.println("CÓDIGO: "+numbersList[i]+" PROCESO_CERRADO");
                        finished = true;
                }
            }
        }
    }
}
