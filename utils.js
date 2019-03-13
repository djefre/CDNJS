// Loads exernal javascript files by addigng a <script> tag to the head
function loadExternalJsFileByUrl(url){
	let scriptElement = document.createElement('script');
	scriptElement.src = url;
	scriptElement.type = 'application/javascript';
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
  	divBtn.style.bottom = '25px';
	divBtn.style.right = '10px';
	divBtn.style.borderColor = 'darkred';
	divBtn.style.borderStyle = 'solid';
	divBtn.style.padding = '5px 10px 5px 10px';
	divBtn.style.borderWidth = '2px';
  	divBtn.style.color = 'darkred';
  	divBtn.style.cursor = 'pointer';
  	divBtn.onmouseover = function(){
  		console.log('mouse over to top button');
  	}

  	divBtn.addEventListener('click', ()=>{
  		document.documentElement.scrollTop = 0 + mts;
  	});

  	// Append button to DOM
  	document.body.appendChild(divBtn);
}

/* ================================================================== */

function styledConsoleMessageExample(){
	let font="font-family: roboto;";
	let italic="font-style: italic;";
	let blue="color: #005FAB;";
	let red="color: #CE0538;";
	let black = "color: black;";
	let large="font-size: 40px;";
	let normal="font-size: 30px;margin-top:10px;";
	let small="font-size: 18px;";
	let blueLarge=font+blue+large+italic;
	let redLarge=font+red+large+italic;
	let redNormal=font+red+normal+italic;
	let redSmall=font+red+small;
	let blueNormal=font+blue+normal+italic;
	let blueSmall=font+blue+small;
	let blackLarge=font+black+large;
	let blackNormal=font+black+normal;
	let inspireText="%cnog meer text hierzo";
	console.log("%cJ%cE%cFF%c software",redLarge,redLarge,blackLarge,redNormal);
	console.log(inspireText, redSmall);
}

function getUrlParameterValueByName(parameterName, url){
	url = !url ? window.location.search : url; // Default to window.location.search if no url is supplied
	return (new URLSearchParams(url).get(parameterName));
}

/* ================================================================== */

/*function downloadFileByUrl(url, fileName){
     let link = document.createElement("a");
    link.download = name;
     link.href = url;
     link.click();
 } */

/* ================================================================== */