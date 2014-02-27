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

    def "when both player  the same then result is 15 - 15"() {
        given:
            Game game = new Game();
        when:
        for(String player: score) {
            if("player 1".equals(player)) game.firstPlayerScore();
            if("player 2".equals(player)) game.secondPlayerScore();
        }
        then:
            game.result == result
        where:
        score                                                                                            | result
        []                                                                                               | "0 - 0"
        ["player 1"]                                                                                     | "15 - 0"
        ["player 2"]                                                                                     | "0 - 15"
        ["player 1", "player 2"]                                                                         | "15 - 15"
        ["player 2", "player 2"]                                                                         | "0 - 30"
        ["player 1", "player 1"]                                                                         | "30 - 0"
        ["player 1", "player 1", "player 1"]                                                             | "40 - 0"
        ["player 1", "player 1", "player 1", "player 1"]                                                 | "win - 0"
        ["player 2", "player 2", "player 2"]                                                             | "0 - 40"
        ["player 2", "player 2", "player 2", "player 2"]                                                 | "0 - win"
        ["player 1", "player 1", "player 1", "player 2", "player 2", "player 2"]                         | "deuce"
        ["player 1", "player 2", "player 1", "player 2", "player 1", "player 2", "player 1"]             | "advantage - 40"
        ["player 1", "player 2", "player 1", "player 2", "player 1", "player 2", "player 2"]             | "40 - advantage"
    }
}
