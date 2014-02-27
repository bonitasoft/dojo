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
}
