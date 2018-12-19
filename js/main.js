$(document).ready(function () {
  var slideMe = function () {
    $("#RWDtext").slideToggle("slow");
  }
  setTimeout(function () {
    slideMe();
  }, 1500);
  $("#headerText").click(function () {
    slideMe();
  });
});

// Generates the captcha function

function drawCaptcha() {
  var a = Math.ceil(Math.random() * 9) + '';
  var b = Math.ceil(Math.random() * 9) + '';
  var c = Math.ceil(Math.random() * 9) + '';
  var d = Math.ceil(Math.random() * 9) + '';
  var e = Math.ceil(Math.random() * 9) + '';
  var f = Math.ceil(Math.random() * 9) + '';
  var g = Math.ceil(Math.random() * 9) + '';
  var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f;
  document.getElementById("txtCaptcha").value = code
}

(function () {
  if (document.getElementById("txtCaptcha")) {
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