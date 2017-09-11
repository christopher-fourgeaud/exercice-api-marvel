var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

for (var i = 0; i < 26; i++) {
    $("#ici").append("<button id='" +alphabet[i]+ "'class='btn btn-primary letter'>"+alphabet[i]+"</button>");
    
}
var lettre;

$(".letter").click(function(){
    lettre = $(this).text();
    
    $.ajax({
        url: "http://gateway.marvel.com/v1/public/characters?limit=100&nameStartsWith="+lettre+"&ts=100&apikey=29f0e7063e107f9c87dd688c6dcb59e0&hash=e3403560b759c97bdf5b00b93acde6e3",
        success: function(data){
            console.log(data.data);
            $("#liste-hero").html("");
            for (var i = 0; i < data.data.results.length; i++) {
                $("#liste-hero").append("<tr class='hero'><td >"+data.data.results[i].id+"</td><td>"+data.data.results[i].name+"</td><td><img class='thumbnail'src='"+data.data.results[i].thumbnail.path+"."+data.data.results[i].thumbnail.extension +"'></td><td>"+data.data.results[i].description+"</td><td>"+data.data.results[i].comics.available+"</td><td>"+data.data.results[i].stories.available+"</td><td>"+data.data.results[i].series.available+"</td></tr>")  ;          
            }
            new List('test-list', {
                valueNames: ['hero'],
                page: 5,
                pagination: true
            });
        },error: function(){
            alert("Echec de la connexion !");
        }
        
    });
    
})

