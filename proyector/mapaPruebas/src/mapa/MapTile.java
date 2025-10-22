package mapa;

public class MapTile {
    private String tileSymbol;

    public MapTile() {
        tileSymbol = "··";
    }

    public MapTile(String tileSymbol) {
        this.tileSymbol = tileSymbol;
    }

    @Override
    public String toString() {
        return tileSymbol;
    }
}
