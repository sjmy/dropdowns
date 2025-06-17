export default function jsDropdowns() {
  function show(dropdownContent) {
    dropdownContent.classList.add("show");
  }

  function hide(dropdownContent) {
    dropdownContent.classList.remove("show");
  }

  function addListeners() {
    const dropdownButtons = document.querySelectorAll(".dropdown-button");
    const dropdownContent = document.querySelectorAll(".dropdown-content");

    for (let i = 0; i < dropdownButtons.length; i++) {
      dropdownButtons[i].addEventListener("click", (e) => {
        if (dropdownContent[i].classList.contains("show")) {
          hide(dropdownContent[i]);
        } else {
          show(dropdownContent[i]);
        }
      });
    }
  }

  return { addListeners };
}
