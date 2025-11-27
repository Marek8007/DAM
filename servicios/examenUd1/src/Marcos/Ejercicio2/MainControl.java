package Marcos.Ejercicio2;



//Alumno: Marcos Miquel Lisarde
//Ejercicio: Puntos de control


public class MainControl {
    public static void main(String[] args) throws InterruptedException {

        Explorador magallanes = new Explorador(7);
        Explorador humboldt = new Explorador(4);
        Explorador amundsen = new Explorador(5);

        ThreadGroup group = new ThreadGroup("grupo");

        Thread threadMaga = new Thread(group, magallanes, "Magallanes");
        Thread threadHumb = new Thread(group, humboldt,"Humboldt");
        Thread threadAmun = new Thread(group, amundsen,"Amundsen");

        threadMaga.start();
        threadHumb.start();
        threadAmun.start();


        int lastChecked = 3;
        int total = 3;

        while (group.activeCount()!=0) {
            if (lastChecked != group.activeCount()) {
                lastChecked = group.activeCount();
                System.out.println("Llegados "+(total - lastChecked)+"/"+ total +" exploradores.\n");
            }
            Thread.sleep(50);
        }

        System.out.println("Llegados 3/3 exploradores\n\nTodos los exploradores han llegado al punto de control. Fin del sistema.");

    }
}
