package org.bonitasoft.dojo.tennis;

import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

/**
 * @author Vincent Elcrin
 */
public class Game {

    List<String> scores = Arrays.asList("0", "15", "30", "40");

    private String firstPlayerScore;

    private final Iterator<String> firstPlayerIterator;

    private String secondPlayerScore;

    private final Iterator<String> secondPlayerIterator;

    public Game() {
        firstPlayerIterator = scores.iterator();
        secondPlayerIterator = scores.iterator();

        firstPlayerScore();
        secondPlayerScore();
    }

    public void firstPlayerScore() {
        firstPlayerScore = firstPlayerIterator.next();
    }

    public void secondPlayerScore() {
        secondPlayerScore = secondPlayerIterator.next();
    }

    public String getResult() {
        if(firstPlayerScore == "40" && secondPlayerScore == "40") {
            return "deuce";
        }
        return firstPlayerScore + " - " + secondPlayerScore;
    }

}
