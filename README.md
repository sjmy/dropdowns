# js-dropdowns

A dropdown listener creator using Javascript and CSS.

The js-dropdowns.js module has two available functions:

### addAllListeners()

Gathers all dropdown-button and dropdown-content div pairs, adds a click event listener to each dropdown-button div, and shows/hides the dropdown-content div as necessary.

### addListener()

Adds an event listener to a single dropdown-button/dropdown-content div pair.

---

The js-dropdowns module relies on the follwing HTML structure. Each dropdown-button <em>must</em> be paired with a dropdown-content div that contains your items:

    <div class="dropdown">
      <button class="dropdown-button">Dropdown Menu 1</button>
      <div class="dropdown-content">
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
      </div>
    </div>

And requires the following CSS selectors:

    .dropdown-content {
        display: none;
    }

    .show {
        display: block;
    }

### Usage Examples

addAllListeners():

    import jsDropdowns from "./js-dropdowns";

    const dropdowns = jsDropdowns();
    dropdowns.addAllListeners();

addListener():

    import jsDropdowns from "./js-dropdowns";

    const dropdowns = jsDropdowns();
    const dropdownButton = document.querySelector(".dropdown-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdowns.addListener(dropdownButton, dropdownContent);
