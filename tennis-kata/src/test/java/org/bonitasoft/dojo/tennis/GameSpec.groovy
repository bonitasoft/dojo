package org.bonitasoft.dojo.tennis

import spock.lang.Specification

/**
 * @author Vincent Elcrin
 */
class GameSpec extends Specification {

    def "when no player score then result is 0 - 0"() {
        given:
            Game game = new Game();
        expect:
            game.result == "0 - 0"
    }

    def "when player 1 score first then result is 15 - 0"() {
        given:
            Game game = new Game();
        when:
            game.firstPlayerScore();
        then:
            game.result == "15 - 0"
    }

    def "when player 2 score first then result is 0 - 15"() {
        given:
            Game game = new Game();
        when:
            game.secondPlayerScore();
        then:
            game.result == "0 - 15"
    }

    def "when both player score the same then result is 15 - 15"() {
        given:
            Game game = new Game();
        when:
            game.firstPlayerScore();
            game.secondPlayerScore();
        then:
            game.result == "15 - 15"
    }
}
