"use strict";

/*
* NJQ (Version 0.0.0)
* by Stefano Vazzoler (stefanovazzocell@gmail.com)
* https://stefanovazzoler.com/
*/

(function(window,document,undefined){
	var $$ = function(selector) {
		if (!(this instanceof $$)) // If it's a new instance,
			return new $$(selector); // initialize it with the given selector
		if (typeof selector == 'string') { // If selector has string
			this.selector = document.querySelectorAll(selector); // Attempt to find it
		} else this.selector = selector; // Else, just assume it to be a NodeList
	};
	window.$$ = $$;
	$$.fn = $$.prototype = {
		// Main functionality goes here
	};
})(this,document);