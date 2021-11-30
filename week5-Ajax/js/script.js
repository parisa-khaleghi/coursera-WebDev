// Event handling
document.addEventListener("DOMContentLoaded",
	function (event) {

		// Unobstrusive event binding
		document.querySelector("button")
			.addEventListener("click", function () {
				
				// Call the server to get the name
				ajaxUtils
					.sendGetRequest("data/name.json", function (res) {
							var message = res.firstName + " " + res.lastName;
							if(res.likesChineseFood) {
								message += " Likes Chinese Food"
							} else {
								message += " Doesn't Like Chinese Food"
							}
							message += " and uses ";
							message += res.numberOfDisplay;
							message += " displays for coding."

							document.querySelector("#content")
								.innerHTML = "<h2>Hello " + message + "!</h2>";
						});
				
			});
	}
);


// name.txt
// document.addEventListener("DOMContentLoaded",
// 	function (event) {

// 		// Unobstrusive event binding
// 		document.querySelector("button")
// 			.addEventListener("click", function () {
				
// 				// Call the server to get the name
// 				ajaxUtils
// 					.sendGetRequest("../data/name.txt", function (response) {
// 							console.log(response);
// 							var name = response.responseText;
// 							document.querySelector("#content")
// 								.innerHTML = "<h2>Hello " + name + "!";
// 						});
				
// 			});
// 	}
// );