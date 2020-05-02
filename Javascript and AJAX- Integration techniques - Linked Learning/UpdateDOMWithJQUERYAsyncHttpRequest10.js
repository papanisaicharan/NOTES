$.getJSON('data.json', function(data){
    var output = "<ul>";
    console.log(data);
    $.each(data, function(key, value){
        output += "<li>"+ value.name +"</li>";
    });
    output += "</ul>";
    $('#jqs3update').append(output); // we can you prepend, load
})
