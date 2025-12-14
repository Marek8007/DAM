package Marcos.Ejercicio2;



//Alumno: Marcos Miquel Lisarde
//Ejercicio: Puntos de control

public class Explorador implements Runnable {

    private int demora;

    Explorador(int demora) {
        this.demora = demora;
    }


    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName()+": Iniciando ruta. Tiempo estimado: ["+demora+"] segundos.");
        try {
            Thread.sleep(demora*1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        System.out.println(Thread.currentThread().getName()+": Ha llegado al punto de control");

    }
}
