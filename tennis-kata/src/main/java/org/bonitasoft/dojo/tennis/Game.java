package org.bonitasoft.dojo.tennis;

/**
 * @author Vincent Elcrin
 */
public class Game {

    private String result = "0 - 0";

    public Game() {
    }

    public void firstPlayerScore() {
        result = "15 - 0";
    }

    public void secondPlayerScore() {
        result = "0 - 15";
    }

    public String getResult() {
        return result;
    }

}
