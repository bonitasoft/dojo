package org.bonitasoft.tdd.tennis;

import static org.assertj.core.api.Assertions.assertThat;
import static org.bonitasoft.tdd.tennis.Score._0;
import static org.bonitasoft.tdd.tennis.Score._15;
import static org.bonitasoft.tdd.tennis.Score._30;

import org.junit.Test;

public class GameTest {

    @Test
    public void player1winsShouldkeepPlayer2ScoreUnchangedForScoreInferiorTo40FromNewGame() throws Exception {
        // given:
        Game game = new Game();

        // when:
        game.player1WinsBall();
        // then:
        assertThat(game.score2).isEqualTo(_0);
    }

    @Test
    public void player1winsShouldRiseHisScoreForScoreInferiorTo40() throws Exception {
        // given:
        Game game = new Game();

        // when:
        game.player1WinsBall();
        // then:
        assertThat(game.score1).isEqualTo(_15);
    }

    @Test
    public void player1winsShouldkeepPlayer2ScoreUnchangedForScoreInferiorTo40FromResumedGame() throws Exception {
        // given:
        Game game = new Game(_30, _30);

        // when:
        game.player1WinsBall();
        // then:
        assertThat(game.score2).isEqualTo(_30);
    }

    @Test
    public void player1winsShouldRiseHisScoreForScoreInferiorTo40FromResumedGame() throws Exception {
        // given:
        Game game = new Game(_15, _30);

        // when:
        game.player1WinsBall();
        // then:
        assertThat(game.score1).isEqualTo(_30);
    }

    @Test
    public void player1winsShouldRiseToDeuceIf30_40() throws Exception {
        // given:
        Game game = new Game(_30, Score._40);

        // when:
        game.player1WinsBall();
        // then:
        assertThat(game.score1).isEqualTo(Score.DEUCE);
    }
}
