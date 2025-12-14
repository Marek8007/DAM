package ud1;

public class killNote {
    public static void main(String[] args) {
        ProcessBuilder pb = new ProcessBuilder("/usr/bin/kate");

        try {
            Process p = pb.start();

            Thread.sleep(1000);

            new ProcessBuilder("pkill", "kate").start();

        } catch (Exception e) {
            System.out.println(e);
        }


    }
}
