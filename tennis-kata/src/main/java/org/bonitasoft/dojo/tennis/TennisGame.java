package org.bonitasoft.dojo.tennis;

public class TennisGame {

	private Score score;

	public TennisGame(Score score) {
		this.score = score;
	}

	public TennisGame() {
		this(new Score(0,0));
	}

	public Score getScore() {
		return score;
	}

	public Score playerOneWinBall() {
		return new AdvantageScore();
	}

}
