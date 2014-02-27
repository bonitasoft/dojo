package org.dojo.tennis;

import static org.junit.Assert.assertEquals;

import org.dojo.tennis.Player.Point;
import org.dojo.tennis.Player.Status;
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

        Player score1 = tennisGame.getPlayer1();
        Player score2 = tennisGame.getPlayer2();

        assertEquals(Point._0, score1.getPoint());
        assertEquals(Point._0, score2.getPoint());
    }

    @Test
    public void should_player1_mark_one_point_return_15_0() throws Exception {
        tennisGame.pointForPlayer1();

        assertEquals(Point._15, tennisGame.getPlayer1().getPoint());
        assertEquals(Point._0, tennisGame.getPlayer2().getPoint());
    }

    @Test
    public void should_player1_mark_2_point_return_30_0() throws Exception {
        tennisGame.pointForPlayer1();
        tennisGame.pointForPlayer1();

        assertEquals(Point._30, tennisGame.getPlayer1().getPoint());
        assertEquals(Point._0, tennisGame.getPlayer2().getPoint());
    }

    @Test
    public void should_player1_mark_3_point_return_40_0() throws Exception {
        tennisGame.pointForPlayer1();
        tennisGame.pointForPlayer1();
        tennisGame.pointForPlayer1();

        assertEquals(Point._40, tennisGame.getPlayer1().getPoint());
        assertEquals(Point._0, tennisGame.getPlayer2().getPoint());
    }

    @Test
    public void should_player2_mark_one_point_return_15_0() throws Exception {
        tennisGame.pointForPlayer2();

        assertEquals(Point._0, tennisGame.getPlayer1().getPoint());
        assertEquals(Point._15, tennisGame.getPlayer2().getPoint());
    }

    @Test
    public void should_player2_mark_2_point_return_30_0() throws Exception {
        tennisGame.pointForPlayer2();
        tennisGame.pointForPlayer2();

        assertEquals(Point._0, tennisGame.getPlayer1().getPoint());
        assertEquals(Point._30, tennisGame.getPlayer2().getPoint());
    }

    @Test
    public void should_player2_mark_3_point_return_40_0() throws Exception {
        tennisGame.pointForPlayer2();
        tennisGame.pointForPlayer2();
        tennisGame.pointForPlayer2();

        assertEquals(Point._0, tennisGame.getPlayer1().getPoint());
        assertEquals(Point._40, tennisGame.getPlayer2().getPoint());
    }

    @Test
    public void should_player1_mark_4_point_return_win_lose() throws Exception {
        tennisGame.pointForPlayer1();
        tennisGame.pointForPlayer1();
        tennisGame.pointForPlayer1();
        tennisGame.pointForPlayer1();

        assertEquals(Status.WIN, tennisGame.getPlayer1().getStatus());
        assertEquals(Status.LOOSE, tennisGame.getPlayer2().getStatus());
    }

    @Test
    public void should_player2_mark_4_point_return_win_lose() throws Exception {
        tennisGame.pointForPlayer2();
        tennisGame.pointForPlayer2();
        tennisGame.pointForPlayer2();
        tennisGame.pointForPlayer2();

        assertEquals(Status.LOOSE, tennisGame.getPlayer1().getStatus());
        assertEquals(Status.WIN, tennisGame.getPlayer2().getStatus());
    }

}
