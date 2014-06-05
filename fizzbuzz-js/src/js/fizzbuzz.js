// function(int number) => "fizz / buzz / fizzbuzz / number
function fizzbuzz(number) {
	
	var FIZZ = 'fizz'
	var BUZZ = 'buzz'
	
	if (number % 3 == 0) {
		return FIZZ;
	}
	if (number % 7 == 0) {
		return BUZZ;
	}
	return "" + number;
}
