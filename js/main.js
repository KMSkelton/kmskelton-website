$(document).ready(function() {
  var slideMe = function() {
    $("#RWDtext").slideToggle("slow");
    $("#tryMe").slideToggle("slow");
    $("#headerText").slideToggle("slow");
  }
  setTimeout(function() {
    slideMe();
  }, 1500);
  setTimeout(function() {
    slideMe();
    $("#headerText").append("<br /><h6 align='center' style='display:inline-block; color:yellow; font-size:0.5em; margin-top: 5em; cursor: pointer;'>click me</h6>"); //yes this is hacky, and I don't particularly like it, but the CSS has already loaded and a page reload would restart the timers.
  }, 3500);
  $("#RWDtext").click(function() {
    slideMe();
  });
  $("#headerText").click(function() {
    slideMe();
  });
});


//Created / Generates the captcha function

function drawCaptcha() {
  var a = Math.ceil(Math.random() * 6) + '';
  var b = Math.ceil(Math.random() * 6) + '';
  var c = Math.ceil(Math.random() * 6) + '';
  var d = Math.ceil(Math.random() * 6) + '';
  var e = Math.ceil(Math.random() * 6) + '';
  var f = Math.ceil(Math.random() * 6) + '';
  var g = Math.ceil(Math.random() * 6) + '';
  var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f;
  document.getElementById("txtCaptcha").value = code
}

(function() {
  if ( document.getElementById("txtCaptcha") ) {
  drawCaptcha();
} else {
  return false;
}
})();

// Remove the spaces from the entered and generated code
function removeSpaces(string) {
  return string.split(' ').join('');
}

// Validate the Entered input aganist the generated security code function
function check(input) {
  var cap = removeSpaces(document.getElementById('txtCaptcha').value);
  if (input.value != cap) {
    input.setCustomValidity("This does not match the above. Please Check!");
  } else {
    // input is fine -- reset the error message
    input.setCustomValidity('');
  }
}
