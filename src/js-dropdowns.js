export default function jsDropdowns() {
  // Add "show" class to dropdown-content div
  function show(dropdownContent) {
    dropdownContent.classList.add("show");
  }

  // Removes "show" class from dropdown-content div
  function hide(dropdownContent) {
    dropdownContent.classList.remove("show");
  }

  // Gathers all dropdown-button divs and dropdown-content divs,
  // adds event listener to each dropdown-button, and shows/hides as needed
  function addAllListeners() {
    const dropdownButtons = document.querySelectorAll(".dropdown-button");
    const dropdownContent = document.querySelectorAll(".dropdown-content");

    for (let i = 0; i < dropdownButtons.length; i++) {
      dropdownButtons[i].addEventListener("click", () => {
        if (dropdownContent[i].classList.contains("show")) {
          hide(dropdownContent[i]);
        } else {
          show(dropdownContent[i]);
        }
      });
    }
  }

  // Takes a dropdown-button element and dropdown-content element,
  // adds event listener, shows/hides as needed
  function addListener(dropdownButton, dropdownContent) {
    dropdownButton.addEventListener("click", () => {
      if (dropdownContent.classList.contains("show")) {
        hide(dropdownContent);
      } else {
        show(dropdownContent);
      }
    });
  }

  return { addAllListeners, addListener };
}
