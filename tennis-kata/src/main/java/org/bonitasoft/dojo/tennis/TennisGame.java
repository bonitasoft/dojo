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
		if (score.equals(new Score(40, 40))) {
			return new DeuceScore();
		}
		return score;
	}

}
