package Marcos.Ejercicio2;

//Alumno: Marcos
//Ejercicio: Carrera galáctica

public class NaveEspacial implements Runnable{

    private static int depositoFuel = 300;
    private final int consumo;


    NaveEspacial(int consumo) {
        this.consumo = consumo;
    }

    @Override
    public void run() {

        boolean empty =false;
        int c =0;

        for (int i=0;i<1000&&!empty;i++){
            try {
                Thread.sleep(1);

                if (c==100) {
                    c=0;
                    if (depositoFuel<consumo) {
                        empty = true;
                        System.out.println(Thread.currentThread().getName()+": ¡Sin Fuel! A la deriva en el paso "+i);
                    } else {
                        depositoFuel -= consumo;
                    }
                }

            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            c++;
        }

        if (!empty) {
            System.out.println(Thread.currentThread().getName()+"¡LLEGADA A LA META!");
        }

    }
}
