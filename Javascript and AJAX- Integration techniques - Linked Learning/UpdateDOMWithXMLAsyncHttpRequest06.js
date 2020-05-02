
var request;
// This is done mainly for maintaining the backward compatibility.
if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
}else{
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.xml', false);
// when ever the readyState == 4 then the request of sending and requesting is considered complete
// if 0 then it is not yet started
request.onreadystatechange = function(){
	if (request.status===200 && request.readyState === 4) {
        var modify = document.getElementById('update1');
        var output = "<ul>";
        console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue);
        var names = request.responseXML.getElementsByTagName('name');
        for(var i = 0; i< names.length; i++){
            output = output + "<li>" + names[i].firstChild.nodeValue + "</li>";
        }
        output = output + "</ul>"
        modify.innerHTML = output;
	}	
}
request.send();
