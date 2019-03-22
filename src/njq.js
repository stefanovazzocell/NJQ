'use strict';

/*
* NJQ (Version 0.2.1)
* by Stefano Vazzoler (stefanovazzocell@gmail.com)
* https://stefanovazzoler.com/
*/

(function(window,document,undefined){
	const $$ = function(selector) {
		if (!(this instanceof $$)) // If it's a new instance,
			return new $$(selector); // initialize it with the given selector
		if (typeof selector == 'string') { // If selector has string
			this.s = document.querySelectorAll(selector); // Attempt to find it
		} else this.s = selector; // Else, just assume it to be a valid obj
	};
	window.$$ = $$;
	$$.fn = $$.prototype = {
		/*
		* ready(callback) - Executes callback when document is loaded
		* 
		* @param callback is a function that will be called when DOM Loaded
		*/
		ready: function (callback) {
			if(document.readyState === 'interactive' || document.readyState === 'complete') {
				callback(); // Callback
			} else document.addEventListener('DOMContentLoaded', callback);
		},
		/*
		* each(fn) - Calls a given function on every selected element
		* 
		* @param fn is a function with two parameters: an element and a index number
		*/
		each: function (fn) {
			try {
				Array.from(this.s).forEach(fn);
			} catch (e) {
				fn(this.s,0);
			}
			return this;
		},
		/*
		* first() - Return the first selected element
		* 
		* @return selector is the first selector in the list
		*/
		first: function () {
			return (this.s[0] || this.s);
		},
		/*
		* select() - Simulates an user click on the element
		*/
		select: function () {
			this.first().click(); // Click on the first element
			return this;
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
			return this;
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
			return this;
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
			return this;
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
			return this;
		},
		/*
		* hasClass(className) - Checks if the element has a given class
		* 
		* @param  class string containing the name of the class to toggle
		* @return true if element has a given class, false otherwise
		*/
		hasClass: function (className) {
			// Check if element has the class
			return this.first().classList.contains(className);
		},
		/*
		* style(property, newValue) - Sets OR returns the given style property
		*                 IF newValue passed, changes all the instances to the new newValue
		*                 ELSE returns the velue for the given style property of the first element
		* 
		* @param  property is a style property
		* @param  newValue (optinal) new value to appy
		* @return string if no newValue parameter, returns first element's property's value
		*/
		style: function (property, newValue) {
			if (newValue == undefined) return this.first().style[property]; // If no newValue, reurn the property
			this.each(function (element) { // Otherwise, 
				element.style[property] = newValue; // Set the new value
			});
			return this;
		},
		/*
		* val(newValue) - Gets the value of the first selected element
		*                 or changes all the selected elements values to the given
		* 
		* @param  newValue (optional) string with the new value's name
		* @return string if no new value given, returns cirrent value
		*/
		val: function (newValue) {
			if (newValue == undefined) return this.first().value; // Get the value of the first element
			this.each(function (element) {
				element.value = newValue; // Sets the vealue of every element selected
			});
		},
		/*
		* prop(property, newValue) - Gets the requested attribute of the first selected element
		*                 or changes all the selected elements values to the given
		* 
		* @param  newValue (optional) string with the new attribute's value
		* @return string with the current attribute if no newValue set
		*/
		prop: function (property, newValue) {
			if (newValue == undefined) return this.first().getAttribute(property); // Gents the prop of first
			this.each(function (element) {property
				element.setAttribute(property, newValue); // Sets the property of every element
			});
			return this;
		},
		/*
		* event(event, callback) - Sets a callback for an event
		* 
		* @param  event string that specificies which event to attach che callback to
		* @param  callback function to call back
		*/
		event: function (event, callback) {
			this.each(function (element) { // For every element
				element.addEventListener(event, callback); // Sets the listener and passes the callback
			});
			return this;
		},
		/*
		* onClick(callback) - Sets a click callback
		* 
		* @param  callback function to callback
		*/
		onClick: function (callback) {
			this.event('click', callback); // Sets a click callback
		},
		/*
		* post(url, data, onSuccess, onFail, isJson) - Performs a POST request
		* 
		* @param  url string the url that is being called
		* @param  data (optional) object containing the body of the post request
		* @param  onSuccess(response,xhr) (optional) function called if success
		* @param  onFail(xhr) (optional) function function called in case of failure
		* @param  isJson (optional) bool true if there is the need to encode data as json, false otherwise
		*/
		post: function (url, data={}, onSuccess=()=>{}, onFail=()=>{}, isJson=true) {
			this.ajax(url, 'POST', data, onSuccess, onFail, '', isJson); // Make ajax POST request
		},
		/*
		* get(url, data, onSuccess, onFail) - Performs a GET request
		* 
		* @param  url string the url that is being called
		* @param  data (optional) object containing the data of the get request (passed as parameters)
		* @param  onSuccess(response,xhr) (optional) function called if success
		* @param  onFail(xhr) (optional) function function called in case of failure
		*/
		get: function (url, data={}, onSuccess=()=>{}, onFail=()=>{}) {
			var par = '';
			if (!this.emptyObj(data)) { // If any data is passed
				par = '?' + this.encodeUri(data); // Add to par after encoding it
			}
			this.ajax(url + par, 'GET', {}, onSuccess, onFail); // Make ajax GET request
		},
		/*
		* ajax(url, method, data, onSuccess, onFail, contentType, isJson) - Performs a request
		* 
		* @param  url string the url that is being called
		* @param  method (optional) string specifies the method of the request
		* @param  data (optional) object containing the body of the ajax request
		* @param  onSuccess(response,xhr) (optional) function called if success
		* @param  onFail(xhr) (optional) function function called in case of failure
		* @param  contentType (optional) string specifies the content type header
		* @param  isJson (optional) bool true if data is json, false otherwise
		a*/
		ajax: function (url, method='GET', data={}, onSuccess=()=>{}, onFail=()=>{console.error('NJQ Ajax Error');}, contentType='', isJson=false) {
			const xhr = new XMLHttpRequest(); // Initialize a XMLHttpRequest
			if (method == 'GET' && !this.emptyObj(data)) method='POST'; // Try to guess the method
			xhr.open(method, url); // Prepare the request - isJson
			// Try to guess the content type header
			if (contentType == '' && method == 'POST' && !isJson) contentType = 'application/x-www-form-urlencoded'; // "application/json"
			if (contentType == '' && method == 'POST' && isJson) contentType = 'application/json';
			// Set the header if necessary
			if (contentType != '') xhr.setRequestHeader('Content-Type', contentType);
			xhr.onload = function() { // Prepares the request callbacks
				if (xhr.status === 200) { // If successful
					onSuccess(xhr.responseText, xhr); // Callback to onSuccess
				} else onFail(xhr); // else callback to onFail
			};
			if (data != {}) { // If there is any data to pass in the body
				if (isJson) {
					xhr.send(JSON.stringify(data)); // Send the encoded URI back (json mode)
				} else xhr.send(this.encodeUri(data)); // Send the encoded URI back
			} else {
				xhr.send(); // Else, just send the request
			}
		},
		/*
		* encodeUri(data) - Encodes the data for URI
		* 
		* @param  data (optional) object containing the data to encode
		* @return string with the data object encoded for URI
		*/
		encodeUri: function (data={}) {
			var out = [];
			for(let key in data){ // Add all data in an array
				out.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
			}
			return encodeURI(out.join('&')); // Return the value by joining it
		},
		/*
		* emptyObj(obj) - Checks if an object is empty
		* 
		* @param  obj object containing the data to check
		* @return boolean true if is empty and false if has element
		*/
		emptyObj: function (obj) {
			// Checks if length 0 and is object
			return obj.constructor === Object && Object.keys(obj).length === 0;
		}
	};
})(this,document);