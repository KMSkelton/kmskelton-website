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

export function drawCaptcha () {
  var a = Math.ceil(Math.random() * 9) + ''
  var b = Math.ceil(Math.random() * 9) + ''
  var c = Math.ceil(Math.random() * 9) + ''
  var d = Math.ceil(Math.random() * 9) + ''
  var e = Math.ceil(Math.random() * 9) + ''
  var f = Math.ceil(Math.random() * 9) + ''
  var g = Math.ceil(Math.random() * 9) + ''
  var code = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g
  document.getElementById('txt-captcha').value = code
  return code
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
export function check (input) {
  var cap = removeSpaces(document.getElementById('txt-captcha').value)
  if (input !== cap && input.length === 7) {
    alert('This does not match the above. Please Check!')
  }
}
