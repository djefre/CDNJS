// Loads exernal javascript files by addigng a <script> tag to the head
function loadExternalJsFileByUrl(url){
	let scriptElement = document.createElement('script');
	scriptElement.src = url;
	document.head.appendChild(scriptElement);
}

/* ================================================================== */

// Executes a supplied function when the DOM is loaded
function onDomLoaded(onReady){
	if (document.readyState === "loading") {  // Loading hasn't finished yet
  		document.addEventListener("DOMContentLoaded", onReady);
	} else {  // `DOMContentLoaded` has already fired
  		onReady();
	}
}

/* ================================================================== */

function fireFunctionWhenUserStopsTyping(elementSelector, interval, functionToExecuteWhenUserIsDoneTyping) {
	let timer;
	let inputElement = document.querySelector(elementSelector);

	// start the countdown on 'keyup'
	inputElement.addEventListener('keyup', function () {
		clearTimeout(timer);
		if (inputElement.value) {
			timer = setTimeout(functionToExecuteWhenUserIsDoneTyping, interval);
		}
	});
}

/* ================================================================== */

/*function downloadFileByUrl(url, fileName){
     let link = document.createElement("a");
    link.download = name;
     link.href = url;
     link.click();
 } */

/* ================================================================== */
