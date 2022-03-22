export function flipText (header, text) {
  slidePanel(header, text)
}
const slidePanel = (header, text) => {
  setTimeout(() => {
    header.setAttribute('class', 'open')
    text.setAttribute('class', 'gone')
  }, 1000)
}
export const unFlipText = (header, text) => {
  header.removeAttribute('class', 'open')
  text.removeAttribute('class', 'gone')
  slidePanel(header, text)
}
// Generates the captcha function

function drawCaptcha () {
  var a = Math.ceil(Math.random() * 9) + ''
  var b = Math.ceil(Math.random() * 9) + ''
  var c = Math.ceil(Math.random() * 9) + ''
  var d = Math.ceil(Math.random() * 9) + ''
  var e = Math.ceil(Math.random() * 9) + ''
  var f = Math.ceil(Math.random() * 9) + ''
  var g = Math.ceil(Math.random() * 9) + ''
  var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f
  document.getElementById('txt-captcha').value = code
}

(function () {
  if (document.getElementById('txt-captcha')) {
    drawCaptcha()
  } else {
    return false
  }
})()

// Remove the spaces from the entered and generated code
function removeSpaces (string) {
  return string.split(' ').join('')
}

// Validate the Entered input aganist the generated security code function
function check (input) {
  var cap = removeSpaces(document.getElementById('txt-captcha').value)
  if (input.value != cap) {
    input.setCustomValidity('This does not match the above. Please Check!')
  } else {
    // input is fine -- reset the error message
    input.setCustomValidity('')
  }
}
