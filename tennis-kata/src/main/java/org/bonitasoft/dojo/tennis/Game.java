package org.bonitasoft.dojo.tennis;

/**
 * @author Vincent Elcrin
 */
public class Game {

    private String result = "0 - 0";

    private String firstPlayerScore = "0";

    private String secondPlayerScore = "0";

    public Game() {
    }

    public void firstPlayerScore() {
        firstPlayerScore = "15";
    }

    public void secondPlayerScore() {
        secondPlayerScore = "15";
    }

    public String getResult() {
        return firstPlayerScore + " - " + secondPlayerScore;
    }

}
