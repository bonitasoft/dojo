var bonitasoft = (function(module) {

    var isFizz = function(number) {
        return ("" + number).indexOf("3") > 0 || number % 3 === 0;
    };

    module.fizzbuzz = function(number) {
        if(isFizz(number)) {
            return "fizz";
        }
        if(("" + number).indexOf("7") > 0) {
            return "buzz";
        }
        return "" + number;
    };

    return module;

})(bonitasoft || {});