const panelArray = [...document.querySelectorAll('.panel')];

function toggleOpen() {
  console.log(panelArray)
  if (this.classList.contains('open')){
    this.classList.remove('open');
  } else {
    panelArray.forEach(panel => panel.classList.contains('open') ? panel.classList.toggle('open') : null)
    this.classList.toggle('open');
  }

}
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
panelArray.forEach(panel => panel.addEventListener('click', toggleOpen));
panelArray.forEach(panel => panel.addEventListener('transitionend', toggleActive));


/*
panelArray.forEach(panel => this.classList.contains('open') ? this.classList.remove('open') : null)
panelArray.forEach(panel => panel.classList.contains('open-active') ? panel.classList.remove('open-active') : null)
*/
