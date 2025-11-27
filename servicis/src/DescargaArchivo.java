public class DescargaArchivo implements Runnable {

    private int tiempoDescarga;

    DescargaArchivo(int tiempoDescarga) {
        this.tiempoDescarga = tiempoDescarga;
    }


    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName()+" - Iniciando descarga. Tiempo total:["+tiempoDescarga+"]s");
        try {
            Thread.sleep(tiempoDescarga*1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        System.out.println(Thread.currentThread().getName()+" - Descarga completada");

    }

    public static void main(String[] args) throws InterruptedException {

        ThreadGroup group = new ThreadGroup("grupo");

        DescargaArchivo Doc_Tesis = new DescargaArchivo(3);
        DescargaArchivo Trenes = new DescargaArchivo(8);
        DescargaArchivo Setup_Juego = new DescargaArchivo(5);

        Thread thread1 = new Thread(group, Doc_Tesis, "Doc_Tesis");
        Thread thread2 = new Thread(group, Trenes, "Trenes");
        Thread thread3 = new Thread(group, Setup_Juego, "Setup_Juego");


        thread1.start();
        thread2.start();
        thread3.start();

        int startingFiles = 3;
        int activeFiles = 3;

        while (group.activeCount()!=0) {
            if (group.activeCount()!=activeFiles) {
                activeFiles=group.activeCount();
                System.out.println("Completadas "+(startingFiles-activeFiles)+"/3...");
            }

            Thread.sleep(100);
        }
        System.out.println("Completadas 3/3 descargas\nTodo completado, me muero.");


    }
}
