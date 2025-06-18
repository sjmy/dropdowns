import "./styles.css";
import jsDropdowns from "./js-dropdowns";

// Add listeners to all dropdowns
const dropdowns = jsDropdowns();
dropdowns.addAllListeners();

// Add listener to a single dropdown
// const dropdownButton = document.querySelector(".dropdown-button");
// const dropdownContent = document.querySelector(".dropdown-content");
// dropdowns.addListener(dropdownButton, dropdownContent);
