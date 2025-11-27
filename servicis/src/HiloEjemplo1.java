public class HiloEjemplo1 implements Runnable{

    public static int contador = 0;

    @Override
    public void run() {
        contador += 100;
    }

    public static void main(String[] args) throws InterruptedException {

        HiloEjemplo1 miRunnable = new HiloEjemplo1();

        Thread thread1 = new Thread(miRunnable);
        Thread thread2 = new Thread(miRunnable);
        Thread thread3 = new Thread(miRunnable);
        Thread thread4 = new Thread(miRunnable);
        Thread thread5 = new Thread(miRunnable);



        thread1.start();
        thread2.start();
        thread3.start();
        thread4.start();
        thread5.start();


        Thread.sleep(100);
        System.out.println(contador);


    }

}
