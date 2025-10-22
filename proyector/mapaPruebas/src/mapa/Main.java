package mapa;

public class Main {
    public static void main(String[] args) {


        Map map = new Map();

        System.out.println(map);

        map.generateLayout();
        System.out.printf("Rooms: %d\n", map.getMaxRooms());
        System.out.println(map);
    }
}
