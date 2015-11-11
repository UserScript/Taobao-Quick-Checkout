
// shim
if (typeof unsafeWindow === 'undefined') {
	var unsafeWindow = window
}

// shim for string methods
if (typeof String.prototype.contains !== 'function') {
	String.prototype.contains = String.prototype.includes
}

// lib
// `$` already used by original page's script
// need to test whether this is necessary
var $ = Zepto
