package com.dojo;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;

public class TennisTest {

	@Test
	public void whenGameStartScoresAre00() {
	Game game=new Game();
	assertThat(game.getPlayer1Score()).as(game.getPlayer1().getName()).isEqualTo(Point.ZERO);
	assertThat(game.getPlayer2Score()).as(game.getPlayer2().getName()).isEqualTo(Point.ZERO);
	
	
	}

}
