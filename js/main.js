$(document).ready(function() {
  var slideMe = function() {
    $("#RWDtext").slideToggle("slow");
    $("#tryMe").slideToggle("slow");
    $("#headerText").slideToggle("slow");
  }
  setTimeout(function() {
    slideMe();
  }, 3500);
  setTimeout(function() {
    slideMe();
    $("#headerText").append("<br /><h6 align='center' style='display:inline-block; font-size:0.5em; margin-top: 5em'>click me</h6>"); //yes this is hacky, and I don't particularly like it, but the CSS has already loaded and a page reload would restart the timers.
  }, 6500);
  $("#RWDtext").click(function() {
    slideMe();
  });
  $("#headerText").click(function() {
    slideMe();
  });
});
