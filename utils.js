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

function showScrollTopButton(){
	var declarations = document.createTextNode('.2topButton{background:#ffffff;background-image:-webkit-linear-gradient(top, #ffffff, #ffffff);background-image:-moz-linear-gradient(top, #ffffff, #ffffff);background-image:-ms-linear-gradient(top, #ffffff, #ffffff);background-image:-o-linear-gradient(top, #ffffff, #ffffff);background-image:linear-gradient(to bottom, #ffffff, #ffffff);-webkit-border-radius:5;-moz-border-radius:5;border-radius:5px;font-family:Arial;color:#c20000;font-size:24px;padding:10px 20px;border:solid #c96666 2px;text-decoration:none}.2topButton:hover{background:#c96666;background-image:-webkit-linear-gradient(top, #c96666, #c96666);background-image:-moz-linear-gradient(top, #c96666, #c96666);background-image:-ms-linear-gradient(top, #c96666, #c96666);background-image:-o-linear-gradient(top, #c96666, #c96666);background-image:linear-gradient(to bottom, #c96666, #c96666);text-decoration:none;color:#fff}');
	// .2topButton {
	//   background: #ffffff;
	//   background-image: -webkit-linear-gradient(top, #ffffff, #ffffff);
	//   background-image: -moz-linear-gradient(top, #ffffff, #ffffff);
	//   background-image: -ms-linear-gradient(top, #ffffff, #ffffff);
	//   background-image: -o-linear-gradient(top, #ffffff, #ffffff);
	//   background-image: linear-gradient(to bottom, #ffffff, #ffffff);
	//   -webkit-border-radius: 5;
	//   -moz-border-radius: 5;
	//   border-radius: 5px;
	//   font-family: Arial;
	//   color: #c20000;
	//   font-size: 24px;
	//   padding: 10px 20px 10px 20px;
	//   border: solid #c96666 2px;
	//   text-decoration: none;
	// }

	// .2topButton:hover {
	//   background: #c96666;
	//   background-image: -webkit-linear-gradient(top, #c96666, #c96666);
	//   background-image: -moz-linear-gradient(top, #c96666, #c96666);
	//   background-image: -ms-linear-gradient(top, #c96666, #c96666);
	//   background-image: -o-linear-gradient(top, #c96666, #c96666);
	//   background-image: linear-gradient(to bottom, #c96666, #c96666);
	//   text-decoration: none;
	//   color: #fff;
	// }

	// Prep and append styles to HEAD
	var head = document.getElementsByTagName('head')[0];
	var style = document.createElement('style');
	style.type = 'text/css';
	if (style.styleSheet) {
	  style.styleSheet.cssText = declarations.nodeValue;
	} else {
	  style.appendChild(declarations);
	}
	head.appendChild(style);
	
	var btn = document.createElement("button");
  	btn.innerText = "TOP";
  	btn.classList.add('2topButton');
  	btn.style.color = "red";
  	btn.addEventListener('click', ()=>{
  		document.documentElement.scrollTop = 0;
  	});
	
  	// Append button to DOM
  	document.body.appendChild(btn);
}

/* ================================================================== */

/*function downloadFileByUrl(url, fileName){
     let link = document.createElement("a");
    link.download = name;
     link.href = url;
     link.click();
 } */

/* ================================================================== */
