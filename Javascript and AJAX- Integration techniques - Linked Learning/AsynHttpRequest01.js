// The first step in working with AJAX is to learn about the API browsers provide for sending and retrieving information.
// The way you access the API is by using a XML HTTP request or XHR object.

for(var i = 0; i < 100; i++){
    var request = new XMLHttpRequest();
    request.open('GET', 'data.txt', false);
    // false indicate not asynchronously
    request.send();
    if(request.status === 200){
        console.log(request);
        document.writeln(request.responseText);
    }
}

