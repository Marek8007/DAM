package mapa;

import java.util.ArrayList;
import java.util.HashMap;

public class Map {

    private HashMap<Integer, Room> rooms = new HashMap<>();
    private ArrayList<ArrayList<MapTile>> map = new ArrayList<>();
    private int totalRooms = 0;
    final private int maxRooms = (int) (Math.random()*4)+5;


    public Map() { //creates a 5x5 array of MapTiles
        for (int i=0;i<5;i++){
            ArrayList<MapTile> file = new ArrayList<>();
            for (int j=0;j<5;j++){
                file.add(new MapTile());
            }
            map.add(file);
        }
    }

    private Room generateRoom() { //generates a room and adds it to the HashMap
        Room room = new Room(totalRooms);
        this.rooms.put(totalRooms, room);
        totalRooms++;
        return room;
    }

    public void generateLayout() {
        for (int i=0;i<maxRooms;i++){

            map.get((int) (Math.random()*5)).set((int) (Math.random()*5) ,generateRoom());
        }
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
