package com.dojo;

public class Player {

	private Point score = Point.ZERO;

	public String getName() {
		return "Marcel";
	}

	public void winPoint() {
		score = Point.FIFTEEN;

	}

	public Point getScore() {
		return score;
	}

}
