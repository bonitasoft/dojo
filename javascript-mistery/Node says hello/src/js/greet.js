var greet = function(message) {
	return "Welcome " + (message || "World!");
}

var module = (function(module) {
	module.exports = greet;
})(module || {});
