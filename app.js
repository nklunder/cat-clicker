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

function loadDisplayCat() {

}

function addCatClick(e) {
  var currentCat = event.target.dataset.name;

  window[currentCat].clickCount++;
  console.log(boris);
}

// Event Listeners
catDisplay.addEventListener("click", addCatClick);
catList.addEventListener("click", loadDisplayCat);


// Load initial collection of cats
loadCatList();
