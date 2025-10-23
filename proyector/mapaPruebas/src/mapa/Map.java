package mapa;

import java.util.ArrayList;

public class Map {

    private ArrayList<ArrayList<MapTile>> map = new ArrayList<>();
    private int maxRooms;


    public Map() { //creates a 5x5 array of MapTiles
        for (int i=0;i<5;i++){
            ArrayList<MapTile> file = new ArrayList<>();
            for (int j=0;j<5;j++){
                file.add(new MapTile());
            }
            map.add(file);
        }
    }

    private Room generateRoom(int totalRooms) { //generates a room and adds it to the HashMap
        return new Room(totalRooms);
    }

    private void layoutStart(int totalRooms) { //chooses a random number between 4 and sets the room 0 at a specific location
        maxRooms = (int) (Math.random()*4)+5;

        int startPosition = (int) (Math.random()*4);
        switch (startPosition) {
            case 0:
                map.get(0).set(2, generateRoom(totalRooms));
                break;
            case 1:
                map.get(2).set(4, generateRoom(totalRooms));
                break;
            case 2:
                map.get(4).set(2, generateRoom(totalRooms));
                break;
            case 3:
                map.get(2).set(0, generateRoom(totalRooms));
        }
    }

    private int[] getRoomCoords(int generatedOrder) { //given a generated order, searches in the map a room with than generated order en return an int[] with its coordinates
        int[] coords = new int[]{0, 0};

        for (int i=0;i<5;i++) {
            for (int j=0;j<5;j++) {
                if (map.get(i).get(j) instanceof Room) {
                    coords[0] = i;
                    coords[1] = j;
                }
            }
        }

        return coords;
    }

    public void generateLayout() {
        int totalRooms = 0;
        layoutStart(totalRooms);
        totalRooms++;

        int roomTried = 0;
        int[] roomTriedCoords = getRoomCoords(roomTried);

        boolean generationEnded = false;
        int generateRoomChances = 100;
        do {
            int random = (int) (Math.random()*4);

            switch (random) { //0^ - 1> - 2< - 3v
                case 0:
                    if (roomTriedCoords[0] != 0) {

                    }
                    break;
                case 1:
                    map.get(2).set(4, generateRoom(totalRooms));
                    break;
                case 2:
                    map.get(4).set(2, generateRoom(totalRooms));
                    break;
                case 3:
                    map.get(2).set(0, generateRoom(totalRooms));
            }




        } while (!generationEnded);




        //random rooms
//        int totalRooms = 0;
//        maxRooms = (int) (Math.random()*4)+5;
//        for (int i=0;i<maxRooms;i++){
//            map.get((int) (Math.random()*5)).set((int) (Math.random()*5) ,generateRoom(totalRooms));
//            totalRooms++;
//        }
    }



    @Override
    public String toString() {
        String outputMap = "";
        for (int i=0;i<5;i++){
            for (int j=0;j<5;j++){
                outputMap = outputMap+map.get(i).get(j);
            }
            outputMap = outputMap+"\n";
        }
        return outputMap;
    }

    public int getMaxRooms() {
        return maxRooms;
    }
}
