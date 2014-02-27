package org.bonitasoft.dojo.tennis;

public class AdvantageScore extends Score {

	public AdvantageScore() {
		super();
	}
	
	@Override
	public boolean equals(Object obj) {
		return obj instanceof AdvantageScore;
	}
}
