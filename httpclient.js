// Promise based httpClient
function httpClient (method, url) {
	return new Promise(function (resolve, reject) {
		  let xhr = new XMLHttpRequest();
    	xhr.open(method, url);
    	xhr.onload = function () {
	      	if (this.status >= 200 && this.status < 300) {
				    resolve(xhr.response);
	      	} 
	      	else {
        		reject({
          			status: this.status,
          			statusText: xhr.statusText
        		});
 			    }
    	};
    	xhr.onerror = function () {
      		reject({
        		status: this.status,
        		statusText: xhr.statusText
      		});
    	};
   		xhr.send();
	});
}

// === EXAMLPLE ===
// httpClient('GET', testUrl)
// 	.then((r) =>{ console.log(r); })
// 	.catch(function (err) {
// 	  console.error("I've encountered an error ): ", err.statusText);
// 	});

// ==================================================================
