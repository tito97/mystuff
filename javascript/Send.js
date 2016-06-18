/**
 * Send.js is a javascript api to help using XMLHttpRequest
 * in a very simple way.
 * 
 * Download this file to your javascript files directory
 * 
 * To create a XMLHttpRequest:
 * new Send.Request(method,url,callback,progress)
 *  where method and url are strings
 *  callback is a function with two paremeters ( the response text and
 *  and the state of the server)
 *
 * To submit forms use:
 * Send.setForm( formElement, callback, progress )
 *  where formElement is the form DOM Element
 *  the callback is a function with two paremeters (see callback from Send.Reques)
 *  progress is a function to watch the upload progress and receives a perameter Evente
 * 
 * Diogo Almiro 2016
 */
var Send = (function(){

	function Request(method, url, callback, progress){
		var req = new XMLHttpRequest();
		req.open(method, url, true);
		this.send = function(formData){
			req.send( formData );
		}
		req.onreadystatechange = function() {
			if( req.readyState == 4 )
				callback( req.responseText, req.status );
		}
		if( req.upload && progress )
			req.upload.onprogress = function(e) {
				progress(e);
			}
	}
	
	var Send = {};
	Send.setForm = function(formElement, callback, progress){
		var request = new Request(
				formElement.method,
				formElement.action,
				function(res, status){
					callback(res, status);
					formElement.reset();
				},
				progress
			);
		formElement.onsubmit = function() {
			request.send(new FormData(this));
			return false;
		}
	}

	/**
	 ** Not tested yet
	 **/
	Send.setOnclick = function(element, method, url, callback) {
		element.onclick = function(){
			new Request(method, url, callback).send();
			return false;
		}
	} 
	Send.Request = Request;
	return Send;

})()

