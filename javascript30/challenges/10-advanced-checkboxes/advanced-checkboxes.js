// JavaScript30 JS
// Get all the input checkboxes
var inputs = document.querySelectorAll('input[type="checkbox"]');

// Set a variable to check what the last checked box is.
let lastChecked;

// When a checkbox is clicked, this function will start and set an inBetween variable, which will tell us if we're in between the first checked box and the lastChecked box. If the user is holding down the shift key, it will loop over all of the remaining checkboxes. On the first run through, the inBetween variable gets changed to true, and all the checkboxes in between will get their checked property change to true. Once the lastChecked checkbox is reach, inBetween will get set to false again and end the function.

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    inputs.forEach(input => {
      if (input === this || input === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        input.checked = true;
      }
    });
  }
  lastChecked = this;
}

inputs.forEach(input => input.addEventListener("click", handleCheck));
