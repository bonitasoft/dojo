package org.bonitasoft.dojo.tennis;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * @author Vincent Elcrin
 */
public class Game {

    public void firstPlayerScore() {

    }

    public Map<String, String> getResult() {
        Map<String, String> result = new HashMap<String, String>();
        result.put("player 1", "15");
        result.put("player 2", "0");
        return result;
    }
}
