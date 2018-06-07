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
		} else this.selector = selector; // Else, just assume it to be a valid obj
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
					callback(); // Try calling the callback
				} catch(error) { // Otherwise log error
					console.warn('$$.ready(callback) - callback throwed error:');
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
			if (this.selector == null) return; // If null stop execution
			try {
				Array.from(this.selector).forEach(fn); // Assume is an NodeList
			} catch (error) {
				fn(this.selector,0);
			}
		},
		/*
		* log() - Prints every element that is currently selected on the console
		*         NOTE: This is primarly for debugging purposes
		*/
		log: function () {
			this.each(function (element, index) { // Loop through every element
				console.log('Element ' + index + ' is ' + element); // Log the element
			});
		},
		/*
		* first() - Return the first selected element
		* 
		* @return selector is the first selector in the list
		*/
		first: function () {
			var toReturn = null;
			try {
				toReturn = this.selector[0]; // Try to get the first element in the list
			} catch (error) {
				try {
					toReturn = this.selector; // Try to get the only selector
				} catch (newError) {
					console.error('$$.first() - No element selected');
				}
			}
			return toReturn;
		},
		/*
		* select() - Simulates an user click on the element
		*/
		select: function () {
			this.first().click(); // Click on the first element
		},
		/*
		* html(newHtml) - Sets OR returns the inner HTML
		*                 IF parameter passed, changes the inner html of each element selected
		*                 ELSE returns the inner HTML of the first element selected, if any
		* 
		* @param  newHtml (optinal) new html for elements
		* @return html if no parameter is passed, returns first element's html
		*/
		html: function (newHtml) {
			if (newHtml == undefined) return this.first().innerHTML; // Returns the innerHTML for the first element
			this.each(function (element) {	
				element.innerHTML = newHtml; // Set the inner html given parameter
			});
		},
		/*
		* addClass(newClass) - Adds a given class to every selected element
		* 
		* @param  class string containing the name of the class to add
		*/
		addClass: function (newClass) {
			this.each(function (element) { // Go to each element
				element.classList.add(newClass); // Add the given class to the element
			});
		},
		/*
		* removeClass(oldClass) - Removes a given class to every selected element
		* 
		* @param  class string containing the name of the class to remove
		*/
		removeClass: function (oldClass) {
			this.each(function (element) { // Go to every selected element
				element.classList.remove(oldClass); // Remove the given class
			});
		},
		/*
		* toggleClass(className) - Toggles a given class to every selected element
		* 
		* @param  class string containing the name of the class to toggle
		*/
		toggleClass: function (className) {
			this.each(function (element) { // For each element
				element.classList.toggle(className); // Toggle the class
			});
		},
		/*
		* style(property, newValue) - Sets OR returns the given style property
		*                 IF newValue passed, changes all the instances to the new newValue
		*                 ELSE returns the velue for the given style property of the first element
		* 
		* @param  property is a style property
		* @param  newValue (optinal) new value to appy
		* @return html if no newValue parameter, returns first element's property's value
		*/
		style: function (property, newValue) {
			if (newValue == undefined) return this.first().style[property]; // If no newValue, reurn the property
			this.each(function (element) { // Otherwise, 
				element.style[property] = newValue; // Set the new value
			});
		}
	};
})(this,document);