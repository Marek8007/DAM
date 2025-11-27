package Marcos.Ejercicio2;

//Alumno: Marcos
//Ejercicio: Carrera galáctica

public class MainCarrera {
    public static void main(String[] args) throws InterruptedException {

        ThreadGroup group = new ThreadGroup("grupo");

        NaveEspacial falcon_9 = new NaveEspacial(20);
        NaveEspacial voyager_1 = new NaveEspacial(2);
        NaveEspacial enterprise = new NaveEspacial(17);
        NaveEspacial tardis = new NaveEspacial(2);
        NaveEspacial planet_Express = new NaveEspacial(12);

        Thread falcon_9Thread = new Thread(group, falcon_9, "Falcon_9");
        Thread voyager_1Thread = new Thread(group, voyager_1, "Voyager_1");
        Thread enterpriseThread = new Thread(group, enterprise, "Enterprise");
        Thread tardisThread = new Thread(group, tardis, "Tardis");
        Thread planet_ExpressThread = new Thread(group, planet_Express, "Planet_Express");

        String[] naves = {"Falcon_9", "Voyager_1", "Enterprise", "Tardis", "Planet_Express"};
        Thread animos = new Thread(() -> System.out.println("¡¡¡ÁNIMO "+naves[(int)(Math.random()*5)]+" ERES LA MEJOR!!!"));
        animos.start();

        falcon_9Thread.start();
        voyager_1Thread.start();
        enterpriseThread.start();
        tardisThread.start();
        planet_ExpressThread.start();


        while (group.activeCount()!=0) {
            Thread.sleep(100);
        }

        System.out.println("----- CARRERA FINALIZADA -----");


    }
}
