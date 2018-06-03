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
		/*
		* ready(callback) - Executes callback when document is loaded
		* 
		* @param callback is a function that will be called when DOM Loaded
		*/
		ready: function (callback) {
			if(document.readyState === "interactive" || document.readyState === "complete") {
				try {
					callback();
				} catch(error) {
					console.warn('ready(callback) - callback throwed error:');
					console.error(error);
				}
			} else document.addEventListener("DOMContentLoaded", callback);
		},
		/*
		* each(fn) - Calls a given function on every selected element
		* 
		* @param fn is a function with two parameters: an element and a index number
		*/
		each: function (fn) {
			if (this.selector.length > 1) {
				Array.from(this.selector).forEach(fn);
			} else if (this.selector.length == 1) {
				fn(this.selector[0],0);
			}
		},
		/*
		* log() - Prints every element that is currently selected on the console
		*         NOTE: This is primarly for debugging purposes
		*/
		log: function () {
			this.each(function (element, index) {
				console.log('Element ' + index + ' is ' + element);
			});
		}
	};
})(this,document);