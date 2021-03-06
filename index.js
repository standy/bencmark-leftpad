var Benchmark = require('benchmark');

function leftpad_orig(str, len, ch) {
	str = String(str);
	var i = -1;
	if (!ch && ch !== 0) ch = ' ';
	len = len - str.length;
	while (++i < len) {
		str = ch + str;
	}
	return str;
}

function leftpad_prejoin(str, len, ch) {
	str = String(str);
	if (!ch && ch !== 0) ch = ' ';
	len = len - str.length;
	if (len < 1) return str;
	var pad = '';
	while (len--) {
		pad += ch;
	}
	return pad + str;
}

function leftpad_modern(str, len, ch) {
	str = String(str);
	len = len - str.length;
	if (len < 1) return str;
	if (!ch && ch !== 0) ch = ' ';
	return ch.repeat(len) + str;
}

function leftpad_array(str, len, ch) {
	str = String(str);
	len = len - str.length;
	if (len < 1 || isNaN(len)) return str;
	if (!ch && ch !== 0) ch = ' ';
	return Array(len + 1).join(ch) + str;
}

function leftpad_binary(str, len, ch) {
	str = String(str);
	len = len - str.length;
	if (len < 1 || isNaN(len)) return str;
	if (!ch && ch !== 0) ch = ' ';

	var temp = ch;
	var pad = '';
	var bit = 1;
	for (; ;) {
		if (len & bit) {
			pad += temp;
		}
		if (bit < len) {
			bit *= 2;
			temp += temp;
		} else {
			return pad + str;
		}
	}
}

function leftpad_binary_simpler(str, len, ch) {
	str = String(str);
	len = len - str.length;
	if (len < 1 || isNaN(len)) return str;
	if (!ch && ch !== 0) ch = ' ';

	var pad = '';
	for (var i = len, temp = ch; i !== 0; i >>= 1) {
		if (i & 1) pad += temp;
		temp += temp;
	}
	return pad + str;
}

function bench(text, padlen, padchar, onComplete) {
	var suite = new Benchmark.Suite;
	suite
		.add('leftpad_orig', function() {
			leftpad_orig(text, padlen, padchar);
		})
		.add('leftpad_prejoin', function() {
			leftpad_prejoin(text, padlen, padchar);
		})
		.add('leftpad_modern', function() {
			leftpad_modern(text, padlen, padchar);
		})
		.add('leftpad_array', function() {
			leftpad_array(text, padlen, padchar);
		})
		.add('leftpad_binary', function() {
			leftpad_binary(text, padlen, padchar);
		})
		.add('leftpad_binary_simpler', function() {
			leftpad_binary_simpler(text, padlen, padchar);
		})
		.on('start', function() {
			console.log('\nBenchmarking: leftpad("%s", %s, "%s")', text, padlen, padchar);
		})
		.on('complete', function() {
			var fastest = this.filter('fastest')[0];
			this.forEach(function(bench) {
				console.log(String(bench) + ' #' + (Math.round(bench.hz / fastest.hz * 100) / 100));
			});
			onComplete && onComplete();
		})
		.run({
			async: true
		});
}

var STR = 'abacus';
var CHAR = ' ';
var LENGTHS = [80, 40, 20, 10, 5];
var i = 0;

function start() {
	if (i >= LENGTHS.length) return;
	bench(STR, LENGTHS[i], CHAR, start);
	i++;
}
start();
