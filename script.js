document.getElementById("Btn1").addEventListener("click", function () {
  window.location.href = "level1.html";
});
function checkCode() {
  let userCode = document.getElementById("message").value;

  if (
    userCode == "background-color: pink;" ||
    userCode == "background-color:pink;"
  ) {
    document.getElementById("room").style.backgroundColor = "pink";
    alert("Correct! The room is now pink!");
  } else {
    alert("Not quite! Check your code and try again.");
  }
}

function checkCode2() {
  let userCode = document.getElementById("message").value;

  if (userCode == '<h2 class="comic-neue">Capybara\'s Room</h2>') {
    document.getElementById("sign").style.fontFamily = "Comic Neue";

    localStorage.setItem("signFont", "Comic Neue");

    alert("Correct! The sign is now in a nice font!");
  } else {
    alert("Not quite! Check your code and try again.");
  }
}
function checkCode3() {
  let userCode = document.getElementById("message").value;

  userCode = userCode.replace(/\s/g, "");

  let correctCode =
    ".furniture{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;}";

  if (userCode == correctCode) {
    document.querySelector(".furniture").style.justifyContent = "space-evenly";

    alert("Correct! The furniture is now nicely spaced out!");
  } else {
    alert("Not quite! Check your Flexbox code and try again.");
  }
}
function checkCode4() {
  let userCode = document.getElementById("message").value;

  userCode = userCode.replace(/\s/g, "");

  if (userCode == ".bookshelf{width:100px;}") {
    document.querySelector(".bookshelf").style.width = "100px";

    alert("Correct! The bookshelf is now bigger!");
  } else {
    alert("Not quite! Check your CSS and try again.");
  }
}
