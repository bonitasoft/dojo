package org.bonitasoft.dojo.tennis

import spock.lang.Specification

/**
 * @author Vincent Elcrin
 */
class GameSpec extends Specification {

    def "when player one score then player 1 with 15"() {
        given:
            Game game = new Game();

        when:
            game.firstPlayerScore();

        then:
            game.result == ["player 1" : "15", "player 2": "0"]
    }
}
