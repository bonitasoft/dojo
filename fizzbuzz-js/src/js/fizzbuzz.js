var fizzbuzzer = function () {
	var FIZZ = 3;
	var BUZZ = 7;

	function divisible(number, divisor) {
		return number % divisor == 0;
	}

	function contains(number, str) {
		return ("" + number).indexOf(str) > -1;
	}

	return {
         fizzbuzz: function (number) {
         	var result = "";
         	if (contains(number, "3") || divisible(number, FIZZ)) {
         		result += "FIZZ"; 
         	} 

         	if (contains(number, "7") || divisible(number, BUZZ)) {
         		result += "BUZZ";
         	}

         	if (result == "") {
         		return number;
         	} else {
         		return result;
         	}
         }	
    }
}();
