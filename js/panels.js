const panelArray = [...document.querySelectorAll('.panel')];

function toggleOpen() {
  // if the panel is open and we want it closed we have to refer to the panel directly. 
  if (this.classList.contains('open')){
    this.classList.remove('open');
  } else {
    // go through all four of the panels and check whether a panel has 'open' as a class
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
