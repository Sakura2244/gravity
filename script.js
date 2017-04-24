// JavaScript File
$( document ).ready(function() {
    
    $("#pic").click(function(){
    $("#pic").css("top", $("#pic").offset().top + 10);
    });
    setInterval(function(){ $("#pic").css("top", $("#pic").offset().top + 10);}, 100);
});
