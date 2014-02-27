/**
 * 
 */
package org.bonitasoft.dojo.tennis;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;

import org.junit.Test;

/**
 * @author colin
 * 
 */
public class TennisGameTest {

	@Test
	public void should_new_game_start_with_0_0() throws Exception {
		TennisGame game = new TennisGame();
		
		Score score = game.getScore();
		
		assertThat(score).isEqualTo(new Score(0, 0));
	}
	
	@Test
	public void if_both_have_fourteen_they_are_deuce() throws Exception {
		TennisGame game = new TennisGame(new Score(40, 40));
		
		Score score = game.getScore();
		
		assertThat(score).isEqualTo(new DeuceScore());
	}
	
	@Test
	public void given_deuce_when_playerOne_score_get_advantage() throws Exception {
		TennisGame game = new TennisGame(new DeuceScore());
		
		Score score = game.playerOneWinBall();
		
		assertThat(score).isEqualTo(new AdvantageScore());
	}
	
	@Test
	public void if_the_player_with_advantage_wins_the_ball_he_wins_the_game() throws Exception {
		TennisGame game = new TennisGame(new AdvantageScore());
		
		Score score = game.playerOneWinBall();
		
		assertThat(score).isEqualTo(new WinGameScore());
	}
	
	@Test
	public void If_the_player_without_advantage_wins_they_are_back_at_deuce() throws Exception {
		TennisGame game = new TennisGame(new AdvantageScore());
		
		Score score = game.playerTwoWinBall();
		
		assertThat(score).isEqualTo(new DeuceScore());
	}
	
	@Test
	public void when_new_game_if_player2_win_ball_score_is_0_15() throws Exception {
		TennisGame game = new TennisGame();
		
		Score score = game.playerTwoWinBall();
		
		assertThat(score).isEqualTo(new Score(0, 15));
	}
	
	@Test
	public void when_score_is_30_40_playerOne_score_get_deuce() throws Exception {
		TennisGame game = new TennisGame(new Score(30,40));
		
		Score score = game.playerOneWinBall();
		
		assertThat(score).isEqualTo(new DeuceScore());
	}
}
