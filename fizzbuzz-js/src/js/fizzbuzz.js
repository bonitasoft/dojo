var bonitasoft = (function(module) {

    function contains(number, marker) {
        return ("" + number).indexOf(marker) > 0;
    }

    var isFizz = function(number) {
        return contains(number, 3) || number % 3 === 0;
    };

    var isBuzz = function(number) {
        return contains(number, 7) || number % 7 === 0;
    };


    module.fizzbuzz = function(number) {
        if(isFizz(number)) {
            return "fizz";
        }
        if(isBuzz(number)) {
            return "buzz";
        }

        return "" + number;
    };

    return module;

})(bonitasoft || {});