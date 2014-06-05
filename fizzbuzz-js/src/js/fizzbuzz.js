var bonitasoft = {};


bonitasoft.fizzbuzz = function(number) {
    var result = "" + number;
    if(result.indexOf("3") > 0) {
        result = "fizz";
    }
    if (number % 3 === 0) {
        result = "fizz";
    }
    return result;
};
