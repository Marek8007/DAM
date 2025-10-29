package mapa;

import java.util.ArrayList;

public class Map {

    private ArrayList<ArrayList<MapTile>> map = new ArrayList<>();
    private int finalRoomN;
    private final int mapSize = 7;
    private final int minRooms = 7;
    private final int maxRooms = 10;
    private final int seed;


    private void fillArray() {
        for (int i = 0; i< mapSize; i++){
            ArrayList<MapTile> file = new ArrayList<>();
            for (int j=0;j<mapSize;j++){
                file.add(new MapTile());
            }
            map.add(file);
        }
    }

    public Map() {
        fillArray();
        seed = (int)(Math.random()*99999999);
    }
    
    public Map(int seed) { //creates an array of MapTiles
        fillArray();
        this.seed = seed;
    }

    private Room generateRoom() { //generates a room and adds it to the HashMap
        return new Room();
    }

    private void layoutStart() { //chooses a random number between 4 and sets the room 0 at a specific location
        int halfSize = mapSize/2;

        int positions[][] = {{0, halfSize}, {halfSize, mapSize-1}, {mapSize-1, halfSize}, {halfSize, 0}};

        int startPosition = (int) (Math.random()*4);

        map.get(positions[startPosition][0])
                .set(positions[startPosition][1], generateRoom());
    }

    private int[] getRoomCoords(int generatedOrder) { //given a generated order, searches in the map a room with than generated order en return an int[] with its coordinates
        int[] coords = new int[]{0, 0};

        for (int i = 0; i<mapSize; i++) {
            for (int j=0;j<mapSize;j++) {
                if (map.get(i).get(j) instanceof Room && map.get(i).get(j).getGeneratedOrder() == generatedOrder) {
                    coords[0] = i;
                    coords[1] = j;
                }
            }
        }
        return coords;
    }

    public void generateLayout() {
        System.out.println(seed);
        finalRoomN = (seed%(maxRooms+1)-minRooms)+minRooms;

        layoutStart();

        int lastRoomGenerated = 0;
        int[] lastGeneratedCoords = getRoomCoords(lastRoomGenerated);

        boolean generationEnded = false;
        int roomGenerated = 0;
        int tries = 0;


        System.out.println("Starting generation of map...");
        do { // big loop to generate all rooms

//            System.out.println("Generating room "+ totalRooms);
//            System.out.println("room "+totalRooms+". Last room generated: "+ lastGeneratedCoords[0]+", "+lastGeneratedCoords[1]);

            tries=0;
            do { //loop to generate a room
                tries++;
                //this array has the number that added to the current coords give the next coords to generate a room.
                int[][] directions = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

                // Directions: 0 ^, 1 >, 2 v, 3 <
                int random = (int) (Math.random() * directions.length);

                //adds a random set to the coords to get the next coords
                int newRow = lastGeneratedCoords[0] + directions[random][0];
                int newCol = lastGeneratedCoords[1] + directions[random][1];

                // Check límit of array
                if (newRow >= 0 && newRow < map.size() &&
                        newCol >= 0 && newCol < map.get(newRow).size() &&
                        !(map.get(newRow).get(newCol) instanceof Room)) {

                    map.get(newRow).set(newCol, generateRoom());
                    roomGenerated = 1;
                }

                if (tries>100) {
                    roomGenerated=-1;
                }

            } while (roomGenerated==0);

            if (Room.getTotalRooms() == finalRoomN || roomGenerated==-1) {
                generationEnded = true;
            }

            if (roomGenerated==-1) {
                System.out.println("Generation ended prematurely");
            }

            roomGenerated = 0; // set to false again to repeat loop
//            System.out.println("room generated");

            lastRoomGenerated++;
            lastGeneratedCoords = getRoomCoords(lastRoomGenerated); //update last generated room

//            System.out.println(this);
//            try {
//                Thread.sleep(500); // Espera 1 segundo
//            } catch (InterruptedException e) {
//                e.printStackTrace(); // Captura la excepción si el hilo es interrumpido
//            }


        } while (!generationEnded);


        System.out.println("generation of rooms ended");
    }

    @Override
    public String toString() {
        String outputMap = "";
        for (int i=0;i<mapSize;i++){
            for (int j=0;j<mapSize;j++){
                outputMap = outputMap+map.get(i).get(j);
            }
            outputMap = outputMap+"\n";
        }
        return outputMap;
    }

    public int getFinalRoomN() {
        return finalRoomN;
    }
}
