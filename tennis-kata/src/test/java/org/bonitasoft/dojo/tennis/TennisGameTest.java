/**
 * 
 */
package org.bonitasoft.dojo.tennis;

import static org.assertj.core.api.Assertions.assertThat;

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
}
