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

function fireFunctionWhenUserStopsTyping(elementSelector, interval, functionToExecuteWhenUserIsDoneTyping, eventString) {
	let timer;
	let inputElement = document.querySelector(elementSelector);
	let ev = eventString === null || eventString === undefined || eventString === '' ? 'keyup' : eventString;

	// start the countdown on 'keyup'
	inputElement.addEventListener(ev, function () {
		clearTimeout(timer);
		if (inputElement.value) {
			timer = setTimeout(functionToExecuteWhenUserIsDoneTyping, interval);
		}
	});
}

/* ================================================================== */

// Still needs some styling
function showScrollTopButton(marginTopScroll){
	var mts = marginTopScroll ? +marginTopScroll : 0;
	var divBtn = document.createElement("div");
  	divBtn.innerHTML = "TOP";
  	divBtn.style.position = 'fixed';
  	divBtn.style.bottom = '10px';
	divBtn.style.right = '10px';
  	divBtn.style.color = 'darkred';
  	divBtn.style.cursor = 'pointer';
  	divBtn.addEventListener('click', ()=>{
  		document.documentElement.scrollTop = 0 + mts;
  	});
	
  	// Append button to DOM
  	document.body.appendChild(divBtn);
}

/* ================================================================== */

/*function downloadFileByUrl(url, fileName){
     let link = document.createElement("a");
    link.download = name;
     link.href = url;
     link.click();
 } */

/* ================================================================== */
