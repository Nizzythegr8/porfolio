const changeTheme = document.getElementById("theme-changer");
let themeDots = document.getElementsByClassName("theme-dot");
let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("clicked:", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    changeTheme.href = "defaulttheme.css";
  }
  if (mode == "dark") {
    changeTheme.href = "dark.css";
  }
  if (mode == "green") {
    changeTheme.href = "green.css";
  }
  if (mode == "blue") {
    changeTheme.href = "blue.css";
  }
  localStorage.setItem("theme", mode);
}


