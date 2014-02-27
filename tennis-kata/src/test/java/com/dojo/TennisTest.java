package com.dojo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;

import org.junit.Test;

public class TennisTest {

	private Game game;

	@Test
	public void whenGameStartScoresAre00() {
		// given
		game = new Game();

		// when

		// then
		assertThat(game.getPlayer1().getScore())
				.as(game.getPlayer1().getName()).isEqualTo(Point.ZERO);

		assertThat(game.getPlayer2().getScore())
		.as(game.getPlayer1().getName()).isEqualTo(Point.ZERO);


	}

	@Test
	public void whenPlayer1ScoresScoreIs_15_0() throws Exception {

		// given
		game = new Game();
		// when
		game.getPlayer1().winPoint();

		// then
		assertThat(game.getPlayer1().getScore())
				.as(game.getPlayer1().getName()).isEqualTo(Point.FIFTEEN);
	}
}
