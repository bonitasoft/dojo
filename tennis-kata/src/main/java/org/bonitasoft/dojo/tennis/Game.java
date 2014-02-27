package org.bonitasoft.dojo.tennis;

/**
 * @author Vincent Elcrin
 */
public class Game {

    private String result;

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
