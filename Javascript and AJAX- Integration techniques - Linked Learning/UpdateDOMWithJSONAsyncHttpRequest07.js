
var request;
// This is done mainly for maintaining the backward compatibility.
if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
}else{
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.json', false);
// when ever the readyState == 4 then the request of sending and requesting is considered complete
// if 0 then it is not yet started
request.onreadystatechange = function(){
	if (request.status===200 && request.readyState === 4) {
        var modify = document.getElementById('update2');
        var output = "<ul>";
        var jsondata = JSON.parse(request.responseText);
        console.log(jsondata);
        for(var key in jsondata){
            output = output + "<li>" + jsondata[key].shortname + "</li>";
        }
        output = output + "</ul>";
        modify.innerHTML = output;
	}	
}
request.send();
