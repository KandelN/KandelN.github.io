$(document).ready(function(){
    $(document).mousemove(function(event){
       $("#light").css({"top": event.pageY - 275, "left": event.pageX - 275}); 
    });     
 });
 
 