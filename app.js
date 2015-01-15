//// DOM element variables ////
var catDisplay    = document.getElementById("cat-display"),
    displayName   = document.getElementById("display-name"),
    displayPic    = document.getElementById("display-pic"),
    displayClicks = document.getElementById("display-clicks"),

    catList = document.getElementById("cat-list");

// Array for storing collection of cats;
var catSet = [];
// Initial collection of cats
var boris    = new Cat("Boris");
var aurora   = new Cat("Aurora");
var paco     = new Cat("Paco");
var maurice  = new Cat("Maurice");
var sharonda = new Cat("Sharonda");

// Variable to store a reference to the current cat's object.
// Set when loadDisplayCat function is called.
var currentCat = null;

// Cat constructor
function Cat(name) {
  this.name = name;
  this.clickCount = 0;
  // Add new cat to 'catSet' array
  catSet.push(this);
}

function loadCatList() {
  catSet.forEach(function (cat) {
    catList.innerHTML += "<li>" + cat.name + "</li>";
  });
}

function addCatClick() {
  currentCat.clickCount++;
  displayClicks.textContent = currentCat.clickCount;
}


function loadDisplayCat(event) {
  currentCat = window[event.target.innerText.toLowerCase()];

  displayName.textContent = currentCat.name;
  displayPic.src = "img/" + currentCat.name + ".jpg";
  displayClicks.textContent = currentCat.clickCount;
}

// Event Listeners
catDisplay.addEventListener("click", addCatClick);
catList.addEventListener("click", loadDisplayCat);


// Load initial collection of cats
loadCatList();
