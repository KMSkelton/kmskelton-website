$(document).ready(function() {
  var slideMe = function() {
    $("#RWDtext").slideToggle("slow");
    $("#tryMe").slideToggle("slow");
    $("#header").slideToggle("slow");
  }
  setTimeout(function() {
    slideMe();
  }, 3500);
  $("#RWDtext").click(function() {
    slideMe();
  });
  $("#header").click(function() {
    slideMe();
  });
});
