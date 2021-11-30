(function (window){

 //Set up a namespce for our utility
 var ajaxUtils = {};

 //Returns an HTTP request object
 function getRequestObject() {
 	if(window.XMLHttpRequest){
 		return (new XMLHttpRequest());
 	} else if(window.ActiveXObject){
 		//For very old IE browsers (Optional)
 		return (new ActiveXObject("Microsoft.XMLHHTTP"));
 	} else {
 		global.alert("Ajax is not supported!");
 		return (null);
 	}
 }

 // var request = getRequestObject();
 // var myHandler = null;

 //Make an Ajax GET request to 'requestUrl'
 ajaxUtils.sendGetRequest = 
 	function (requestUrl, responseHandler, isJsonResponse) {
 		var request = getRequestObject();
 		// myHandler = responseHandler;
 		// request.onreadystatuschange =
 			// handleResponse;
 		request.onreadystatechange = function () {
 				handleResponse(request, responseHandler, isJsonResponse)
 			};
 		request.open("GET", requestUrl, true);
 		request.send(null); // for POST only
 	}

 // only calls users provided 'responseHandler'
 // function if response is ready
 // and not an error
 function handleResponse(request, responseHandler, isJsonResponse) {
 	if((request.readyState == 4) && (request.status == 200)) {
 		responseHandler(request);
 	}

 	if(isJsonResponse == undefined) {
 		isJsonResponse = true;
 	}

 	if(isJsonResponse) {
 		responseHandler(JSON.parse(request.responseText));
 	} else {
 		responseHandler(request.responseText);
 	}
 }

 // Expose utility to theh global object
 window.ajaxUtils = ajaxUtils;


})(window);