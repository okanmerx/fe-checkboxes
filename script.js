document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll('.toggle');
  const good = document.querySelector('#good');
  const cheap = document.querySelector('#cheap');
  const fast = document.querySelector('#fast');

  toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)));

  function doTheTrick(theClickedOne) {
    if (good.checked && cheap.checked && fast.checked) {
      if (good === theClickedOne) {
        fast.checked = false;
      }
      if (cheap === theClickedOne) {
        good.checked = false;
      }
      if (fast === theClickedOne) {
        cheap.checked = false;
      }
    }
  }
});
// This code listens for changes on the toggle switches and ensures that only one of them can be checked at a time.
// It uses the `DOMContentLoaded` event to ensure that the DOM is fully loaded before attaching event listeners.
// The `doTheTrick` function checks if all three toggles are checked and unchecks the one that was clicked if it is the one that caused the conflict.
// The `good`, `cheap`, and `fast` variables represent the three toggle switches.
// The `toggles` variable selects all elements with the class 'toggle' and adds a change event listener to each.        