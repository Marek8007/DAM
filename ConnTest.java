import com.mysql.cj.log.Log;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnTest {

    public static void main(String[] args) {

        String url = ConfigLoader.getDbUrl();
        String user = ConfigLoader.getDbUser();
        String password = ConfigLoader.getDbPassword();

        try (Connection con = DriverManager.getConnection(url, user, password)) {
            System.out.println(con);
        } catch (SQLException e) {
            LogWriter.logError(e);
        }
    }



}
