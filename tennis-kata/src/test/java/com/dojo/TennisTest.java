package com.dojo;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;

public class TennisTest {

	@Test
	public void whenGameStartScoresAre00() {
	Score score=new Score();
	assertThat(score.getPlayer1Score()).as("player1").isEqualTo("0");
	assertThat(score.getPlayer2Score()).as("player2").isEqualTo("0");
	
	
	}

}
