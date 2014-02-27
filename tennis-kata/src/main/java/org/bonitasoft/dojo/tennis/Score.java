package org.bonitasoft.dojo.tennis;

public class Score {

	private int playerOneScore;
	private int playerTwoScore;

	public Score(int playerOneScore, int playerTwoScore) {
		this.playerOneScore = playerOneScore;
		this.playerTwoScore = playerTwoScore;
	}

	protected Score() {
	}

	@Override
	public boolean equals(Object obj) {
		if (! (obj instanceof Score)) {
			return false;
		}
		Score other = (Score) obj;
		return playerOneScore == other.playerOneScore && playerTwoScore == other.playerTwoScore;
	}

	public Score incrementPlayerOnePoints() {
		if(equals(new Score(30,40))) {
			return new DeuceScore();
		}
		if (equals(new AdvantageScore())) {
			return new WinGameScore();
		}
		return new AdvantageScore();
	}

}
