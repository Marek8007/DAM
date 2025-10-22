package mapa;

import java.util.ArrayList;

public class Room extends MapTile{

    private final int width;

    private final int height;

    private boolean unlocked = false;

    ArrayList<Room> connections;

    final private int generatedOrder;

    public Room(int generatedOrder) {
        super("#");
        width = (int) (Math.random()*6)+3;
        height = (int) (Math.random()*6)+3;
        this.generatedOrder = generatedOrder;
    }


    @Override
    public String toString() {
        return generatedOrder+"#";
    }

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }

    public ArrayList<Room> getConnections() {
        return connections;
    }

    public void setConnections(ArrayList<Room> connections) {
        this.connections = connections;
    }
}

