package ud1;

public class suma {

    public static int sumar(int n1, int n2) {


        int totalSum = 0;

        for (int i=Math.min(n1, n2); i <= Math.max(n1, n2); i++) {
            totalSum += i;
        }

        return totalSum;


    }


    public static void main(String[] args) {

        System.out.println(sumar(Integer.parseInt(args[0]), Integer.parseInt(args[1])));

    }
}
