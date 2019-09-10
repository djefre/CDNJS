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

/* ================================================================== */

function getUrlParameterValueByName(parameterName, url){
	url = !url ? window.location.search : url; // Default to window.location.search if no url is supplied
	return (new URLSearchParams(url).get(parameterName));
}

/* ================================================================== */

function getDaysMinutesHoursSecondsFromMiliseconds(ms, separator){
	separator = !separator ? ":" : separator; // Default separator to ':'
    let days = Math.floor(ms / (24*60*60*1000));
    let daysms=ms % (24*60*60*1000);
    let hours = Math.floor((daysms)/(60*60*1000));
    let hoursms=ms % (60*60*1000);
    let minutes = Math.floor((hoursms)/(60*1000));
    let minutesms=ms % (60*1000);
    let sec = Math.floor((minutesms)/(1000));
    return days+separator+hours+separator+minutes+separator+sec;
}
/* ================================================================== */

function convertTimeToSeconds(h,m,s){
    return((h*60*60+m*60+s));
}

/* ================================================================== */

function getUTCEpoch(inputDate){
	let epoch;
	if(!inputDate){
		epoch = Math.floor((new Date).getTime()/1000);
	}
	else{
		window.console.warn('Is the input value UTC?')
		epoch = Math.floor((new Date(inputDate)).getTime()/1000);
	}
	return epoch;
}

/* ================================================================== */

function executeFunctionAtEpoch(epochTriggerTime, functionToExecuteOnTrigger){
	let isDebug = true;
	let futureEpoch = Math.floor(epochTriggerTime);
	if(isDebug) window.console.log('futureEpoch: ', futureEpoch);

	let currentEpoch = Math.floor(getUTCEpoch());
	if(isDebug) window.console.log('currentEpoch: ', currentEpoch);

	var timeOutInMs = (futureEpoch - currentEpoch) * 1000;
	if(timeOutInMs < 0){
		window.console.error('Event registered in past, milliseconds passed since:', timeOutInMs);
		return;
	}

	if(isDebug){
		let consoleString = 'function ';
		consoleString += functionToExecuteOnTrigger;
		consoleString += ' will be executed in: '
		consoleString += timeOutInMs + 'ms';
		window.console.log(consoleString);
	} 
	setTimeout(functionToExecuteOnTrigger, timeOutInMs);
}

/* ================================================================== */

function getUserId(){
	let claims = getClaimsFromJWT();
	if(!claims.unique_name) window.console.error('No userId found in claims');

	return claims.unique_name;
}

function getRefreshToken(){
	let claims = getClaimsFromJWT();
	if(!claims.rft) window.console.error('No refreshToken found in claims');

	return claims.rft;
}

function getClaimsFromJWT(){
	// Collect the JWT
	let jwt = getJWT();

	// Claims are stored in the middle portion of the JWT
	let claims = JSON.parse(atob(jwt.split('.')[1]));

	return claims;
}

/* ================================================================== */
/*function downloadFileByUrl(url, fileName){
     let link = document.createElement("a");
    link.download = name;
     link.href = url;
     link.click();
 } */


/* ================================================================== */
// ======  PROTOTYPING
/* ================================================================== */

// This prototype moves an item in an array to a new position/index in the array
Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};

/* ================================================================== */
