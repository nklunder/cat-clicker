var catPic1 = document.getElementById("cat-pic1"),
    catPic2 = document.getElementById("cat-pic2"),

    catKennel = document.getElementById("cat-kennel"),

    cat1Name = document.getElementById("cat1-name"),
    cat2Name = document.getElementById("cat2-name"),

    cat1CountDisplay = document.getElementById("cat1-count-display"),
    cat2CountDisplay = document.getElementById("cat2-count-display"),
    cat1ClickCount = 0;
    cat2ClickCount = 0;

cat1Name.textContent = "Boris";
cat2Name.textContent = "Aurora";

catKennel.addEventListener("click", function(e) {
  switch (e.target.id) {
  case "cat-pic1":
    cat1ClickCount++;
    cat1CountDisplay.textContent = cat1ClickCount;
    break;
  case "cat-pic2":
    cat2ClickCount++;
    cat2CountDisplay.textContent = cat2ClickCount;
    break;
  }
});
