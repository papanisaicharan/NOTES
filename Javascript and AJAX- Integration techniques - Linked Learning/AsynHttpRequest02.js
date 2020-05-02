
var request = new XMLHttpRequest();
request.open('GET', 'data.txt', false);
// when ever the readyState == 4 then the request of sending and requesting is considered complete
// if 0 then it is not yet started
request.onreadystatechange = function(){
	if (request.status===200 && request.readyState===4) {
		console.log(request);
		document.writeln(request.responseText);
	}	
}
request.send();
