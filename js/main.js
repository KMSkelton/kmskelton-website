$(document).ready(function() {
  $("#header").click(function(){
    $("#RWDtext").slideToggle("slow");
    $("#tryMe").slideToggle("slow");
    $("#header").slideToggle("slow");

  });
  $("#RWDtext").click(function(){
    $("#header").slideToggle("slow");
    $("#tryMe").slideToggle("slow");
    $("#RWDtext").slideToggle("slow");
  });

});
