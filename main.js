function sum(a, b) {
	return a + b;
}

function throwingFunction() {
	throw new Error('error');
}

module.exports = {sum, throwingFunction};
