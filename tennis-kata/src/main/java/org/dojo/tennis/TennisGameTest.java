package org.dojo.tennis;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;

public class TennisGameTest {

    private TennisGame tennisGame;

    @Before
    public void setup() {
        tennisGame = new TennisGame();
    }

    @Test
    public void should_new_game_be_at_0() throws Exception {

        Score score1 = tennisGame.getPlayer1Score();
        Score score2 = tennisGame.getPlayer2Score();

        assertEquals(Score._0, score1);
        assertEquals(Score._0, score2);
    }

    @Test
    public void should_player1_mark_one_point_return_15_0() throws Exception {
        tennisGame.pointForPlayer1();

        assertEquals(Score._15, tennisGame.getPlayer1Score());
        assertEquals(Score._0, tennisGame.getPlayer2Score());
    }

    @Test
    public void should_player1_mark_one_point_return_30_0() throws Exception {
        tennisGame.pointForPlayer1();
        tennisGame.pointForPlayer1();

        assertEquals(Score._30, tennisGame.getPlayer1Score());
        assertEquals(Score._0, tennisGame.getPlayer2Score());
    }

    @Test
    public void should_player1_mark_one_point_return_40_0() throws Exception {
        tennisGame.pointForPlayer1();
        tennisGame.pointForPlayer1();
        tennisGame.pointForPlayer1();

        assertEquals(Score._40, tennisGame.getPlayer1Score());
        assertEquals(Score._0, tennisGame.getPlayer2Score());
    }

    @Test
    public void should_player2_mark_one_point_return_15_0() throws Exception {
        tennisGame.pointForPlayer2();

        assertEquals(Score._0, tennisGame.getPlayer1Score());
        assertEquals(Score._15, tennisGame.getPlayer2Score());
    }

    @Test
    public void should_player2_mark_one_point_return_30_0() throws Exception {
        tennisGame.pointForPlayer2();
        tennisGame.pointForPlayer2();

        assertEquals(Score._0, tennisGame.getPlayer1Score());
        assertEquals(Score._30, tennisGame.getPlayer2Score());
    }

    @Test
    public void should_player2_mark_one_point_return_40_0() throws Exception {
        tennisGame.pointForPlayer2();
        tennisGame.pointForPlayer2();
        tennisGame.pointForPlayer2();

        assertEquals(Score._0, tennisGame.getPlayer1Score());
        assertEquals(Score._40, tennisGame.getPlayer2Score());
    }

}
