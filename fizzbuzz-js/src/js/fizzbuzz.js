var fizzbuzz = function(number) {
    var test = function(text, marker, number) {
        return ("" + number).indexOf(marker) > 0 || number % marker === 0 ? text : "";
    };
    return test("fizz", 3, number) + test("buzz", 7, number) || "" + number;
};