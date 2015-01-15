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
// Set 
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

function addCatClick(event) {
  var currentCat = event.target.dataset.name.toLowerCase(),
      // Use currentCat string captured from event to
      // reference the corresponding cat object
      catObject = window[currentCat];

  catObject.clickCount++;
  displayClicks.textContent = catObject.clickCount;
  console.log(boris);
}


function loadDisplayCat(event) {
  var catName = event.target.innerText;

  displayName.textContent = catName;
  displayPic.dataset.name = catName;
  displayPic.src = "img/" + catName + ".jpg";
  displayClicks.textContent = window[catName.toLowerCase()].clickCount;
}

// Event Listeners
catDisplay.addEventListener("click", addCatClick);
catList.addEventListener("click", loadDisplayCat);


// Load initial collection of cats
loadCatList();
